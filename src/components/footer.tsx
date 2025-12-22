import enactusUNSWLogo from "../images/Enactus UNSW Logo (Grey).jpg";
import Instagram from "../images/Logos/Black & White/Instagram_Black&White.png";
import Facebook from "../images/Logos/Black & White/Facebook_Black&White.png";
import Linkedin from "../images/Logos/Black & White/Linkedin_Black&White.png";
import TikTok from "../images/Logos/Black & White/TikTok_Black&White.png";
import Youtube from "../images/Logos/Black & White/Youtube_Black&White.png";

const Footer = () => {
  return (
    <footer
      className="bg-whit border  py-3 mt-10 shadow-md"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="mx-auto px-4 flex  items-center justify-between max-sm:flex-wrap max-sm:justify-center">
        {/* Logo - aligned left */}
        <div className="flex-shrink-0  ml-4 max-sm:py-8">
          <img src={enactusUNSWLogo} alt="Enactus UNSW Logo" className="h-20" />
        </div>

        {/* Social icons - aligned right */}
        <div className="flex space-x-6 flex-shrink-0 max-sm:pb-8">
          <a
            href="https://www.facebook.com/share/g/1BDWn237rq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/enactusunsw/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://au.linkedin.com/school/enactus-unsw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src={Linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://www.tiktok.com/@enactusunsw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src={TikTok} alt="TikTok" />
          </a>
          <a
            href="https://www.youtube.com/user/enactusunsw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-14" src={Youtube} alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-[#2A2D32]">
        <p>IT @ Enactus UNSW. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
