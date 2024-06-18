import { RootState } from "@/store";

export const selectorAppTheme = (state: RootState) => state.app.theme;
export const selectorIsLoggedIn = (state: RootState) => state.app.isLoggedIn;
