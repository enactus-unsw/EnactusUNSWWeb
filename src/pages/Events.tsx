import EnactusButton from "../components/atoms/button/enactusButton";
import EventsEventsCarousel from "../components/events-events-carousel";
import PastEventCards from "../components/past-event-cards";

const groupPhoto = "/images/eventsCoverPic/eventsHeaderImage.png";

export default function Events() {
  return (
    <>
      <header className="relative w-5/6 mx-auto rounded-3xl overflow-hidden text-center mt-10">
        <img
          src={groupPhoto}
          alt="Group Photo"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center" }}
        />
        <div className="relative z-10 flex items-center justify-center px-4 py-[16vw]">
          <h1 className="font-bold text-[clamp(24px,6vw,60px)] text-white drop-shadow-lg">
            Our Events
          </h1>
        </div>
      </header>
      {/* Upcoming Events */}
      <section className="pt-16 pb-2 text-center">
        <h1 className="font-bold text-[clamp(24px,6vw,40px)] mb-12">
          Upcoming Events
        </h1>
        <div className="flex flex-col justify-center items-center mb-12">
          <EventsEventsCarousel />
        </div>
      </section>
      <br />
      {/* Past Events */}
      <section className="pt-2 pb-10 text-center">
        <h1 className="font-bold text-[clamp(24px,6vw,40px)] mb-6">
          Past Events
        </h1>
        <EnactusButton
          to="/events"
          className="bg-[#FFC222] text-black pl-5 pr-5 mb-8 rounded-full hover:bg-[#FFDD83]"
        >
          2025
        </EnactusButton>
        <div className="flex flex-col justify-center items-center mb-12">
          <PastEventCards />
        </div>
      </section>
    </>
  );
}
