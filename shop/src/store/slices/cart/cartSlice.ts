import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProductType = {
  docId: string;
  amount: number;
  productId: number;
};

type InitialStateType = {
  cartProducts: CartProductType[];
};

const initialState: InitialStateType = {
  cartProducts: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      state.cartProducts.push({
        ...action.payload,
      });
    },
    deleteProductFromCart: (
      state,
      action: PayloadAction<{ productId: number }>,
    ) => {
      const index = state.cartProducts.findIndex(
        (product) => product.productId === action.payload.productId,
      );

      if (index !== -1) {
        state.cartProducts.splice(index, 1);
      }
    },
    updateProductInCart: (
      state,
      action: PayloadAction<{
        productId: number;
        amount: number;
      }>,
    ) => {
      const index = state.cartProducts.findIndex(
        (product) => product.productId === action.payload.productId,
      );
      if (index !== -1) {
        state.cartProducts[index].amount = action.payload.amount;
      }
    },
  },
});

export const cartReducer = slice.reducer;
export const cartActions = slice.actions;
