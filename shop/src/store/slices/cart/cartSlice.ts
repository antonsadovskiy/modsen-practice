import { createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { createAppAsyncThunk } from "@/utils/createAppAsyncThunk";

import {
  AddCartProductRequestType,
  AddCartProductResponseType,
  CartProductType,
  DeleteCartProductRequestType,
  DeleteCartProductResponseType,
  GetCartRequestType,
  GetCartResponseType,
  UpdateCartProductRequestType,
  UpdateCartProductResponseType,
} from "./types";

type InitialStateType = {
  cartProducts: CartProductType[];
};

const initialState: InitialStateType = {
  cartProducts: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.cartProducts = action.payload.cartProducts;
      })
      .addCase(addCartProduct.fulfilled, (state, action) => {
        state.cartProducts.push({
          ...action.payload,
        });
      })
      .addCase(deleteCartProduct.fulfilled, (state, action) => {
        const index = state.cartProducts.findIndex(
          (product) => product.productId === action.payload.productId,
        );

        if (index !== -1) {
          state.cartProducts.splice(index, 1);
        }
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        const index = state.cartProducts.findIndex(
          (product) => product.productId === action.payload.productId,
        );
        if (index !== -1) {
          state.cartProducts[index].amount = action.payload.amount;
        }
      });
  },
});

const getCart = createAppAsyncThunk<GetCartResponseType, GetCartRequestType>(
  "cart/get",
  async (arg, thunkAPI) => {
    const db = getFirestore();
    const { rejectWithValue } = thunkAPI;

    try {
      const q = query(
        collection(db, "cart"),
        where("userId", "==", arg.userId),
      );

      const querySnapshot = await getDocs(q);

      const cartProducts = querySnapshot.docs.map((doc) => {
        const { amount, productId } = doc.data();

        return { docId: doc.id, amount, productId };
      });

      return { cartProducts };
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

const addCartProduct = createAppAsyncThunk<
  AddCartProductResponseType,
  AddCartProductRequestType
>("cart/addProduct", async (arg, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  const userId = getState().user.user.id;

  const { amount, productId } = arg;

  const db = getFirestore();

  try {
    const newDoc = await addDoc(collection(db, "cart"), {
      productId,
      amount,
      userId,
    });

    return { productId, amount, docId: newDoc.id };
  } catch (e) {
    return rejectWithValue(null);
  }
});

const deleteCartProduct = createAppAsyncThunk<
  DeleteCartProductResponseType,
  DeleteCartProductRequestType
>("cart/deleteProduct", async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const { productId, docId } = arg;

  const db = getFirestore();

  try {
    await deleteDoc(doc(db, "cart", docId));

    return { productId };
  } catch (e) {
    rejectWithValue(null);
  }
});

const updateCartProduct = createAppAsyncThunk<
  UpdateCartProductResponseType,
  UpdateCartProductRequestType
>("cart/updateProduct", async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const { productId, docId, amount } = arg;

  const db = getFirestore();

  const ref = doc(db, "cart", docId);

  try {
    await updateDoc(ref, {
      amount,
    });

    return { productId, amount };
  } catch (e) {
    rejectWithValue(null);
  }
});

export const cartReducer = slice.reducer;
export const cartThunks = {
  getCart,
  addCartProduct,
  deleteCartProduct,
  updateCartProduct,
};
