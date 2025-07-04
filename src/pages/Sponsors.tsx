// Decoratives
import Banner from "../images/sponsors/SponsorsPartnersRectangle.png";
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
      <div className="w-full flex justify-center items-center mt-12">
        <div className="relative w-5/6">
          {/* Banner background */}
          <div className="relative w-full">
            <img
              src={Banner}
              alt="Banner"
              className="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-3xl"
              style={{ objectPosition: 'center' }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-[12vw]">
              <h1 className="text-[#2A2D32] font-bold text-[clamp(24px,6vw,60px)] leading-tight">
                Sponsors and Partners
              </h1>
              <h3 className="text-[#2A2D32] font-normal text-[clamp(14px,3vw,25px)] leading-[clamp(18px,5vw,44px)] mt-4">
                Enactus UNSW is grateful for all our wonderful <br /> sponsors and partners!
              </h3>
            </div>
          </div>
        </div>
      </div>
      
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
        <img src={macquarie} alt="Macquarie" style={{ width: 'min(40vw,400px)', minWidth: '100px' }} className="w-auto h-auto"/>
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
        <img src={bearish} alt="Bearish" style={{ width: 'min(40vw,400px)', minWidth: '100px' }} className="w-auto h-auto"/>
      </div>
    </div>
  );
}
