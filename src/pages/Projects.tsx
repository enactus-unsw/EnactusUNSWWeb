
export default function Projects() {
  return ( 
    <div className="text-[#2A2D32] w-full">
      {/* title container */}
      <div className="bg-[url(src/images/ProjectsPage/titleBackground.png)] bg-cover mx-auto flex justify-center items-center font-[800] text-7xl tracking-wider w-full h-96">
        Our Projects
      </div>

      {/* Prockets conatiner */}
      <div className="flex flex-row justify-evenly p-8">
        {/* Prockets Image */}
        <div className="flex w-1/2 justify-center items-center">
          <img className="h-48 block" src="src/images/prockets_logo.png" alt="Prockets Logo" />
        </div>
        {/* Prockets description */}
        <div className="flex flex-col w-1/2 p-2 pr-20">
          <div className="font-[800] mt-auto">
            Prockets
          </div>
          <p className="mt-auto items-center justify-center">
            Creating prosthetics more accessible to amputees - financially by developing a cost-effective component of the prosthetic and socially through a support network platform.
          </p>
          <div className="flex flex-row items-center mt-auto">
            {/* TODO: add different states, add link */}
            <button className="bg-[#FFC222] hover:bg-blue-700 font-bold py-2 px-4 rounded-2xl">
              LEARN MORE
            </button>
            <a href="https://www.instagram.com/prockets.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-14 block ml-4" src="src/images/Logos/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
     

      {/* SharePlate conatiner */}
      <div className="flex flex-row justify-center p-8 bg-[#F6F6F6] rounded-t-[5vw]">
        {/* SharePlate description */}
        <div className="flex flex-col w-1/2 p-8 pl-20">
          <div className="font-[800] mt-auto">
            SharePlate
          </div>
          <p className="mt-auto items-center justify-center">
            A not for profit initiative dedicated to bridging the gap between households experiencing food insecurity and those who have the capacity to provide resources through a digital platform known as 'Shareplate'.           
          </p>

          <div className="flex flex-row items-center mt-auto">
            {/* TODO: add different states, add link */}
            <button className="bg-[#FFC222] hover:bg-blue-700 font-bold py-2 px-4 rounded-2xl">
              LEARN MORE
            </button>
            <a href="https://www.instagram.com/shareplate.au/" target="_blank" rel="noopener noreferrer">
              <img className="h-14 block ml-4" src="src/images/Logos/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
        {/* SharePlate Image */}
        <div className="flex w-1/2 justify-center items-center">
          <img className="h-48 block" src="src/images/Shareplate_Logo_Grey.png" alt="SharePlate Logo" />
        </div>
      </div>

      {/* Tech4Impact conatiner */}
      <div className="bg-[#F6F6F6] w-full">
        <div className="flex flex-row justify-evenly p-8 bg-white rounded-t-[5vw]">
          {/* Tech4Impact Image */}
          <div className="flex w-1/2 justify-center items-center">
            <img className="h-48 block" src="src/images/tech4impact_logo.png" alt="Tech4Impact Logo" />
          </div>
          {/* Tech4Impact description */}
          <div className="flex flex-col w-1/2 p-2 pr-20">
            <div className="font-[800] mt-auto">
              Tech4Impact
            </div>
            <p className="mt-auto items-center justify-center">
              Tech4Impact is a project focused on helping those with limited access to technology overcome the digital divide. We refurbish old devices, giving them new life and donating them to those in need. Our goal is to increase technology access; creating equal opportunities for education, employment, and connectivity.
            </p>

            <div className="flex flex-row items-center mt-auto">
              {/* TODO: add different states, add link */}
              <button className="bg-[#FFC222] hover:bg-blue-700 font-bold py-2 px-4 rounded-2xl">
                LEARN MORE
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}