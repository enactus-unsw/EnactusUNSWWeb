import EventsEventsCarousel from "../components/events-events-carousel";

export default function Events() {
  return (
    <>
      <header className="text-center">
        <div className="ml-auto mr-auto m-4 mt-10 rounded-xl bg-gradient-to-r from-[#FFF1CA] to-[#FFC222] w-11/12">
          <h1 className="font-bold text-4xl p-6">
            Events
          </h1>
        </div>
      </header>
      {/* Upcoming Events */}
      <section className="pt-16 pb-10 text-center">
        <h1 className="font-bold text-3xl mb-12">
          Upcoming Events
        </h1>
        <div className="flex flex-col justify-center items-center mb-12">
          <EventsEventsCarousel />
        </div>
      </section>
      {/* Past Events */}
    </>
  )
}