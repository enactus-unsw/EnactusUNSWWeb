import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HomeProjectCards from "../components/home-project-cards";
import EnactusButton from "../components/atoms/button/enactusButton";
import HomeEventsCarousel from "../components/home-events-carousel";

// Images
import enactusUNSWLogo from "../images/Enactus UNSW Logo (Grey).jpg";
import enactusTeamPhoto from "../images/enactus team 2025.jpeg";
import triangle from "../images/Triangle shape.png";
import tiltedShape from "../images/tilted shape.png";

// Social Media Logos
import instagramLogo from "../images/Logos/Instagram.png";
import facebookLogo from "../images/Logos/Facebook.png";
import linkedInLogo from "../images/Logos/LinkedIn.png";
import tiktokLogo from "../images/Logos/Tiktok.png";
// import youtubeLogo from "../images/Logos/Youtube.png";

// Website Links
const enactusRubricWebsite = "https://campus.hellorubric.com/?s=12656";
const instagramLink = "https://www.instagram.com/enactusunsw/?hl=en";
const facebookLink = "https://www.facebook.com/profile.php?id=61568234819798";
const linkedInLink = "https://www.linkedin.com/school/enactus-unsw/posts/?feedView=all";
const tiktokLink = "https://www.tiktok.com/@enactusunsw";
// const youtubeLink = "https://www.youtube.com/@enactusunsw/featured";

const socialLinks = [
  { 
    link: instagramLink, 
    src: instagramLogo, 
    alt: "Instagram Logo", 
    size: "h-14" 
  },
  { 
    link: facebookLink, 
    src: facebookLogo, 
    alt: "Facebook Logo", 
    size: "h-16" 
  },
  { 
    link: linkedInLink, 
    src: linkedInLogo, 
    alt: "LinkedIn Logo", 
    size: "h-14" 
  },
  { 
    link: tiktokLink, 
    src: tiktokLogo, 
    alt: "Tiktok Logo", 
    size: "h-14" 
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

  return (
    <>
      <header className="text-center">
        <img className="h-20 block ml-auto mr-auto m-4" src={enactusUNSWLogo} alt="Enactus UNSW Logo" />
        <h1 className="font-bold text-2xl sm:text-4xl mb-8 sm:mb-10 leading-snug sm:leading-normal">
          The Student Hub of Social Impact <br /> and Entrepreneurship
        </h1>
        <img 
          className="w-5/6 max-w-md sm:max-w-3xl rounded-xl mx-auto saturate-[1.15] mb-12 sm:mb-20 transition-transform duration-300 ease-in-out hover:scale-105" 
          src={enactusTeamPhoto} 
          alt="Enactus Team Photo" 
        />
      </header>
      {/* About Us */}
      <div>
        <section className="bg-[#FFEBB6] text-center pt-16 pb-12 sm:pb-2 px-4 sm:px-0">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Our Mission
          </h1>
        <p className="my-6 sm:my-10 text-base sm:text-[18px] leading-relaxed sm:leading-7 max-w-3xl mx-auto whitespace-pre-line">
            Our mission is to inspire and empower students to build 
            communities for sustainable, scalable, and measurable social 
            impact by using entrepreneurial action. As an incubator, we 
            strive to foster project growth from the initial stages onward, 
            until they can function independently.
          </p>
          <EnactusButton to="/about-us" className="text-white">
            LEARN MORE
          </EnactusButton>
        </section>
        <img src={triangle} alt="Triangle Shape" className="w-full"/>
      </div>
      {/* Projects */}
      <section className="text-center pt-14 pb-20 pl-2 pr-2">
        <h1 className="font-bold text-2xl sm:text-3xl mb-12">
          Our Projects
        </h1>
        <Link to={'/projects'}>
          <HomeProjectCards />
        </Link>
      </section>
      {/* Events */}
      <section className="bg-[#FFEBB6] pt-16 pb-10 text-center pl-2 pr-2">
        <h1 className="font-bold text-2xl sm:text-3xl mb-12">
          Our Events
        </h1>
        <div className="flex justify-center items-center mb-12">
          <HomeEventsCarousel />
        </div>
        <EnactusButton to="/events" className="text-white">
          MORE EVENTS
        </EnactusButton>
      </section>
      <img src={tiltedShape} alt="Tilted Shape" className="w-full"/>
      {/* Join Us */}
      <section id="join-us" className="text-center pt-12 pb-20">
        <h1 className="font-bold text-2xl sm:text-3xl">
          How to get involved?
        </h1>
        <h3 className="font-bold text-lg pt-10 pb-4">
          Join Us on Rubric
        </h3>
        <EnactusButton to={enactusRubricWebsite} target="_blank" rel="noopener noreferrer" className="bg-[#FFC222] text-black hover:bg-[#FFDD83]">
          JOIN US
        </EnactusButton>
        <h3 className="font-bold text-lg pt-10 pb-4">
          Follow Our Socials
        </h3>
        <div className="flex justify-center items-center gap-6 mb-12" >
          {socialLinks.map(({ link, src, alt, size }, index) => (
            <Link key={index} to={link as string} target="_blank" rel="noopener noreferrer">
              <img 
                src={src} 
                alt={alt} 
                className={`${size} transition ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer rounded-full`} 
              />
            </Link>
          ))}
        </div>
        <EnactusButton to="/contact-us" className="text-white">
          CONTACT US
        </EnactusButton>
      </section>
    </>
  )
}