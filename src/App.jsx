import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Home from "./pages/Home";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <SEO />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
