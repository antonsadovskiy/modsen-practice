import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";

import { useGetUserCart } from "@/hooks/useGetUserCart";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions, selectorUserId } from "@/store/slices/app";

type AppWrapperPropsType = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperPropsType) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  const { getUserCart } = useGetUserCart();

  useEffect(() => {
    const auth = getAuth();

    const removeListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(appActions.setIsLoggedIn());
        dispatch(appActions.setUser({ email: user.email, id: user.uid }));
      }
      dispatch(appActions.setIsAppInitialized());

      removeListener();
    });
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      getUserCart();
    }
  }, [getUserCart, userId]);

  return <>{children}</>;
};
