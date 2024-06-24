import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { ThemeType } from "@/store/slices/app/types";
import { cartThunks } from "@/store/slices/cart";
import { selectorUserId, userActions } from "@/store/slices/user";

type AppWrapperPropsType = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperPropsType) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  const initApp = useCallback(() => {
    const auth = getAuth();

    const theme = localStorage.getItem("theme");

    if (theme) {
      dispatch(appActions.setTheme({ theme: theme as ThemeType }));
    }

    const removeListener = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          dispatch(userActions.setUser({ email: user.email, id: user.uid }));

          await dispatch(cartThunks.getCart({ userId: user.uid }));
        }

        dispatch(appActions.setIsAppInitialized());

        removeListener();
      } catch (e) {
        console.error(e);
      }
    });
  }, [dispatch]);

  const fetchCart = useCallback(async () => {
    try {
      if (userId) {
        await dispatch(cartThunks.getCart({ userId }));
      }
    } catch (e) {
      console.error(e);
    }
  }, [userId, dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  useEffect(() => {
    fetchCart();
  }, [userId, fetchCart]);

  return <>{children}</>;
};
