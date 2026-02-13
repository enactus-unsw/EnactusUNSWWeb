import useDocumentTitle from '@src/hooks/use-document-title';

import EnactusButton from '../components/atoms/button/enactusButton';

// links
const sdgGoals = 'https://www.globalgoals.org/goals/';
const enactusAusWebsite = 'https://www.enactusaustralia.org.au/';

// images
const enactusSDGLogo = '/images/aboutUsPage/enactusSDGLogo.png';
const sdgImage = '/images/aboutUsPage/SDGImage.png';
const aboutUsRectangle = '/images/aboutUsPage/aboutUs_rectangle.png';

export default function AboutUs() {
  useDocumentTitle('About Us | Enactus UNSW');

  return (
    <div>
      <header className="pt-20 text-center md:pb-14">
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          Welcome to Enactus UNSW!
        </h1>
        <h4 className="text-xl sm:text-2xl">
          Be the change you want to see <br /> in the world.
        </h4>
      </header>
      {/* Our story section */}
      <section>
        <div className="my-10 flex w-full items-center justify-center">
          <div
            className="relative w-11/12 max-w-5xl overflow-hidden"
            style={{
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '170px',
              borderBottomLeftRadius: '170px',
              borderBottomRightRadius: '30px',
            }}
          >
            {/* Background image */}
            <img
              src={aboutUsRectangle}
              alt="About Us Background"
              className="absolute left-0 top-0 z-0 h-full w-full object-cover"
              style={{ objectPosition: 'center' }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-[13vw] text-center md:py-[3vw]">
              <h2 className="pb-6 pt-10 text-3xl font-bold">Our Story</h2>
              <div className="w-4/5 md:my-4 md:w-3/5">
                <p className="pb-8 text-sm md:text-lg">
                  Enactus (formerly known as Students in Free Enterprise, or
                  SIFE) is an international non-profit organization with a
                  global network of over 70,500 university students in 36
                  countries. Students collaborate with leaders in business and
                  academia by taking entrepreneurial action to develop social
                  enterprise projects which empower their communities. We target
                  the SDGs to create impactful change in humanitarians startups
                  that aims at an issue and delivers a solution.
                </p>
                <p className="pb-5 text-sm md:text-xl">
                  Enactus UNSW is now one of the largest student organizations
                  at UNSW, with members ranging over 6 faculties and 20
                  disciplines. Originally established in 2000, the organisation
                  quickly grew to over 100 active members within the first few
                  years.
                </p>
              </div>
              <div className="pb-10">
                <EnactusButton
                  to={enactusAusWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  MORE INFO HERE!
                </EnactusButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* the world needs us section */}
      <section className="flex flex-col items-center justify-center text-center md:mt-16">
        <img
          src={enactusSDGLogo}
          alt="Enactus SDG Logo"
          className="mb-14 w-1/3 max-w-xs sm:w-1/2"
        />
        <h2 className="text-3xl font-bold">The World Needs Us</h2>
        <img src={sdgImage} alt="SDGs Image" />
        <h3 className="mb-6 text-lg font-semibold sm:text-xl">
          What are Sustainable Development Goals (SDGs)?
        </h3>
        <div className="mb-8">
          <EnactusButton
            to={sdgGoals}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFC222] text-black hover:bg-[#FFDD83]"
          >
            LEARN MORE
          </EnactusButton>
        </div>
      </section>
    </div>
  );
}
