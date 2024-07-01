import { configureStore } from "@reduxjs/toolkit";

import { shopApi } from "@/api";
import { appReducer } from "@/store/slices/app";
import { cartReducer } from "@/store/slices/cart";
import { filtersReducer } from "@/store/slices/filters";
import { userReducer } from "@/store/slices/user";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    cart: cartReducer,
    filters: filtersReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
