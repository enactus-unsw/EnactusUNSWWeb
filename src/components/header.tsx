import EnactusButton from "./atoms/button/enactusButton";
import enactusLogo from "../images/Enactus Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 md:px-10 lg:px-20">
      <nav className="max-w-screen-2xl mx-auto flex  items-center justify-between ">
        <div className="flex align-self: flex-start">
        <Link to="/">
        <img className="h-16 block ml-auto mr-auto m-4" src={enactusLogo} alt="Enactus UNSW Logo" />
        </Link>
        </div>
        <div className="flex align-self: flex-end space-x-16">
          <Link to="/about-us" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">ABOUT US</Link>
          <Link to="/our-team" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">OUR TEAM</Link>
          <Link to="/projects" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">PROJECTS</Link>
          <Link to="/events" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">EVENTS</Link>
          <Link to="/sponsors-partners" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">SPONSORS</Link>
          <Link to="/contact-us" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">CONTACT</Link>
          <EnactusButton to="/#join-us"  rel="noopener noreferrer" className="bg-[#FFC222] text-black hover:scale-100 py-2 ">
            JOIN US
          </EnactusButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;


