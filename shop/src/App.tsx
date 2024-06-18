import styled, { ThemeProvider } from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { theme } from "./assets/styles/theme";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import { selectorAppTheme } from "@/store/slices/app";

export function App() {
  const appTheme = useAppSelector(selectorAppTheme);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <Wrapper>
        <MaxWidthContainer>
          <div className={"content"}>
            <Header />
            <Outlet />
            <ScrollRestoration />
          </div>
          <Footer />
        </MaxWidthContainer>
      </Wrapper>
    </ThemeProvider>
  );
}
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const MaxWidthContainer = styled.div`
  min-height: 100vh;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    display: flex;
    flex-direction: column;
  }
`;
