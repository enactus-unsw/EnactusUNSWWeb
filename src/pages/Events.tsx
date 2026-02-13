import useDocumentTitle from '@src/hooks/use-document-title';

import EnactusButton from '../components/atoms/button/enactusButton';
import EventsEventsCarousel from '../components/events-events-carousel';
import PastEventCards from '../components/past-event-cards';

const groupPhoto = '/images/eventsCoverPic/eventsHeaderImage.png';

export default function Events() {
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
        <EnactusButton
          to="/events"
          className="mb-8 rounded-full bg-[#FFC222] pl-5 pr-5 text-black hover:bg-[#FFDD83]"
        >
          2025
        </EnactusButton>
        <div className="mb-12 flex flex-col items-center justify-center">
          <PastEventCards />
        </div>
      </section>
    </>
  );
}
