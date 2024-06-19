import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  cartProducts: {
    [key: string]: {
      docId: string;
      amount: number;
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
        docId: string;
        productId: string;
        amount: number;
      }>,
    ) => {
      state.cartProducts[action.payload.productId] = {
        docId: action.payload.docId,
        amount: action.payload.amount,
      };
    },
    updateProductInCart: (
      state,
      action: PayloadAction<{
        productId: string;
        amount: number;
      }>,
    ) => {
      state.cartProducts[action.payload.productId] = {
        ...state.cartProducts[action.payload.productId],
        amount: action.payload.amount,
      };
    },
  },
});

export const cartReducer = slice.reducer;
export const cartActions = slice.actions;
