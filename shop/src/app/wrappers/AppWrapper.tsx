import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { cartThunks } from "@/store/slices/cart";
import { selectorUserId, userActions } from "@/store/slices/user";

type AppWrapperPropsType = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperPropsType) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  useEffect(() => {
    const auth = getAuth();

    const removeListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.setUser({ email: user.email, id: user.uid }));
      }
      dispatch(appActions.setIsAppInitialized());

      removeListener();
    });
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(cartThunks.getCart({ userId }));
    }
  }, [dispatch, userId]);

  return <>{children}</>;
};
