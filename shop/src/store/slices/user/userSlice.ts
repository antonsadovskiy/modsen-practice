import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { createAppAsyncThunk } from "@/utils/createAppAsyncThunk";

import {
  AuthUserRequestType,
  LoginUserResponseType,
  UserSliceInitialStateType,
  UserType,
} from "./types";

const initialState: UserSliceInitialStateType = {
  isLoggedIn: false,
  user: {
    id: undefined,
    email: undefined,
  },
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
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = {
          id: undefined,
          email: undefined,
        };
      });
  },
  selectors: {
    selectorUserId: (sliceState) => sliceState.user.id,
    selectorIsLoggedIn: (sliceState) => sliceState.isLoggedIn,
  },
});

const registerUser = createAppAsyncThunk<void, AuthUserRequestType>(
  "user/register",
  async (arg, thunkAPI) => {
    const { password, email } = arg;
    const { rejectWithValue } = thunkAPI;

    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

const loginUser = createAppAsyncThunk<
  LoginUserResponseType,
  AuthUserRequestType
>("user/login", async (arg, thunkAPI) => {
  const { password, email } = arg;
  const { rejectWithValue } = thunkAPI;

  const auth = getAuth();

  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);

    return { id: userData.user.uid, email: userData.user.email };
  } catch (e) {
    return rejectWithValue(null);
  }
});

const logoutUser = createAppAsyncThunk<void, void>(
  "user/logout",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const auth = getAuth();

    try {
      await signOut(auth);
    } catch (e) {
      return rejectWithValue(null);
    }
  },
);

export const userReducer = slice.reducer;
export const userActions = slice.actions;
export const userThunks = { registerUser, loginUser, logoutUser };
export const { selectorUserId, selectorIsLoggedIn } = slice.selectors;
