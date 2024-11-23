import { ReactNode, useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks";
import { appActions } from "@/store/slices/app";
import { ThemeType } from "@/store/slices/app/types";

type AppWrapperPropsType = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperPropsType) => {
  const dispatch = useAppDispatch();

  const initApp = useCallback(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      dispatch(appActions.setTheme({ theme: theme as ThemeType }));
    }
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return <>{children}</>;
};
