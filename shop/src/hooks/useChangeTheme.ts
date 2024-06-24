import { useCallback } from "react";

import { useAppDispatch } from "@/store/hooks";
import { appActions } from "@/store/slices/app";

export const useChangeTheme = () => {
  const dispatch = useAppDispatch();

  const changeTheme = useCallback(
    (theme: "dark" | "light") => {
      dispatch(appActions.setTheme({ theme }));
      localStorage.setItem("theme", theme);
    },
    [dispatch],
  );

  return { changeTheme };
};
