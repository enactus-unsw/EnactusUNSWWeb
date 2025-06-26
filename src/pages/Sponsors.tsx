// Decoratives
import Banner from "../images/sponsors/Banner.png";
import Separator from "../images/sponsors/Separator.png";

// Sponsor/Partner Logos
import commonwealthbank from "../images/sponsors/commonwealthbank.png";
import thescarycanary from "../images/sponsors/thescarycanary.png";
import capgemini from "../images/sponsors/capgemini.png";
import macquarie from "../images/sponsors/macquarie.png";
import redbull from "../images/sponsors/redbull.png";
import bearish from "../images/sponsors/bearish.png";

export default function Sponsors() {
  return (
    <div>
      <header style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Banner} alt="Banner" className="w-full h-auto" style={{ marginTop: '3rem' }} />
        <h1
            className="
            absolute 
            text-[#2A2D32] 
            font-bold 
            text-lg
            sm:text-xl
            md:text-9xl
            md:mb-60 
            z-[1] 
            text-center 
            w-full
          "
        >
          Sponsors and Partners
        </h1>
        <h3
         className="
            absolute 
            text-[#2A2D32] 
            font-normal 
            text-xs
            sm:text-lg
            md:text-6xl
            mt-20
            md:mt-60
            z-[2] 
            text-center 
            w-full
          "
        >
          Enactus UNSW is grateful for all our wonderful <br></br> sponsors and partners!
        </h3>
      </header>
      
      <h2
        style={{
            position: 'relative',
            color: '#2A2D32',
            fontWeight: 'bold',
            fontSize: 'clamp(30px, 5vw, 45px)',
            margin: 0,
            marginTop: "10vh",
            zIndex: 3,
            textAlign: 'center',
            width: '100%',
          }}
      >
        Sponsors
      </h2>

      <img src={Separator} alt="Separator" className="w-full h-auto" style={{ width: '90vw', margin: '0 auto', display: 'block', marginTop: '28px'}}/>
      
      <img src={commonwealthbank} alt="Commonwealth Bank" className="w-auto h-auto" style={{width: '600px', margin: '0 auto', display: 'block', marginTop: '49px'}}/>
      
      <h2
        style={{
            position: 'relative',
            color: '#2A2D32',
            fontWeight: 'bold',
            fontSize: 'clamp(30px, 5vw, 45px)',
            margin: 0,
            marginTop: '100px',
            zIndex: 3,
            textAlign: 'center',
            width: '100%',
          }}
      >
        Partners
      </h2>

      <img src={Separator} alt="Separator" className="w-full h-auto" style={{ width: '90vw', margin: '0 auto', marginTop: 30, display: 'block', marginBottom: 50}}/>

      
      <div className="w-fit mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 mt-2 place-items-center">
        <img src={thescarycanary} alt="The Scary Canary" className="w-[140px] sm:w-[180px] md:w-[225px]"/>
        <img src={capgemini} alt="Capgemini" className="w-[240px] sm:w-[350px] md:w-[496px]"/>
        <img src={macquarie} alt="Macquarie" className="w-[200px] sm:w-[320px] md:w-[423px]"/>
        <img src={redbull} alt="Red Bull" className="w-[200px] sm:w-[320px] md:w-[372px]"/>
        <img src={bearish} alt="Bearish" className="w-[200px] sm:w-[320px] md:w-[405px]"/>
      </div>
    </div>
  );
}
