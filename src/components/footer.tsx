const enactusUNSWLogo = '/images/Enactus UNSW Logo (Grey).jpg';
const Instagram = '/images/Logos/Black & White/Instagram_Black&White.png';
const Facebook = '/images/Logos/Black & White/Facebook_Black&White.png';
const Linkedin = '/images/Logos/Black & White/Linkedin_Black&White.png';
const TikTok = '/images/Logos/Black & White/TikTok_Black&White.png';
const Youtube = '/images/Logos/Black & White/Youtube_Black&White.png';

const Footer = () => {
  return (
    <footer
      className="bg-whit mt-10 border py-3 shadow-md"
      style={{
        boxShadow:
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="mx-auto flex items-center justify-between px-4 max-sm:flex-wrap max-sm:justify-center">
        {/* Logo - aligned left */}
        <div className="ml-4 flex-shrink-0 max-sm:py-8">
          <img src={enactusUNSWLogo} alt="Enactus UNSW Logo" className="h-20" />
        </div>

        {/* Social icons - aligned right */}
        <div className="flex flex-shrink-0 space-x-6 max-sm:pb-8">
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
