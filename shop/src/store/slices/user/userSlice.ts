import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Auth } from "@/entities/api/auth";
import { createAppAsyncThunk } from "@/utils/createAppAsyncThunk";
import { defineIsAdmin } from "@/utils/defineIsAdmin";

import {
  AuthUserRequestType,
  UserSliceInitialStateType,
  UserType,
} from "./types";

const initialState: UserSliceInitialStateType = {
  isLoggedIn: false,
  user: {
    id: undefined,
    email: undefined,
  },
  isAdmin: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user.id = action.payload.id;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.email = action.payload.login;
        state.isAdmin = action.payload.isAdmin;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.email = action.payload.login;
        state.isAdmin = action.payload.isAdmin;
      });
  },
  selectors: {
    selectorUserId: (sliceState) => sliceState.user.id,
    selectorIsLoggedIn: (sliceState) => sliceState.isLoggedIn,
  },
});

const registerUser = createAppAsyncThunk<
  { login: string; isAdmin: boolean },
  AuthUserRequestType
>("user/register", async (arg, thunkAPI) => {
  const { password, email } = arg;
  const { rejectWithValue } = thunkAPI;

  try {
    const registerData = await Auth.register({ login: email, password });

    const isAdmin = defineIsAdmin(registerData.data.accessToken);

    const data = await Auth.me();

    return { login: data.data.login, isAdmin };
  } catch (e) {
    return rejectWithValue(null);
  }
});

const loginUser = createAppAsyncThunk<
  { login: string; isAdmin: boolean },
  AuthUserRequestType
>("user/login", async (arg, thunkAPI) => {
  const { password, email } = arg;
  const { rejectWithValue } = thunkAPI;

  try {
    const loginData = await Auth.login({ login: email, password });

    const isAdmin = defineIsAdmin(loginData.data.accessToken);

    const data = await Auth.me();

    return { login: data.data.login, isAdmin };
  } catch (e) {
    return rejectWithValue(null);
  }
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
export const userThunks = { registerUser, loginUser };
export const { selectorUserId, selectorIsLoggedIn } = slice.selectors;
