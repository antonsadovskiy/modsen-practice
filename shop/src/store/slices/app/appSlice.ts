import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppSliceInitialStateType, ThemeType } from "./types";

const initialState: AppSliceInitialStateType = {
  theme: "light",
  isAppInitialized: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
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
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
export const { selectorIsAppInitialized, selectorAppTheme } = slice.selectors;
