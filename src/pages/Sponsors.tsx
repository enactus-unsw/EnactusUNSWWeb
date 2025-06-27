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
            text-[clamp(10px,3vw,60px)]
            md:mb-60 
            md:mt-[120px]
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
            text-[clamp(6px,1.7vw,34px)]
            md:leading-[clamp(18px,5vw,44px)]
            mt-[100px]
            z-[1] 
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
            zIndex: 1,
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
            zIndex: 1,
            textAlign: 'center',
            width: '100%',
          }}
      >
        Partners
      </h2>

      <img src={Separator} alt="Separator" className="w-full h-auto" style={{ width: '90vw', margin: '0 auto', marginTop: 30, display: 'block', marginBottom: 50}}/>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 5vw, 77px)'
        }}
      >
        <img src={thescarycanary} alt="The Scary Canary" style={{ width: 'min(40vw,225px)', minWidth: '100px', marginLeft: 'clamp(10px, 5vw, 100px)', marginRight: 'clamp(10px, 5vw, 77px)' }} className="w-auto h-auto"/>
        <img src={capgemini} alt="Capgemini" style={{ width: 'min(50vw,496px)', minWidth: '120px', marginRight: 'clamp(10px, 3vw, 12px)' }} className="w-auto h-auto"/>
        <img src={macquarie} alt="Macquarie" style={{ width: 'min(40vw,423px)', minWidth: '100px' }} className="w-auto h-auto"/>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 8vw, 106px)'
        }}
      >
        <img src={redbull} alt="Red Bull" style={{ width: 'min(40vw,372px)', minWidth: '100px' }} className="w-auto h-auto"/>
        <img src={bearish} alt="Bearish" style={{ width: 'min(40vw,405px)', minWidth: '100px' }} className="w-auto h-auto"/>
      </div>
    </div>
  );
}
