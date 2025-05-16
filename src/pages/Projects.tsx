
export default function Projects() {
  return ( 
    <div className="text-[#2A2D32] w-full flex-grow">
      {/* title container */}
      <div className="bg-[url(src/images/ProjectsPage/titleBackground.png)] bg-cover mx-auto flex justify-center items-center font-[800] text-8xl tracking-wide w-full h-[26rem]">
        Our Projects
      </div>

      {/* Prockets conatiner */}
      <div className="flex flex-row justify-evenly p-5 pl-20 pr-20 ml-[6rem] mr-20 min-h-[25vh]">
        {/* Prockets Image */}
        <div className="flex w-1/2 justify-center items-center h-1/4 mt-8">
          <img className="object-contain h-[30rem]" src="src/images/prockets_logo.png" alt="Prockets Logo" />
        </div>
        {/* Prockets description */}
        <div className="flex flex-col w-1/2 p-2 pr-20 ml-[4.5rem]">
          <div className="font-[700] mt-20 text-6xl">
            Prockets
          </div>
          <p className="items-center justify-center text-2xl leading-10 font-[400] mt-12">
            Creating prosthetics more accessible to amputees - financially by developing a cost-effective component of the prosthetic and socially through a support network platform.
          </p>
          <div className="flex flex-row items-center mt-10">
            <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
              LEARN MORE
            </button>
            <a href="https://www.instagram.com/prockets.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-15 block ml-4" src="src/images/Logos/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
     

      {/* SharePlate conatiner */}
      <div className="flex flex-row justify-center bg-[#F6F6F6] rounded-t-[5vw] p-5 pl-20 pr-20 min-h-[25vh]">
        {/* SharePlate description */}
        <div className="flex flex-col w-1/2 p-2 ml-[12rem]">
          <div className="font-[700] mt-20 text-6xl tracking-tight">
            Shareplate
          </div>
          <p className="items-center justify-center text-2xl leading-10 font-[400] mt-12">
            A not for profit initiative dedicated to bridging the gap between households experiencing food insecurity and those who have the capacity to provide resources through a digital platform known as 'Shareplate'.           
          </p>

          <div className="flex flex-row items-center mt-10">
            <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
              LEARN MORE
            </button>
            <a href="https://www.instagram.com/shareplate.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-15 block ml-4" src="src/images/Logos/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
        {/* SharePlate Image */}
        <div className="flex w-1/2 justify-center items-center h-1/4 mt-10 pr-20">
          <img className="object-contain h-[30rem]" src="src/images/Shareplate_Logo_Grey.png" alt="SharePlate Logo" />
        </div>
      </div>

      {/* Tech4Impact conatiner */}
      <div className="bg-[#F6F6F6] w-full">
        <div className="flex flex-row justify-evenly bg-white rounded-t-[5vw] p-5 pl-20 pr-20 pb-20 min-h-[25vh]">
          {/* Tech4Impact Image */}
          <div className="flex w-1/2 justify-center items-center h-1/4 mt-[16rem] ml-[4rem]">
            <img className="object-contain h-[12rem]" src="src/images/tech4impact_logo.png" alt="Tech4Impact Logo" />
          </div>
          {/* Tech4Impact description */}
          <div className="flex flex-col w-1/2 p-2">
            <div className="font-[700] mt-20 text-6xl tracking-tight">
              Tech4Impact
            </div>
            <p className="items-center justify-center text-2xl leading-10 font-[400] mt-12 mr-[6rem]">
              Tech4Impact is a project focused on helping those with limited access to technology overcome the digital divide. We refurbish old devices, giving them new life and donating them to those in need. Our goal is to increase technology access; creating equal opportunities for education, employment, and connectivity.
            </p>

            <div className="flex flex-row items-center mt-[3rem]">
              <button className="bg-[#FFC222] hover:bg-yellow-700 text-2xl font-bold py-2 px-4 rounded-2xl h-[3.5rem] w-[15rem]">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* For testing style purposes: */}
      {/* <img src="src/images/ProjectsPage/Projects.png" alt="Design Overlay" className="fixed top-0 left-0 w-screen max-h-screen opacity-50 pointer-events-none z-50"/> */}
    </div>
  )
}