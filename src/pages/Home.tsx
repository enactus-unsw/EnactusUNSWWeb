import enactusUNSWLogo from "../images/Enactus UNSW Logo (Grey).jpg";
import enactusTeamPhoto from "../images/enactus team.jpg";
import triangle from "../images/Triangle shape.png";
import HomeProjectCards from "components/home-project-cards";
import { Link } from "react-router-dom";
import EnactusButton from "components/atoms/button/enactusButton";

export default function Home() {
  return (
    <>
      <div>
        <img className="h-20 block ml-auto mr-auto m-4" src={enactusUNSWLogo} alt="Enactus UNSW Logo" />
        <header className="font-bold text-4xl text-center mb-10">
          The Student Hub of Social Impact <br /> and Entrepreneurship
        </header>
        <img className="w-2/3 rounded-xl block ml-auto mr-auto saturate-[1.15] mb-20" src={enactusTeamPhoto} alt="Enactus Team Photo" />
      </div>
      <div>
        <section className="bg-[#FFEBB6] text-center pt-16 pb-2">
          <h1 className="font-bold text-3xl">
            Our Mission
          </h1>
          <p className="my-10 text-[18px]">
            Our mission is to inspire and empower students to build <br />
            communities for sustainable, scalable, and measurable social <br />
            impact by using entrepreneurial action. As an incubator, we <br />
            strive to foster project growth from the initial stages onward, <br />
            until they can function independently.
          </p>
          <EnactusButton to="/about-us">
            LEARN MORE
          </EnactusButton>
        </section>
        <img src={triangle} alt="Triangle Shape" />
      </div>
      <section className="text-center pt-14 pb-20">
        <h1 className="font-bold text-3xl mb-12">
          Our Projects
        </h1>
        <Link to={'/projects'}>
          <HomeProjectCards />
        </Link>
      </section>
      <section className="bg-[#FFEBB6] pt-16 pb-10">
        <h1 className="text-center font-bold text-3xl">
          Our Events
        </h1>
      </section>
    </>
  )
}