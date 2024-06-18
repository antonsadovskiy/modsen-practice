import styled, { ThemeProvider } from "styled-components";
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
      <Wrapper>
        {isLoggedIn && <Header />}
        <MaxWidthContainer>
          <Content>
            {isAppInitialized && <Outlet />}
            {!isAppInitialized && "Loading..."}
            <ScrollRestoration />
          </Content>
          {isLoggedIn && <Footer />}
        </MaxWidthContainer>
      </Wrapper>
    </ThemeProvider>
  );
}
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const MaxWidthContainer = styled.div`
  min-height: calc(100vh - 114px);
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
