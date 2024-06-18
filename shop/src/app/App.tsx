import styled, { ThemeProvider } from "styled-components";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { theme } from "@/assets/styles/theme";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { selectorAppTheme, selectorIsLoggedIn } from "@/store/slices/app";

export function App() {
  const appTheme = useAppSelector(selectorAppTheme);
  const IsLoggedIn = useAppSelector(selectorIsLoggedIn);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <Wrapper>
        {IsLoggedIn && <Header />}
        <MaxWidthContainer>
          <Content>
            <Outlet />
            <ScrollRestoration />
          </Content>
          {IsLoggedIn && <Footer />}
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
