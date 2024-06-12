import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { theme } from './assets/styles/theme';
import { HomePage } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { NotFoundPage } from './pages/not-found';

export function App() {
  const [currentTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <div className={'content'}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<div>shop</div>} />
            <Route path="/product/:id" element={<div>product</div>} />
            <Route path="/contact" element={<div>contact us</div>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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

  .content {
    display: flex;
    flex-direction: column;
  }
`;
