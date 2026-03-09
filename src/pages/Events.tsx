import useDocumentTitle from '@src/hooks/use-document-title';

import { useState } from 'react';

import EventsEventsCarousel from '../components/events-events-carousel';
import PastEventCards from '../components/past-event-cards';

const groupPhoto = '/images/eventsCoverPic/eventsHeaderImage.png';

export default function Events() {
  const [selectedEventsYear, setSelectedEventsYear] = useState<'2026' | '2025'>(
    '2026'
  );

  useDocumentTitle('Events | Enactus UNSW');

  return (
    <>
      <header className="relative mx-auto mt-10 w-5/6 overflow-hidden rounded-3xl text-center">
        <img
          src={groupPhoto}
          alt="Group Photo"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          style={{ objectPosition: 'center' }}
        />
        <div className="relative z-10 flex items-center justify-center px-4 py-[16vw]">
          <h1 className="text-[clamp(24px,6vw,60px)] font-bold text-white drop-shadow-lg">
            Our Events
          </h1>
        </div>
      </header>
      {/* Upcoming Events */}
      <section className="pb-2 pt-16 text-center">
        <h1 className="mb-12 text-[clamp(24px,6vw,40px)] font-bold">
          Upcoming Events
        </h1>
        <div className="mb-12 flex flex-col items-center justify-center">
          <EventsEventsCarousel />
        </div>
      </section>
      <br />
      {/* Past Events */}
      <section className="pb-10 pt-2 text-center">
        <h1 className="mb-6 text-[clamp(24px,6vw,40px)] font-bold">
          Past Events
        </h1>
        <div className="mb-8 flex justify-center gap-4">
          <button
            type="button"
            style={{
              backgroundColor:
                selectedEventsYear === '2026' ? '#FFC107' : 'transparent',
              color: '#000',
              border: '2px solid #FFC107',
              borderRadius: '9999px',
              padding: '0.6rem 2rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              setSelectedEventsYear('2026');
            }}
          >
            2026
          </button>
          <button
            type="button"
            style={{
              backgroundColor:
                selectedEventsYear === '2025' ? '#FFC107' : 'transparent',
              color: '#000',
              border: '2px solid #FFC107',
              borderRadius: '9999px',
              padding: '0.6rem 2rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              setSelectedEventsYear('2025');
            }}
          >
            2025
          </button>
        </div>
        <div className="mb-12 flex flex-col items-center justify-center">
          <PastEventCards year={selectedEventsYear} />
        </div>
      </section>
    </>
  );
}
