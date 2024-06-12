import { ProductType } from './types';

export class Api {
  static async getProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      return (await res.json()) as ProductType[];
    } catch (e) {
      console.error(e);
    }
  }
}
