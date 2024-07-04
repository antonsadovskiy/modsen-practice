import { describe, expect, test } from "@jest/globals";

import {
  appActions,
  appReducer,
  selectorAppTheme,
  selectorIsAppInitialized,
} from "@/store/slices/app";
import { AppSliceInitialStateType } from "@/store/slices/app/types";

let state: AppSliceInitialStateType;

describe("app slice", () => {
  beforeEach(() => {
    state = {
      theme: "light",
      isAppInitialized: false,
    };
  });

  test("should change initialization status", () => {
    const updatedState = appReducer(state, appActions.setIsAppInitialized());

    expect(updatedState).toEqual({
      ...state,
      isAppInitialized: true,
    });
  });

  test("should change theme", () => {
    const updatedState = appReducer(
      state,
      appActions.setTheme({ theme: "dark" }),
    );

    expect(updatedState).toEqual({
      ...state,
      theme: "dark",
    });
  });

  test("should select initialization status", () => {
    const selectedIsAppInitialized = selectorIsAppInitialized({ app: state });

    expect(selectedIsAppInitialized).toBeFalsy();
  });

  test("should select theme", () => {
    const selectedTheme = selectorAppTheme({ app: state });

    expect(selectedTheme).toEqual(state.theme);
  });
});
