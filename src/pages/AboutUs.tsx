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
      <header className="text-center pt-20 pb-14">
        <h1 className="font-bold text-5xl mb-8">Welcome to Enactus UNSW!</h1>
        <h4 className="text-2xl">Be the change you want to see <br /> in the world.</h4>
      </header>
      {/* Our story section */}
      <section className="text-center bg-[url(src/images/aboutUsPage/aboutUs_rectangle.png)] bg-contain bg-center bg-no-repeat">
        <h2 className="font-bold text-3xl pt-20 pb-6">Our Story</h2>
        <div className="my-8">
          <p className="pb-8 text-[18px]">
            Enactus (formerly known as Students in Free Enterprise, or SIFE) is an international <br />
            non-profit organization with a global network of over 70,500 university students in <br />
            36 countries. Students collaborate with leaders in business and academia by taking <br />
            entrepreneurial action to develop social enterprise projects which empower their <br />
            communities. We target the SDGs to create impactful change in humanitarians start <br />
            ups that aims at an issue and delivers a solution.
          </p>
          <p className="pb-6 text-[18px]">
            Enactus UNSW is now one of the largest student organizations at UNSW, with <br />
            members ranging over 6 faculties and 20 disciplines. Originally established in 2000, <br />
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
      <section className="text-center flex flex-col justify-center items-center mt-16">
        <img src={enactusSDGLogo} alt="Enactus SDG Logo" className="mb-14"/>
        <h2 className="font-bold text-3xl">
          The World Needs Us
        </h2>
        <img src={sdgImage} alt="SDGs Image" />
        <h3 className="font-semibold text-xl mb-6">
          What are Sustainable Development Goals (SDGs)?
        </h3>
        <EnactusButton to={sdgGoals} target="_blank" rel="noopener noreferrer" className="bg-[#FFC222] text-black hover:bg-[#FFDD83]">
          LEARN MORE
        </EnactusButton>
      </section>
    </div>
  )
}