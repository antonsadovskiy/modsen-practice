import { describe, expect, test } from "@jest/globals";

import { UserSliceInitialStateType, UserType } from "@/store/slices/user/types";
import {
  selectorIsLoggedIn,
  selectorUserId,
  userActions,
  userReducer,
} from "@/store/slices/user/userSlice";

let state: UserSliceInitialStateType;

describe("user slice", () => {
  beforeEach(() => {
    state = {
      isLoggedIn: false,
      user: {
        id: undefined,
        email: undefined,
      },
    };
  });

  test("should set user", () => {
    const user: UserType = {
      email: "test email",
      id: "test id",
    };

    const updatedState = userReducer(state, userActions.setUser(user));

    expect(updatedState.user).toEqual(user);
  });

  test("should select user id", () => {
    const userId = selectorUserId({ user: state });

    expect(userId).toEqual(state.user.id);
  });

  test("should select is logged in", () => {
    const isLoggedIn = selectorIsLoggedIn({ user: state });

    expect(isLoggedIn).toBeFalsy();
    expect(isLoggedIn).toEqual(state.isLoggedIn);
  });
});
