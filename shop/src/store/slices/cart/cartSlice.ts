import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  cartProducts: {
    [key: number]: {
      amount: number;
      totalPrice: number;
    };
  };
};

const initialState: InitialStateType = {
  cartProducts: {},
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        productId: number;
        amount: number;
        totalPrice: number;
      }>,
    ) => {
      state.cartProducts[action.payload.productId] = {
        amount: action.payload.amount,
        totalPrice: action.payload.totalPrice,
      };
    },
  },
});

export const cartReducer = slice.reducer;
export const cartActions = slice.actions;
