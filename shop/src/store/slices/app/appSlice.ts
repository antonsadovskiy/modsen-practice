import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

const initialState = {
  theme: "light" as ThemeType,
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
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
