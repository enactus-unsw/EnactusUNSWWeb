//Importing this way so vite bundle it up for deployment
import teamPhoto from "../images/enactus_board_cropped.jpg";

import amrutha from "../images/teamPhotos/amrutha.jpg";
import benjamin from "../images/teamPhotos/benjamin.jpg";
import sehej from "../images/teamPhotos/sehej.jpg";
import iqtidar from "../images/teamPhotos/iqtidar.jpg";
import brendan from "../images/teamPhotos/brendan.jpg";
import alice from "../images/teamPhotos/alice.jpg";
import rifah from "../images/teamPhotos/rifah.jpg";
import akanksha from "../images/teamPhotos/akanksha.jpg";

import olivia from "../images/teamPhotos/olivia.jpg";
import saaini from "../images/teamPhotos/saaini.jpg";

import aryan from "../images/teamPhotos/aryan.jpg";
import noyal from "../images/teamPhotos/noyal.jpg";

import karen from "../images/teamPhotos/karen.jpg";
import jennifer from "../images/teamPhotos/jennifer.jpg";

import jayden from "../images/teamPhotos/jayden.jpg";
import emily from "../images/teamPhotos/emily.jpg";

import meenal from "../images/teamPhotos/meenal.jpg";

import fleur from "../images/teamPhotos/fleur.jpg";
//import justin from "../images/teamPhotos/justin.jpg";

import amy from "../images/teamPhotos/amy.jpg";
import iris from "../images/teamPhotos/iris.jpg";

import henry from "../images/teamPhotos/henry.jpg";
import jessica from "../images/teamPhotos/jessica.jpg";

import zainab from "../images/teamPhotos/zainab.jpg";

import maanya from "../images/teamPhotos/maanya.jpg";
//import saarthak from "../images/teamPhotos/saarthak.jpg";

import dummy from "../images/teamPhotos/dummy.jpg";
import { useState } from "react";

type TeamMemberProps = {
  imageSrc: string;
  name: string;
  role: string;
};

function TeamMember({ imageSrc, name, role }: TeamMemberProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          backgroundColor: "#ddd",
          border: "12px solid #FFC107",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <img
          src={imageSrc}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{name}</div>
        <div style={{ fontSize: "1rem" }}>{role}</div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const [selectedTeamYear, setSelectedTeamYear] = useState("2026");

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>Meet the Team</h2>
      <p style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
        The team making the magic happen.
      </p>
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* team photo */}
        <img
          src={teamPhoto}
          alt="team-photo"
          className="rounded-xl max-w-full h-auto w-[700px] mb-10 transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div
        style={{
          marginTop: "2rem",
          gap: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setSelectedTeamYear("2026")}
          style={{
            backgroundColor:
              selectedTeamYear === "2026" ? "#FFC107" : "transparent",
            color: "#000",
            border: "2px solid #FFC107",
            borderRadius: "9999px",
            padding: "0.6rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          2026
        </button>

        <button
          onClick={() => setSelectedTeamYear("2025")}
          style={{
            backgroundColor:
              selectedTeamYear === "2025" ? "#FFC107" : "transparent",
            color: "#000",
            border: "2px solid #FFC107",
            borderRadius: "9999px",
            padding: "0.6rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          2025
        </button>
      </div>

      {/* dashed section seperator line */}
      <div
        style={{
          marginTop: "2.5rem",
          height: "5px",
          backgroundImage:
            "repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)",
          width: "92%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {selectedTeamYear === "2026" ? (
        <>

      {/* STEER profiles */}
      <h3 style={{ fontSize: "2.4rem", fontWeight: "bold", marginTop: "3rem" }}>
        STEER
      </h3>

      {/* top row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={amrutha}
          name="Amrutha Sivaranjan"
          role="Co-President"
        />
        <TeamMember
          imageSrc={benjamin}
          name="Benjamin Liu"
          role="Co-President"
        />
      </div>

      {/* second row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        <TeamMember imageSrc={sehej} name="Sehej Panesar" role="Secretary" />
        <TeamMember imageSrc={iqtidar} name="Iqtidar Rahman" role="Treasurer" />
        <TeamMember
          imageSrc={brendan}
          name="Brendan Huynh"
          role="Vice President of Internals"
        />
        <TeamMember
          imageSrc={alice}
          name="Alice Khau"
          role="Vice President of Externals"
        />
        <TeamMember
          imageSrc={rifah}
          name="Rifah Riyadh"
          role="Vice President of Projects"
        />
        <TeamMember
          imageSrc={akanksha}
          name="Akanksha Sood"
          role="Vice President of Projects"
        />
      </div>

      {/* bottom row (returning officers) */}
      {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/9.jpg" name="Denton Nguyen" role="Returning Officer" />
      <TeamMember imageSrc="src/images/teamPhotos/10.jpg" name="Melani Gunawardana" role="Returning Officer" />
    </div> */}

      {/* dashed section seperator line */}
      <div
        style={{
          marginTop: "2.5rem",
          height: "5px",
          backgroundImage:
            "repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)",
          width: "92%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* director profiles */}
      <h3 style={{ fontSize: "2.4rem", fontWeight: "bold", marginTop: "3rem" }}>
        DIRECTORS
      </h3>

      {/* prockets row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={olivia}
          name="Olivia Vu"
          role="Prockets Director"
        />
        <TeamMember
          imageSrc={saaini}
          name="Saaini Balakrishna"
          role="Prockets Director"
        />
      </div>

      {/* tech4impact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={aryan}
          name="Aryan Thukral"
          role="Tech4Impact Director"
        />
        <TeamMember
          imageSrc={noyal}
          name="Noyal Shaji"
          role="Tech4Impact Director"
        />
      </div>

      {/* plate2plate row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={karen}
          name="Karen Huo"
          role="plate2plate Director"
        />
        <TeamMember
          imageSrc={jennifer}
          name="Jennifer Yu"
          role="plate2plate Director"
        />
      </div>

      {/* careers row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={jayden}
          name="Jayden Truong"
          role="Careers Director"
        />
        <TeamMember imageSrc={emily} name="Emily Goh" role="Careers Director" />
      </div>

      {/* sponsorships and multimedia row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={meenal}
          name="Meenal Janjua"
          role="Sponsorships Director"
        />
        <TeamMember
          imageSrc={zainab}
          name="Zainab Atif"
          role="Multimedia Director"
        />
      </div>

      {/* hr row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={fleur}
          name="Fleur Randerath"
          role="HR Director"
        />
        <TeamMember imageSrc={dummy} name="Justin Bu" role="HR Director" />
      </div>

      {/* it row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember imageSrc={amy} name="Amy Wang" role="IT Director" />
        <TeamMember imageSrc={iris} name="Iris Dautriat" role="IT Director" />
      </div>

      {/* marketing row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={henry}
          name="Henry Tat"
          role="Marketing Director"
        />
        <TeamMember
          imageSrc={jessica}
          name="Jessica Tran"
          role="Marketing Director"
        />
      </div>

      {/* socials row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-30 md:gap-60 mt-8 w-fit mx-auto">
        <TeamMember
          imageSrc={maanya}
          name="Maanya Gawande"
          role="Social Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Saarthak Aggarwal"
          role="Social Director"
        />
      </div>

      {/* dashed section seperator line */}
      <div
        style={{
          marginTop: "2.5rem",
          height: "5px",
          backgroundImage:
            "repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)",
          width: "92%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* subcomittee  profile heading */}
      <h3 className="text-[2rem] md:text-[2.4rem] font-bold mt-12">
        {" "}
        SUBCOMMITTEES{" "}
      </h3>

      {/* subcom team list*/}
      {/* prockets team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Prockets Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Diana So</div>
            <div>Guntas Sandhu</div>
          </div>
          <div>
            <div>Harish Varathan</div>
            <div>Keiara Fong</div>
          </div>
          <div>
            <div>Leo Chatonsky</div>
            <div>Shreya Rao</div>
          </div>
        </div>
      </div>

      {/* tech4i team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Tech4Impact Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Anna Vu</div>
            <div>Emmy Luu</div>
          </div>
          <div>
            <div>Martin Abdou</div>
            <div>Naina Mathews</div>
          </div>
          <div>
            <div>Tharshan Indrakumar</div>
            <div></div>
          </div>
        </div>
      </div>

      {/* plate2plate team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          plate2plate Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Andrew Tan</div>
            <div>Eric Yang</div>
          </div>
          <div>
            <div>Katie Ho</div>
            <div>Nicole Deegan</div>
          </div>
          <div>
            <div>Stella Hong</div>
            <div>Suki Li</div>
          </div>
        </div>
      </div>

      {/* careers team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Careers Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Adarsh Wijesinghe</div>
            <div>Henry Huang</div>
          </div>
          <div>
            <div>Mary Duong</div>
            <div>Samaira Sehgal</div>
          </div>
          <div>
            <div>Sarthak Sahoo</div>
            <div>William Weng</div>
          </div>
        </div>
      </div>

      {/* spons team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Sponsorships Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Arthi Kathiravelupillai</div>
            <div>Nikhil Sawant</div>
          </div>
          <div>
            <div>Glyn Kang</div>
            <div>Jithmi Bandara</div>
          </div>
          <div>
            <div>Sharanya Adaikalavan</div>
            <div>Steven Xu</div>
          </div>
        </div>
      </div>

      {/* hr team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Human Resources Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Aaryan Khan</div>
            <div>Heidi Ho</div>
          </div>
          <div>
            <div>Kirk Foo</div>
            <div>Manya Garg</div>
          </div>
          <div>
            <div>Rimsha Laiqa</div>
          </div>
        </div>
      </div>

      {/* it team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Information Technology Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Jasmine Nguyen</div>
            <div>Jason Chen</div>
          </div>
          <div>
            <div>Jessica O'Brien</div>
            <div>Jordan Chen</div>
          </div>
          <div>
            <div>Kevin Yu</div>
            <div>Pranavi Parasu</div>
          </div>
        </div>
      </div>

      {/* marketing team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Marketing Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Aaron Tran</div>
          </div>
          <div>
            <div>Gina Nguyen</div>
            <div>Jessica Chui</div>
          </div>
          <div>
            <div>Natalie Siev</div>
            <div></div>
          </div>
        </div>
      </div>

      {/* multi team */}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Multimedia Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Calvin Bae</div>
            <div>Maxwell Su</div>
          </div>
          <div>
            <div>Emma Corcoran</div>
            <div>Grace Oh</div>
          </div>
          <div>
            <div>David Chen</div>
            <div></div>
          </div>
        </div>
      </div>

      {/* socials team*/}
      <div>
        <h4
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "2rem" }}
        >
          Socials Team
        </h4>
        <div className="flex justify-center gap-[2rem] sm:gap-[5rem] mt-4">
          <div>
            <div>Anonna Das</div>
            <div>Chyna Probert</div>
          </div>
          <div>
            <div>Ethan Richard</div>
            <div>Layne Foo</div>
          </div>
          <div>
            <div>Riddhi Kulkarni</div>
            <div>Victor Truong</div>
          </div>
        </div>
      </div>
        </>
      ) : (
        <div style={{ marginTop: "3rem", fontSize: "1.1rem" }}>
          2025 team view coming soon.
        </div>
      )}
    </div>
  );
}
