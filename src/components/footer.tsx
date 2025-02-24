import enactusUNSWLogo from "../images/Enactus UNSW Logo (Grey).jpg";
import Instagram from "../images/Logos/Black & White/Instagram_Black&White.png";
import Facebook from "../images/Logos/Black & White/Facebook_Black&White.png";
import Linkedin from "../images/Logos/Black & White/Linkedin_Black&White.png";
import TikTok from "../images/Logos/Black & White/TikTok_Black&White.png";
import Youtube from "../images/Logos/Black & White/Youtube_Black&White.png";

const Footer = () => {
  return (
    <footer className="relative bg-white py-10 mt-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="absolute left-0 bottom-0 p-4">
          <img src={enactusUNSWLogo} alt="Enactus UNSW Logo" className="w-auto h-20" />
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 text-center text-sm text-[#2A2D32] p-8">
          <p>IT @ Enactus UNSW. All rights reserved.</p>
        </div>

        {/* Get icons/svg instead of figma export hihi */}
        <div className="absolute right-0 bottom-0 flex items-center space-x-6 p-4">
          <a href="https://www.facebook.com/share/g/1BDWn237rq/" target="_blank" rel="noopener noreferrer">
            <img className="h-14 block ml-auto mr-auto m-4" src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/enactus_unsw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img className="h-14 block ml-auto mr-auto m-4" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://au.linkedin.com/school/enactus-unsw/" target="_blank" rel="noopener noreferrer">
            <img className="h-14 block ml-auto mr-auto m-4" src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.tiktok.com/@enactusunsw" target="_blank" rel="noopener noreferrer">
            <img className="h-14 block ml-auto mr-auto m-4" src={TikTok} alt="TikTok" />
          </a>
          <a href="https://www.youtube.com/user/enactusunsw" target="_blank" rel="noopener noreferrer">
            <img className="h-14 block ml-auto mr-auto m-4" src={Youtube} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
