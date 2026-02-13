import useDocumentTitle from '@src/hooks/use-document-title';

// Decoratives
const Banner = '/images/sponsors/SponsorsPartnersRectangle.png';
const Separator = '/images/sponsors/Separator.png';

// Sponsor/Partner Logos
const commonwealthbank = '/images/sponsors/commonwealthbank.png';
const thescarycanary = '/images/sponsors/thescarycanary.png';
const capgemini = '/images/sponsors/capgemini.png';
const macquarie = '/images/sponsors/macquarie.png';
const redbull = '/images/sponsors/redbull.png';
const bearish = '/images/sponsors/bearish.png';

export default function Sponsors() {
  useDocumentTitle('Sponsors | Enactus UNSW');

  return (
    <div>
      <div className="mt-12 flex w-full items-center justify-center">
        <div className="relative w-5/6">
          {/* Banner background */}
          <div className="relative w-full">
            <img
              src={Banner}
              alt="Banner"
              className="absolute left-0 top-0 z-0 h-full w-full rounded-3xl object-cover"
              style={{ objectPosition: 'center' }}
            />
            <div className="z-1 relative flex flex-col items-center justify-center px-4 py-[12vw] text-center">
              <h1 className="text-[clamp(24px,6vw,60px)] font-bold leading-tight text-[#2A2D32]">
                Sponsors and Partners
              </h1>
              <h3 className="mt-4 text-[clamp(14px,3vw,25px)] font-normal leading-[clamp(18px,5vw,44px)] text-[#2A2D32]">
                Enactus UNSW is grateful for all our wonderful <br /> sponsors
                and partners!
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
          marginTop: '10vh',
          zIndex: 1,
          textAlign: 'center',
          width: '100%',
        }}
      >
        Sponsors
      </h2>

      <img
        src={Separator}
        alt="Separator"
        className="h-auto w-full"
        style={{
          width: '90vw',
          margin: '0 auto',
          display: 'block',
          marginTop: '28px',
        }}
      />
      <a
        href="https://www.commbank.com.au/about-us/our-company.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={commonwealthbank}
          alt="Commonwealth Bank"
          className="h-auto w-auto"
          style={{
            width: '600px',
            margin: '0 auto',
            display: 'block',
            marginTop: '49px',
          }}
        />
      </a>

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

      <img
        src={Separator}
        alt="Separator"
        className="h-auto w-full"
        style={{
          width: '90vw',
          margin: '0 auto',
          marginTop: 30,
          display: 'block',
          marginBottom: 50,
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 5vw, 77px)',
        }}
      >
        <a
          href="https://www.facebook.com/scarycanarysydney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={thescarycanary}
            alt="The Scary Canary"
            style={{
              width: 'min(40vw,225px)',
              minWidth: '100px',
              marginLeft: 'clamp(10px, 5vw, 100px)',
              marginRight: 'clamp(10px, 5vw, 77px)',
            }}
            className="h-auto w-auto"
          />
        </a>
        <a
          href="https://www.macquarie.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={macquarie}
            alt="Macquarie"
            style={{ width: 'min(40vw,400px)', minWidth: '100px' }}
            className="h-auto w-auto"
          />
        </a>
        <a
          href="https://www.capgemini.com/au-en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={capgemini}
            alt="Capgemini"
            style={{
              width: 'min(50vw,496px)',
              minWidth: '120px',
              marginRight: 'clamp(10px, 3vw, 12px)',
            }}
            className="h-auto w-auto"
          />
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(20px, 8vw, 106px)',
        }}
      >
        <a
          href="https://www.redbull.com/au-en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={redbull}
            alt="Red Bull"
            style={{ width: 'min(40vw,372px)', minWidth: '100px' }}
            className="h-auto w-auto"
          />
        </a>
        <a
          href="https://bearishsydney.com/?srsltid=AfmBOorvpbPDYN_ljH_ofFYpEdJDzg2sFXI8ZMUDbZWf14OAuKrH-nb4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bearish}
            alt="Bearish"
            style={{ width: 'min(40vw,400px)', minWidth: '100px' }}
            className="h-auto w-auto"
          />
        </a>
      </div>
    </div>
  );
}
