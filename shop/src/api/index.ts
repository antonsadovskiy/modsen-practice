import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetProductsRequestType, ProductType } from "./types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_STORE_API_BASE_URL ?? "",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], GetProductsRequestType>({
      query: (args) => ({
        url: "products",
        params: args,
      }),
    }),
    getProductById: builder.query<ProductType, string>({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
    getProductsByCategory: builder.query<ProductType[], string>({
      query: (category) => ({
        url: `products/category/${category}`,
      }),
    }),
    getCategories: builder.query<string[], void>({
      query: () => ({
        url: "products/categories",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
} = shopApi;
