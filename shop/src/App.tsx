import styled, { ThemeProvider } from "styled-components";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { useState } from "react";
import { theme } from "./assets/styles/theme";
import { Outlet } from "react-router-dom";

export function App() {
  const [currentTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <div className={"content"}>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 64px - 90px);
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 250px;

  .content {
    display: flex;
    flex-direction: column;
  }
`;
