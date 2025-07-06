import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import PageWrapper from "../components/page-wrapper";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

function AnimatedRoutes() {
  const location = useLocation();

  function handleExitComplete() {
  if(location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  } 
  window.scrollTo(0, 0);
}

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <Routes location={location} key={location.pathname + location.hash}>
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
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
