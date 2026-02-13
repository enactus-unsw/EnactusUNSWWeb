import useDocumentTitle from '@src/hooks/use-document-title';

import EnactusButton from '../components/atoms/button/enactusButton';

const tech4impactlogo = '/images/tech4impact_logo.png';
const plate2platelogo = '/images/plate2plate_logo.png';
const procketslogo = '/images/prockets_logo.png';
const instagramlogo = '/images/Logos/Instagram.png';
const titleBackground = '/images/ProjectsPage/titleBackground.png';

// TODO: change website once deployed using actual domain
const procketsWebsite = 'https://enactus-unsw.github.io/enactus-prockets/';

export default function Projects() {
  useDocumentTitle('Projects | Enactus UNSW');

  return (
    <div className="w-full flex-grow text-[#2A2D32]">
      {/* title container */}
      <div
        className="mx-auto flex h-[10rem] w-full items-center justify-center text-4xl font-[800] tracking-wide md:h-[26rem] md:text-8xl"
        style={{
          backgroundImage: `url(${titleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Our Projects
      </div>

      {/* Prockets conatiner */}
      <div className="mx-auto flex flex-col justify-evenly p-5 md:min-h-[25vh] md:flex-row md:px-20">
        {/* Prockets Image */}
        <div className="mb-2 flex w-full items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 md:mb-20 md:mt-8 md:w-1/2">
          <img
            className="h-[10rem] object-contain md:h-[30rem]"
            src={procketslogo}
            alt="Prockets Logo"
          />
        </div>
        {/* Prockets description */}
        <div className="flex w-full flex-col p-2 md:ml-[4.5rem] md:w-1/2 md:pr-20">
          <div className="text-xl font-[700] md:mt-20 md:text-4xl">
            Prockets
          </div>
          <p className="mt-5 items-center justify-center text-sm font-[400] md:mt-12 md:text-xl md:leading-10">
            Creating prosthetics more accessible to amputees - financially by
            developing a cost-effective component of the prosthetic and socially
            through a support network platform.
          </p>
          {/* Prockets website & instagram*/}
          <div className="mt-10 flex flex-row items-center justify-center md:justify-start">
            <a
              href="https://www.instagram.com/prockets.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-15 block rounded-full"
                src={instagramlogo}
                alt="Instagram"
              />
            </a>
            <EnactusButton
              to={procketsWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-[#FFC222] text-black hover:bg-[#FFDD83]"
            >
              Visit the Website
            </EnactusButton>
          </div>
        </div>
      </div>

      {/* plate2plate conatiner */}
      <div className="flex flex-col-reverse justify-center rounded-t-[5vw] bg-[#F6F6F6] p-5 md:min-h-[25vh] md:flex-row md:pl-20 md:pr-20">
        {/* plate2plate description */}
        <div className="flex w-full flex-col p-2 md:ml-[12rem] md:w-1/2">
          <div className="text-xl font-[700] tracking-tight md:mt-20 md:text-4xl">
            plate2plate
          </div>
          <p className="mt-5 items-center justify-center text-sm font-[400] md:mt-12 md:text-xl md:leading-10">
            A not for profit initiative dedicated to bridging the gap between
            households experiencing food insecurity and those who have the
            capacity to provide resources through a digital platform known as
            'plate2plate'.
          </p>

          <div className="mt-10 flex flex-row items-center justify-center pl-0 md:justify-start">
            {/* <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
              LEARN MORE
            </button> */}
            <a
              href="https://www.instagram.com/plate2plate.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-15 block rounded-full"
                src={instagramlogo}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        {/* plate2plate Image */}
        <div className="mb-2 flex h-1/4 items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 md:mb-20 md:mt-10 md:w-1/2 md:pr-20">
          <img
            className="h-[10rem] object-contain md:h-[30rem]"
            src={plate2platelogo}
            alt="plate2plate Logo"
          />
        </div>
      </div>

      {/* Tech4Impact conatiner */}
      <div className="w-full bg-[#F6F6F6]">
        <div className="flex flex-col justify-evenly rounded-t-[5vw] bg-white p-5 pt-9 md:min-h-[25vh] md:flex-row md:pb-20 md:pl-20 md:pr-20">
          {/* Tech4Impact Image */}
          <div className="mb-2 flex h-1/4 w-full items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 md:mb-20 md:ml-[4rem] md:mt-[12rem] md:w-1/2">
            <img
              className="h-[6rem] object-contain md:h-[12rem]"
              src={tech4impactlogo}
              alt="Tech4Impact Logo"
            />
          </div>
          {/* Tech4Impact description */}
          <div className="flex flex-col p-2 md:w-1/2">
            <div className="mt-5 text-xl font-[700] tracking-tight md:mt-20 md:text-4xl">
              Tech4Impact
            </div>
            <p className="mt-5 items-center justify-center text-sm font-[400] md:mr-[6rem] md:mt-12 md:text-xl md:leading-10">
              Tech4Impact is a project focused on helping those with limited
              access to technology overcome the digital divide. We refurbish old
              devices, giving them new life and donating them to those in need.
              Our goal is to increase technology access; creating equal
              opportunities for education, employment, and connectivity.
            </p>

            <div className="mt-[3rem] flex flex-row items-center justify-center md:justify-start">
              {/* <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
                LEARN MORE
              </button> */}
              <a
                href="https://www.instagram.com/tech4impact.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-15 block rounded-full"
                  src={instagramlogo}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* For testing style purposes: */}
      {/* <img src="src/images/ProjectsPage/Projects.png" alt="Design Overlay" className="fixed top-0 left-0 w-screen max-h-screen opacity-50 pointer-events-none z-50"/> */}
    </div>
  );
}
