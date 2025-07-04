import { HashRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import OurTeam from "../pages/OurTeam";
import Projects from "../pages/Projects";
import Events from "../pages/Events";
import Sponsors from "../pages/Sponsors";
import ContactUs from "../pages/ContactUs";

import Header from "../components/header"; 
import Footer from "../components/footer"; 
import ScrollToTop from "../components/scroll-to-top";
import PageWrapper from "../components/page-wrapper";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/our-team" element={<PageWrapper><OurTeam /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/sponsors-partners" element={<PageWrapper><Sponsors /></PageWrapper>} />
        <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
