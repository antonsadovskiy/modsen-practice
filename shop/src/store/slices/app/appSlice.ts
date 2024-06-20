import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeType } from "./types";

type InitialStateType = {
  theme: ThemeType;
  isAppInitialized: boolean;
};

const initialState: InitialStateType = {
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
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
