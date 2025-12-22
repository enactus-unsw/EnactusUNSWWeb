import enactusLogo from "../images/Enactus Logo.png";
import { Link } from "react-router-dom";
import Dropdown from "./organisms/card/Nav_Dropdown";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-full mx-auto flex flex-nowrap sm:overflow-x-auto  items-center sm:justify-between  justify-around px-6 md:px-10 lg:px-20 ">
        <div className="flex align-self: flex-start shrink-0 min-w-2">
          <Link to="/">
            <img
              className="h-10 h-16 w-auto m-3"
              src={enactusLogo}
              alt="Enactus UNSW Logo"
            />
          </Link>
        </div>
        <div className="flex align-self: flex-end space-x-16  max-sm:hidden">
          <Link
            to="/about-us"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            ABOUT US
          </Link>
          <Link
            to="/our-team"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            OUR TEAM
          </Link>
          <Link
            to="/projects"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            PROJECTS
          </Link>
          <Link
            to="/events"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            EVENTS
          </Link>
          <Link
            to="/sponsors-partners"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            SPONSORS
          </Link>
          <Link
            to="/contact-us"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 "
          >
            CONTACT
          </Link>
          <Link
            to={{ pathname: "/", hash: "#join-us" }}
            rel="noopener noreferrer"
            className="inline-block bg-[#FFC222] text-black font-bold text-center py-3 px-5 rounded-xl hover:bg-[#FFDA55]"
          >
            JOIN US
          </Link>
        </div>
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;
