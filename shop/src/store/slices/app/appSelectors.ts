import { RootState } from "@/store";

export const selectorAppTheme = (state: RootState) => state.app.theme;

export const selectorIsAppInitialized = (state: RootState) =>
  state.app.isAppInitialized;
