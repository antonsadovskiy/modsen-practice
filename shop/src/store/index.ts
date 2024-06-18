import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { appReducer } from "@/store/slices/app";
import { cartReducer } from "@/store/slices/cart/cartSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
