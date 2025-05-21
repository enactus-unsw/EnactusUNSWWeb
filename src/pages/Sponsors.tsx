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
        <img src={Banner} alt="Banner" className="w-full h-auto" style={{ marginTop: '59px' }} />
        <h1
          style={{
            position: 'absolute',
            color: '#2A2D32',
            fontWeight: 'bold',
            fontSize: 'clamp(24px, 5vw, 60px)',
            margin: 0,
            marginTop: 0,
            zIndex: 1,
            textAlign: 'center',
            width: '100%',
          }}
        >
          Sponsors and Partners
        </h1>
        <h3
          style={{
            position: 'absolute',
            color: '#2A2D32',
            fontWeight: 400,
            fontSize: 'clamp(16px, 2vw, 34px)',
            margin: 0,
            marginTop: 'clamp(100px, 15vw, 190px)',
            zIndex: 2,
            textAlign: 'center',
            width: '100%',
          }}
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
            marginTop: '100px',
            zIndex: 3,
            textAlign: 'center',
            width: '100%',
          }}
      >
        Sponsors
      </h2>

      <img src={Separator} alt="Separator" className="w-full h-auto" style={{ width: '1200px', margin: '0 auto', display: 'block', marginTop: '28px'}}/>
      
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

      <img src={Separator} alt="Separator" className="w-full h-auto" style={{ width: '1200px', margin: '0 auto', display: 'block', marginTop: '28px', marginBottom: '95px'}}/>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <img src={thescarycanary} alt="The Scary Canary" className="w-auto h-auto" style={{ width: '225px', marginLeft: '100px', marginRight: '77px' }}/>
        <img src={capgemini} alt="Capgemini" className="w-auto h-auto" style={{ width: '496px', marginRight: '12px' }}/>
        <img src={macquarie} alt="Macquarie" className="w-auto h-auto" style={{ width: '423px' }}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '106px' }}>
        <img src={redbull} alt="Red Bull" className="w-auto h-auto" style={{ width: '372px' }}/>
        <img src={bearish} alt="Bearish" className="w-auto h-auto" style={{ width: '405px' }}/>
      </div>
    </div>
  );
}