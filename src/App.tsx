import styled, { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const GlobalStyle = createGlobalStyle`
  :root {
    --navbar-height: 0px;   /* Your navbar height */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #f8f9fa;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  /* Optional: smooth scroll for anchor links */
  html {
    scroll-padding-top: var(--navbar-height);
  }
`;

const Main = styled.main`
  width: 100%;
`;

function App() {
  return (
    <ErrorBoundary>
      <>
        <Navbar />
        <GlobalStyle />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Main>
        <Footer />
      </>
    </ErrorBoundary>
  );
}

export default App
