export type CategoryType = {
  id: number;
  name: string;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  image: string;
};

export type GetProductsRequestType = {
  categoryId?: number;
  sort?: "ASC" | "DESC";
};

export type AddProductRequestType = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  file: File;
};

export type UpdateProductRequestType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category_id: number;
  file: File;
};

export type GetAllCategoriesResponseType = {
  data: CategoryType[];
  meta: string | null;
};

export type AddNewCategoryRequestType = {
  name: string;
};

export type EditCategoryRequestType = {
  id: number;
  name: string;
};

export type CartItemType = {
  productInCartId: number;
  amount: number;
  product: ProductType;
};

export type GetCartResponseType = {
  data: CartItemType[];
  meta: string | null;
};

export type AddProductToCartRequestType = {
  productId: number;
  amount: number;
};

export type UpdateProductToCartRequestType = {
  productInCartId: number;
  amount: number;
};
