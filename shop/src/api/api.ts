import { GetProductsRequestType, ProductType } from "./types";

export class Api {
  static async getProducts(data?: GetProductsRequestType) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${data?.limit}&sortBy=${data?.sortBy}`,
      );
      return (await res.json()) as ProductType[];
    } catch (e) {
      console.error(e);
    }
  }

  static async getAllCategories() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      return (await res.json()) as string[];
    } catch (e) {
      console.error(e);
    }
  }

  static async getProductsByCategory(category: string) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
      );
      return (await res.json()) as ProductType[];
    } catch (e) {
      console.error(e);
    }
  }
}
