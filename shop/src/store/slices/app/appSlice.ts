import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeType, ToastType } from "./types";

type InitialStateType = {
  theme: ThemeType;
  isAppInitialized: boolean;
  toasts: ToastType[];
};

const initialState: InitialStateType = {
  theme: "light",
  isAppInitialized: false,
  toasts: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<ToastType>) => {
      state.toasts.unshift(action.payload);
    },
    deleteToast: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.toasts.findIndex(
        (toast) => toast.id === action.payload.id,
      );

      if (index !== -1) {
        state.toasts.splice(index, 1);
      }
    },
    setTheme: (
      state,
      action: PayloadAction<{
        theme: ThemeType;
      }>,
    ) => {
      state.theme = action.payload.theme;
    },
    setIsAppInitialized: (state) => {
      state.isAppInitialized = true;
    },
  },
  selectors: {
    selectorIsAppInitialized: (sliceState) => sliceState.isAppInitialized,
    selectorAppTheme: (sliceState) => sliceState.theme,
    selectorAppToasts: (sliceState) => sliceState.toasts,
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
export const { selectorIsAppInitialized, selectorAppTheme, selectorAppToasts } =
  slice.selectors;
