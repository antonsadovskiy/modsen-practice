import { describe, expect, test } from "@jest/globals";

import {
  appActions,
  appReducer,
  selectorAppTheme,
  selectorIsAppInitialized,
} from "@/store/slices/app";
import { selectorAppToasts } from "@/store/slices/app/appSlice";
import { AppSliceInitialStateType, ToastType } from "@/store/slices/app/types";

let state: AppSliceInitialStateType;

describe("app slice", () => {
  beforeEach(() => {
    state = {
      theme: "light",
      isAppInitialized: false,
      toasts: [{ id: "1", type: "warning", message: "test message" }],
    };
  });

  test("should change initialization status", () => {
    const updatedState = appReducer(state, appActions.setIsAppInitialized());

    expect(updatedState).toEqual({
      ...state,
      isAppInitialized: true,
    });
  });

  test("should add toast", () => {
    const newToast: ToastType = {
      id: "test id",
      type: "success",
      message: "test message",
    };
    const updatedState = appReducer(state, appActions.addToast(newToast));

    expect(updatedState).toEqual({
      ...state,
      toasts: [newToast, ...state.toasts],
    });
  });

  test("should delete toast", () => {
    const toastId = "2";

    const updatedState = appReducer(
      state,
      appActions.deleteToast({ id: toastId }),
    );

    const toasts = updatedState.toasts;

    const toastExists = toasts.some((toast) => toast.id === toastId);

    expect(toastExists).toBe(false);
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

  test("should select toast", () => {
    const selectedToasts = selectorAppToasts({ app: state });

    expect(selectedToasts).toEqual(expect.any(Array));
    expect(selectedToasts).toHaveLength(1);
  });
});
