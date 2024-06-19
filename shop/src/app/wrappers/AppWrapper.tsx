import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { appActions, selectorUserId } from "@/store/slices/app";
import { useGetUserCart } from "@/hooks/useGetUserCart";

type AppWrapperPropsType = {
  children: ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperPropsType) => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  const { getUserCart } = useGetUserCart();

  useEffect(() => {
    const authUser = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(appActions.setIsLoggedIn());
          dispatch(appActions.setUser({ email: user.email, id: user.uid }));
        }
        dispatch(appActions.setIsAppInitialized());
      });
    };

    authUser();
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      getUserCart();
    }
  }, [getUserCart, userId]);

  return <>{children}</>;
};
