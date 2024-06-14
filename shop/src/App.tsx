import styled, { ThemeProvider } from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { useState } from "react";
import { theme } from "./assets/styles/theme";
import { Outlet } from "react-router-dom";

export function App() {
  const [currentTheme] = useState<"light" | "dark">("light");

  return (
    // @ts-ignore
    <ThemeProvider theme={theme[currentTheme]}>
      <Wrapper>
        <MaxWidthContainer>
          <div className={"content"}>
            <Header />
            <Outlet />
          </div>
          <Footer />
        </MaxWidthContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;

const MaxWidthContainer = styled.div`
  min-height: 100vh;
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //gap: 250px;

  .content {
    display: flex;
    flex-direction: column;
  }
`;
