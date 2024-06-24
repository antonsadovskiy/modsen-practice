import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@/assets/styles/theme";
import { CircleLoader } from "@/components/circle-loader";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useAppSelector } from "@/store/hooks";
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
      </S.Wrapper>
    </ThemeProvider>
  );
}
