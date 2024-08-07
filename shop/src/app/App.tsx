import { Outlet, ScrollRestoration } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { CircleLoader } from "@/components/circle-loader";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toast } from "@/components/toast";
import { darkTheme, lightTheme } from "@/constants/theme";
import { useAppSelector } from "@/hooks";
import { selectorAppTheme, selectorIsAppInitialized } from "@/store/slices/app";
import { selectorIsLoggedIn } from "@/store/slices/user";

import S from "./styled";

export function App() {
  const appTheme = useAppSelector(selectorAppTheme);
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);
  const isAppInitialized = useAppSelector(selectorIsAppInitialized);

  return (
    <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
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
        <Toast />
      </S.Wrapper>
    </ThemeProvider>
  );
}
