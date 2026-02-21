import { TeamMember } from './TeamMember';

const dummy = 'images/teamPhotos/dummy.jpg';

export function Team2026() {
  return (
    <>
      {/* STEER profiles */}
      <h3
        style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          marginTop: '3rem',
        }}
      >
        STEER
      </h3>

      {/* top row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember imageSrc={dummy} name="Noyal Shaji" role="Co-President" />
        <TeamMember imageSrc={dummy} name="Meenal Janjua" role="Co-President" />
      </div>

      {/* second row */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12">
        <TeamMember imageSrc={dummy} name="Emily Goh" role="Secretary" />
        <TeamMember imageSrc={dummy} name="Iris Dautriat" role="Treasurer" />
        <TeamMember
          imageSrc={dummy}
          name="Amy Wang"
          role="Vice President of Internals"
        />
        <TeamMember
          imageSrc={dummy}
          name="Jessica Tran"
          role="Vice President of Externals"
        />
        <TeamMember
          imageSrc={dummy}
          name="Harish Varathan"
          role="Vice President of Projects"
        />
        <TeamMember
          imageSrc={dummy}
          name="Olivia Vu"
          role="Vice President of Projects"
        />
      </div>

      {/* dashed section seperator line */}
      <div
        style={{
          marginTop: '2.5rem',
          height: '5px',
          backgroundImage:
            'repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)',
          width: '92%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* director profiles */}
      <h3
        style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          marginTop: '3rem',
        }}
      >
        DIRECTORS
      </h3>

      {/* prockets row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember
          imageSrc={dummy}
          name="Felix Mathew"
          role="Prockets Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Guntas Sandhu"
          role="Prockets Director"
        />
      </div>

      {/* R&D row - 3 members */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12">
        <TeamMember
          imageSrc={dummy}
          name="Tharshan Indrakumar"
          role="R&D Director"
        />
        <TeamMember imageSrc={dummy} name="Ethan Khisa" role="R&D Director" />
        <TeamMember imageSrc={dummy} name="Abrar Hossain" role="R&D Director" />
      </div>

      {/* plate2plate row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember
          imageSrc={dummy}
          name="Chahek Dawani"
          role="plate2plate Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Martin Abdou"
          role="plate2plate Director"
        />
      </div>

      {/* careers row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember
          imageSrc={dummy}
          name="Henry Huang"
          role="Careers Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Samaira Sehgal"
          role="Careers Director"
        />
      </div>

      {/* marketing directors - 3 members */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12">
        <TeamMember
          imageSrc={dummy}
          name="Arthi Kathiravelupillai"
          role="Marketing Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Kate Weekes"
          role="Marketing Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Riddhi Kulkarni"
          role="Marketing Director"
        />
      </div>

      {/* sponsorships row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember
          imageSrc={dummy}
          name="Hemansh Nayampalli"
          role="Sponsorships Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Nathan Chung"
          role="Sponsorships Director"
        />
      </div>

      {/* hr row - 3 members */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12">
        <TeamMember imageSrc={dummy} name="Tej Baveja" role="HR Director" />
        <TeamMember imageSrc={dummy} name="Nikhil Sawant" role="HR Director" />
        <TeamMember
          imageSrc={dummy}
          name="Anushka Palayanur"
          role="HR Director"
        />
      </div>

      {/* IT row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember imageSrc={dummy} name="Piyush Jha" role="IT Director" />
        <TeamMember imageSrc={dummy} name="Ethan Richard" role="IT Director" />
      </div>

      {/* socials row */}
      <div className="mx-auto mt-8 grid max-w-fit grid-cols-1 place-items-center gap-8 px-4 sm:grid-cols-2 sm:gap-12 md:gap-20">
        <TeamMember
          imageSrc={dummy}
          name="Aditya Bavigadda"
          role="Social Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Allison Chan"
          role="Social Director"
        />
      </div>

      {/* dashed section seperator line */}
      <div
        style={{
          marginTop: '2.5rem',
          height: '5px',
          backgroundImage:
            'repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)',
          width: '92%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* subcomittee  profile heading */}
      <h3 className="mt-12 text-[2rem] font-bold md:text-[2.4rem]">
        {' '}
        SUBCOMMITTEES (Coming Soon)
      </h3>

      {/* subcom team list*/}
      {/* prockets team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Prockets Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* R&D team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          R&D Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* plate2plate team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          plate2plate Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* careers team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Careers Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* spons team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Sponsorships Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* hr team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Human Resources Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* it team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Information Technology Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* marketing team */}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Marketing Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>

      {/* socials team*/}
      <div>
        <h4
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Socials Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
          -
        </div>
      </div>
    </>
  );
}
