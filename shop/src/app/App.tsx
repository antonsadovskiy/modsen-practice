import { ThemeProvider } from "styled-components";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { theme } from "@/assets/styles/theme";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  appActions,
  selectorAppTheme,
  selectorIsAppInitialized,
  selectorIsLoggedIn,
} from "@/store/slices/app";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { CircleLoader } from "@/components/circle-loader";
import S from "./styled";

export function App() {
  const appTheme = useAppSelector(selectorAppTheme);
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);
  const isAppInitialized = useAppSelector(selectorIsAppInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(appActions.setIsLoggedIn());
          dispatch(appActions.setUser({ email: user.email, id: user.uid }));
        }
        dispatch(appActions.setIsAppInitialized());
      });
    };

    fetchData();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <S.Wrapper>
        {isLoggedIn && isAppInitialized && <Header />}
        <S.MaxWidthContainer>
          <S.Content>
            {isAppInitialized && <Outlet />}
            {!isAppInitialized && (
              <S.LoaderContainer>
                <CircleLoader size={30} />
              </S.LoaderContainer>
            )}
            <ScrollRestoration />
          </S.Content>
          {isLoggedIn && isAppInitialized && <Footer />}
        </S.MaxWidthContainer>
      </S.Wrapper>
    </ThemeProvider>
  );
}
