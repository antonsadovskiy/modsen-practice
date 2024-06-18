import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

const initialState = {
  theme: "light" as ThemeType,
  isLoggedIn: false,
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
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
