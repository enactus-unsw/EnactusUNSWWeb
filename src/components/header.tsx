import { Link } from 'react-router-dom';

import Dropdown from './organisms/card/Nav_Dropdown';

const enactusLogo = '/images/Enactus Logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-full flex-nowrap items-center justify-around px-6 sm:justify-between sm:overflow-x-auto md:px-10 lg:px-20">
        <div className="align-self: flex-start flex min-w-2 shrink-0">
          <Link to="/">
            <img
              className="m-3 h-10 h-16 w-auto"
              src={enactusLogo}
              alt="Enactus UNSW Logo"
            />
          </Link>
        </div>
        <div className="align-self: flex-end flex space-x-16 max-sm:hidden">
          <Link
            to="/about-us"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            ABOUT US
          </Link>
          <Link
            to="/our-team"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            OUR TEAM
          </Link>
          <Link
            to="/projects"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            PROJECTS
          </Link>
          <Link
            to="/events"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            EVENTS
          </Link>
          <Link
            to="/sponsors-partners"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            SPONSORS
          </Link>
          <Link
            to="/contact-us"
            className="font-Montserrat py-2 text-xl font-bold text-[#2A2D32] hover:underline"
          >
            CONTACT
          </Link>
          <Link
            to={{ pathname: '/', hash: '#join-us' }}
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#FFC222] px-5 py-3 text-center font-bold text-black hover:bg-[#FFDA55]"
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
