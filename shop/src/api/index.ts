import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";

import { Api } from "@/entities/api";

import {
  AddNewCategoryRequestType,
  AddProductRequestType,
  AddProductToCartRequestType,
  EditCategoryRequestType,
  GetAllCategoriesResponseType,
  GetCartResponseType,
  GetProductsRequestType,
  ProductType,
  UpdateProductToCartRequestType,
} from "./types";

const axiosBaseQuery =
  (): BaseQueryFn<{
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  }> =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const result = await Api.axios({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Products", "Categories", "Cart"], // Тег для кэширования
  endpoints: (builder) => ({
    getProducts: builder.query<
      { data: ProductType[]; meta: string | null },
      GetProductsRequestType
    >({
      query: (args) => ({
        url: "product/getProducts",
        params: args,
      }),
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation<void, AddProductRequestType>({
      query: (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("price", data.price.toString());
        formData.append("description", data.description);
        formData.append("category_id", data.categoryId.toString());
        formData.append("file", data.file);

        return {
          url: "product/addNewProduct",
          method: "POST",
          data: formData,
        };
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `product/deleteProduct?id=${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    getCategories: builder.query<GetAllCategoriesResponseType, void>({
      query: () => ({
        url: "category/getAll",
      }),
      providesTags: ["Categories"],
    }),
    addNewCategory: builder.mutation<void, AddNewCategoryRequestType>({
      query: (data) => ({
        url: "category/add",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Categories"],
    }),
    editCategory: builder.mutation<void, EditCategoryRequestType>({
      query: (data) => ({
        url: `category/edit?id=${data.id}`,
        method: "POST",
        data: { name: data.name },
      }),
      invalidatesTags: ["Categories", "Products", "Cart"],
    }),
    getCart: builder.query<GetCartResponseType, void>({
      query: () => ({
        url: "cart/getCart",
      }),
      providesTags: ["Cart"],
    }),
    addProductInCart: builder.mutation<void, AddProductToCartRequestType>({
      query: (data) => ({
        url: "cart/addProduct",
        method: "POST",
        data,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateProductInCart: builder.mutation<void, UpdateProductToCartRequestType>(
      {
        query: (data) => ({
          url: "cart/updateProduct",
          method: "POST",
          data,
        }),
        invalidatesTags: ["Cart"],
      },
    ),
    deleteProductFromCart: builder.mutation<void, number>({
      query: (id) => ({
        url: `cart/deleteProduct?productInCartId=${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Cart"],
    }),
    buy: builder.mutation<void, void>({
      query: () => ({
        url: "cart/buy",
        method: "POST",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useAddNewCategoryMutation,
  useEditCategoryMutation,
  useGetCartQuery,
  useAddProductInCartMutation,
  useUpdateProductInCartMutation,
  useDeleteProductFromCartMutation,
  useBuyMutation,
} = shopApi;
