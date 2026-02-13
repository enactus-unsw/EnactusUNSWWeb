import useDocumentTitle from '@src/hooks/use-document-title';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import EnactusButton from '../components/atoms/button/enactusButton';
import HomeEventsCarousel from '../components/home-events-carousel';
import HomeProjectCards from '../components/home-project-cards';

// Images
const enactusUNSWLogo = '/images/Enactus UNSW Logo (Grey).jpg';
const enactusTeamPhoto = '/images/enactus team 2025.jpeg';
const triangle = '/images/Triangle shape.png';
const tiltedShape = '/images/tilted shape.png';

// Social Media Logos
const instagramLogo = '/images/Logos/Instagram.png';
const facebookLogo = '/images/Logos/Facebook.png';
const linkedInLogo = '/images/Logos/LinkedIn.png';
const tiktokLogo = '/images/Logos/Tiktok.png';

// Website Links
const enactusRubricWebsite = 'https://campus.hellorubric.com/?s=12656';
const instagramLink = 'https://www.instagram.com/enactusunsw/?hl=en';
const facebookLink = 'https://www.facebook.com/profile.php?id=61568234819798';
const linkedInLink =
  'https://www.linkedin.com/school/enactus-unsw/posts/?feedView=all';
const tiktokLink = 'https://www.tiktok.com/@enactusunsw';
// const youtubeLink = "https://www.youtube.com/@enactusunsw/featured";

const socialLinks = [
  {
    link: instagramLink,
    src: instagramLogo,
    alt: 'Instagram Logo',
    size: 'h-14',
  },
  {
    link: facebookLink,
    src: facebookLogo,
    alt: 'Facebook Logo',
    size: 'h-16',
  },
  {
    link: linkedInLink,
    src: linkedInLogo,
    alt: 'LinkedIn Logo',
    size: 'h-14',
  },
  {
    link: tiktokLink,
    src: tiktokLogo,
    alt: 'Tiktok Logo',
    size: 'h-14',
  },
  // {
  //   ref: youtubeLink,
  //   src: youtubeLogo,
  //   alt: "Youtube Logo",
  //   size: "h-14"
  // },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useDocumentTitle('Home | Enactus UNSW');

  return (
    <>
      <header className="text-center">
        <img
          className="m-4 ml-auto mr-auto block h-20"
          src={enactusUNSWLogo}
          alt="Enactus UNSW Logo"
        />
        <h1 className="mb-8 text-2xl font-bold leading-snug sm:mb-10 sm:text-4xl sm:leading-normal">
          The Student Hub of Social Impact <br /> and Entrepreneurship
        </h1>
        <img
          className="mx-auto mb-12 w-5/6 max-w-md rounded-xl saturate-[1.15] transition-transform duration-300 ease-in-out hover:scale-105 sm:mb-20 sm:max-w-3xl"
          src={enactusTeamPhoto}
          alt="Enactus Team Photo"
        />
      </header>
      {/* About Us */}
      <div>
        <section className="bg-[#FFEBB6] px-4 pb-12 pt-16 text-center sm:px-0 sm:pb-2">
          <h1 className="text-2xl font-bold sm:text-3xl">Our Mission</h1>
          <p className="mx-auto my-6 max-w-3xl whitespace-pre-line text-base leading-relaxed sm:my-10 sm:text-[18px] sm:leading-7">
            Our mission is to inspire and empower students to build communities
            for sustainable, scalable, and measurable social impact by using
            entrepreneurial action. As an incubator, we strive to foster project
            growth from the initial stages onward, until they can function
            independently.
          </p>
          <EnactusButton to="/about-us" className="text-white">
            LEARN MORE
          </EnactusButton>
        </section>
        <img src={triangle} alt="Triangle Shape" className="w-full" />
      </div>
      {/* Projects */}
      <section className="pb-20 pl-2 pr-2 pt-14 text-center">
        <h1 className="mb-12 text-2xl font-bold sm:text-3xl">Our Projects</h1>
        <Link to={'/projects'}>
          <HomeProjectCards />
        </Link>
      </section>
      {/* Events */}
      <section className="bg-[#FFEBB6] pb-10 pl-2 pr-2 pt-16 text-center">
        <h1 className="mb-12 text-2xl font-bold sm:text-3xl">Our Events</h1>
        <div className="mb-12 flex items-center justify-center">
          <HomeEventsCarousel />
        </div>
        <EnactusButton to="/events" className="text-white">
          MORE EVENTS
        </EnactusButton>
      </section>
      <img src={tiltedShape} alt="Tilted Shape" className="w-full" />
      {/* Join Us */}
      <section id="join-us" className="pb-20 pt-12 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">How to get involved?</h1>
        <h3 className="pb-4 pt-10 text-lg font-bold">Join Us on Rubric</h3>
        <EnactusButton
          to={enactusRubricWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FFC222] text-black hover:bg-[#FFDD83]"
        >
          JOIN US
        </EnactusButton>
        <h3 className="pb-4 pt-10 text-lg font-bold">Follow Our Socials</h3>
        <div className="mb-12 flex items-center justify-center gap-6">
          {socialLinks.map(({ link, src, alt, size }, index) => (
            <Link
              key={index}
              to={link as string}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={src}
                alt={alt}
                className={`${size} cursor-pointer rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110`}
              />
            </Link>
          ))}
        </div>
        <EnactusButton to="/contact-us" className="text-white">
          CONTACT US
        </EnactusButton>
      </section>
    </>
  );
}
