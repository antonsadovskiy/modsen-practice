import { RootState } from "@/store";

export const selectorUserId = (state: RootState) => state.user.user.id;
export const selectorIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
