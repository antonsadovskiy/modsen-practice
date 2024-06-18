import { RootState } from "@/store";

export const selectorCartProducts = (state: RootState) =>
  state.cart.cartProducts;
