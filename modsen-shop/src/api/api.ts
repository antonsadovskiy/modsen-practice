import { GetProductsRequestType, ProductType } from './types';

export class Api {
  static async getProducts(data: GetProductsRequestType) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${data.limit}&sortBy=${data.sortBy}`,
      );
      return (await res.json()) as ProductType[];
    } catch (e) {
      console.error(e);
    }
  }
}
