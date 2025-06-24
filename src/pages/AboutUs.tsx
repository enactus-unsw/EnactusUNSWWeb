import EnactusButton from "../components/atoms/button/enactusButton";

// links
const sdgGoals = "https://www.globalgoals.org/goals/";
const enactusAusWebsite = "https://www.enactusaustralia.org.au/";

// images
import enactusSDGLogo from "../images/aboutUsPage/enactusSDGLogo.png";
import sdgImage from "../images/aboutUsPage/SDGImage.png";

export default function AboutUs() {
  return (
    <div>
      <header className="text-center pt-20 md:pb-14">
        <h1 className="font-bold text-5xl mb-8">Welcome to Enactus UNSW!</h1>
        <h4 className="text-2xl">Be the change you want to see <br /> in the world.</h4>
      </header>
      {/* Our story section */}
      <section className="flex flex-col items-center justify-center text-center bg-[url(images/aboutUsPage/aboutUs_rectangle.png)] bg-contain bg-center bg-no-repeat m-5">
        <h2 className="font-bold text-3xl pt-20 pb-6">Our Story</h2>
        <div className="sm:w-4/5 md:my-8 md:w-3/5">
          <p className="pb-8 sm:text-sm md:text-xl">
            Enactus (formerly known as Students in Free Enterprise, or SIFE) is an international
            non-profit organization with a global network of over 70,500 university students in 
            36 countries. Students collaborate with leaders in business and academia by taking 
            entrepreneurial action to develop social enterprise projects which empower their 
            communities. We target the SDGs to create impactful change in humanitarians startups 
            that aims at an issue and delivers a solution.
          </p>
          <p className="pb-5 sm:text-sm md:text-xl">
            Enactus UNSW is now one of the largest student organizations at UNSW, with 
            members ranging over 6 faculties and 20 disciplines. Originally established in 2000, 
            the organisation quickly grew to over 100 active members within the first few years.
          </p>
        </div>
        <div className="pb-20">
          <EnactusButton to={enactusAusWebsite} target="_blank" rel="noopener noreferrer" className="text-white">
            MORE INFO HERE!
          </EnactusButton>
        </div>
      </section>
      {/* the world needs us section */}
      <section className="text-center flex flex-col justify-center items-center md:mt-16">
        <img src={enactusSDGLogo} alt="Enactus SDG Logo" className="mb-14"/>
        <h2 className="font-bold text-3xl">
          The World Needs Us
        </h2>
        <img src={sdgImage} alt="SDGs Image" />
        <h3 className="font-semibold text-xl mb-6">
          What are Sustainable Development Goals (SDGs)?
        </h3>
        <div className="mb-8">
          <EnactusButton to={sdgGoals} target="_blank" rel="noopener noreferrer" className="bg-[#FFC222] text-black hover:bg-[#FFDD83]">
            LEARN MORE
          </EnactusButton>
        </div>
      </section>
    </div>
  )
}