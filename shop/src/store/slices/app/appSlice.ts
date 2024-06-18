import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

type UserType = {
  email?: string;
  id?: string;
};

type InitialStateType = {
  theme: ThemeType;
  isAppInitialized: boolean;
  isLoggedIn: boolean;
  user: UserType;
};

const initialState: InitialStateType = {
  theme: "light",
  isLoggedIn: false,
  isAppInitialized: false,
  user: {
    id: undefined,
    email: undefined,
  },
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
    setIsAppInitialized: (state) => {
      state.isAppInitialized = true;
    },
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        email: string;
      }>,
    ) => {
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
