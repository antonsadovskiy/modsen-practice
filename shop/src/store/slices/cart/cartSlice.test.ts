import { describe, expect, test } from "@jest/globals";

import { selectorCartProducts } from "@/store/slices/cart/cartSlice";
import { CartSliceInitialStateType } from "@/store/slices/cart/types";

let state: CartSliceInitialStateType;

describe("cart slice", () => {
  beforeEach(() => {
    state = {
      cartProducts: [
        { productId: 1, amount: 3, docId: "1" },
        { productId: 2, amount: 5, docId: "2" },
      ],
    };
  });

  test("should select cart products", () => {
    const selectedCartProducts = selectorCartProducts({ cart: state });

    expect(selectedCartProducts).toEqual(expect.any(Array));
  });
});
