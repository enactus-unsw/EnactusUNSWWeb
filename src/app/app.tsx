import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import OurTeam from "../pages/OurTeam";
import Projects from "../pages/Projects";
import Events from "../pages/Events";
import Sponsors from "../pages/Sponsors";
import ContactUs from "../pages/ContactUs";

function App() {
  return (
    // Routes for the different pages
    <BrowserRouter>
      <>
        {/* TODO: add header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors-partners" element={<Sponsors />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        {/* TODO: add footer */}
      </>
    </BrowserRouter>
  );
}

export default App;
