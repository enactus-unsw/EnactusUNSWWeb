import enactusUNSWLogo from "../images/Enactus UNSW Logo (Grey).jpg";
import enactusTeamPhoto from "../images/enactus team.jpg";

export default function Home() {
  return (
    <>
      <div>
        {/* TODO: */}
        <img className="h-20 block ml-auto mr-auto m-4" src={enactusUNSWLogo} alt="Enactus UNSW Logo" />
        <header className="font-bold text-4xl text-center mb-10">
          The Student Hub of Social Impact <br /> and Entrepreneurship
        </header>
        <img className="w-2/3 rounded-xl block ml-auto mr-auto saturate-[1.2] mb-20" src={enactusTeamPhoto} alt="Enactus Team Photo" />
      </div>
      <section className="bg-[#FFEBB6] text-center p-16">
        <h1 className="font-bold text-3xl mb-8">
          Our Mission
        </h1>
        <p className="mb-10">
          Our mission is to inspire and empower students to build <br />
          communities for sustainable, scalable, and measurable social <br />
          impact by using entrepreneurial action. As an incubator, we <br />
          strive to foster project growth from the initial stages onward, <br />
          until they can function independently.
        </p>
        <button>
          LEARN MORE
        </button>
      </section>
    </>
  )
}