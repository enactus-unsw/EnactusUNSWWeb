import tech4impactlogo from "../images/tech4impact_logo.png";
import shareplatelogo from "../images/Shareplate_Logo_Grey.png";
import procketslogo from "../images/prockets_logo.png";
import instagramlogo from "../images/Logos/Instagram.png";
import titleBackground from "../images/ProjectsPage/titleBackground.png"
import { Link } from "react-router-dom";
import EnactusButton from "../components/atoms/button/enactusButton";

// TODO: change website once deployed using actual domain
const procketsWebsite = "https://enactus-unsw.github.io/enactus-prockets/";

export default function Projects() {
  return ( 
    <div className="text-[#2A2D32] w-full flex-grow">
      {/* title container */}
      <div
        className="mx-auto flex justify-center items-center font-[800] text-4xl md:text-8xl tracking-wide w-full h-[10rem] md:h-[26rem]"
        style={{
          backgroundImage: `url(${titleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Our Projects
      </div>

      {/* Prockets conatiner */}
      <div className="flex flex-col md:flex-row justify-evenly p-5 md:px-20 mx-auto md:min-h-[25vh]">
        {/* Prockets Image */}
        <div className="flex justify-center items-center w-full md:w-1/2 md:mt-8 mb-2 md:mb-20 transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="object-contain h-[10rem] md:h-[30rem]" src={procketslogo} alt="Prockets Logo" />
        </div>
        {/* Prockets description */}
        <div className="flex flex-col w-full md:w-1/2 p-2 md:pr-20 md:ml-[4.5rem]">
          <div className="font-[700] md:mt-20 text-xl md:text-4xl">
            Prockets
          </div>
          <p className="items-center justify-center text-sm md:text-xl md:leading-10 font-[400] mt-5 md:mt-12">
            Creating prosthetics more accessible to amputees - financially by developing a cost-effective component of the prosthetic and socially through a support network platform.
          </p>
          {/* Prockets website & instagram*/}
          <div className="flex flex-row justify-center md:justify-start items-center mt-10">
            <a href="https://www.instagram.com/prockets.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-15 block rounded-full" src={instagramlogo} alt="Instagram" />
            </a>
            <EnactusButton to ={procketsWebsite} target="_blank" rel="noopener noreferrer" className="ml-4 bg-[#FFC222] text-black hover:bg-[#FFDD83]">
              Visit the Website
            </EnactusButton>
          </div> 
        </div>
      </div>


      {/* SharePlate conatiner */}
      <div className="flex flex-col-reverse md:flex-row justify-center bg-[#F6F6F6] rounded-t-[5vw] p-5 md:pl-20 md:pr-20 md:min-h-[25vh]">
        {/* SharePlate description */}
        <div className="flex flex-col w-full md:w-1/2 p-2 md:ml-[12rem]">
          <div className="font-[700] md:mt-20 text-xl md:text-4xl tracking-tight">
            Shareplate
          </div>
          <p className="items-center justify-center text-sm md:text-xl md:leading-10 font-[400] mt-5 md:mt-12">
            A not for profit initiative dedicated to bridging the gap between households experiencing food insecurity and those who have the capacity to provide resources through a digital platform known as 'Shareplate'.           
          </p>

          <div className="flex flex-row justify-center md:justify-start items-center mt-10 pl-0">
            {/* <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
              LEARN MORE
            </button> */}
            <a href="https://www.instagram.com/shareplate.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-15 block rounded-full" src={instagramlogo} alt="Instagram" />
            </a>
          </div>
        </div>
        {/* SharePlate Image */}
        <div className="flex md:w-1/2 justify-center items-center h-1/4 md:mt-10 md:pr-20 mb-2 md:mb-20 transition-transform duration-300 ease-in-out hover:scale-105">
          <img className="object-contain h-[10rem] md:h-[30rem] " src={shareplatelogo} alt="SharePlate Logo" />
        </div>
      </div>

      {/* Tech4Impact conatiner */}
      <div className="bg-[#F6F6F6] w-full">
        <div className="flex flex-col md:flex-row justify-evenly bg-white rounded-t-[5vw] p-5 pt-9 md:pl-20 md:pr-20 md:pb-20 md:min-h-[25vh]">
          {/* Tech4Impact Image */}
          <div className="flex w-full md:w-1/2 justify-center items-center h-1/4 md:mt-[12rem] md:ml-[4rem] mb-2 md:mb-20 transition-transform duration-300 ease-in-out hover:scale-105">
            <img className="object-contain h-[6rem] md:h-[12rem]" src={tech4impactlogo} alt="Tech4Impact Logo" />
          </div>
          {/* Tech4Impact description */}
          <div className="flex flex-col md:w-1/2 p-2">
            <div className="font-[700] mt-5 md:mt-20 text-xl md:text-4xl tracking-tight">
              Tech4Impact
            </div>
            <p className="items-center justify-center text-sm md:text-xl md:leading-10 font-[400] mt-5 md:mt-12 md:mr-[6rem]">
              Tech4Impact is a project focused on helping those with limited access to technology overcome the digital divide. We refurbish old devices, giving them new life and donating them to those in need. Our goal is to increase technology access; creating equal opportunities for education, employment, and connectivity.
            </p>

            <div className="flex flex-row justify-center md:justify-start items-center mt-[3rem] ">
              {/* <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
                LEARN MORE
              </button> */}
              <a href="https://www.instagram.com/tech4impact.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-15 block rounded-full" src={instagramlogo} alt="Instagram" />
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* For testing style purposes: */}
      {/* <img src="src/images/ProjectsPage/Projects.png" alt="Design Overlay" className="fixed top-0 left-0 w-screen max-h-screen opacity-50 pointer-events-none z-50"/> */}
    </div>
  )
}