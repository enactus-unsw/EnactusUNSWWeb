import EnactusButton from "./atoms/button/enactusButton";
import enactusLogo from "../images/Enactus Logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-10">
      <nav className="mx-auto flex  items-center justify-between ">
        <div className="flex align-self: flex-start">
        <a href="/">
        <img className="h-16 block ml-auto mr-auto m-4" src={enactusLogo} alt="Enactus UNSW Logo" />
        </a>
        </div>
        <div className="flex align-self: flex-end space-x-16">
          <a href="/about-us" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">ABOUT US</a>
          <a href="/our-team" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">OUR TEAM</a>
          <a href="/projects" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">PROJECTS</a>
          <a href="/events" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">EVENTS</a>
          <a href="/sponsors-partners" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">SPONSORS</a>
          <a href="/contact-us" className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 ">CONTACT</a>
          <EnactusButton to="/#join-us"  rel="noopener noreferrer" className="bg-[#FFC222] text-black hover:scale-100 py-2 ">
            JOIN US
          </EnactusButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;


