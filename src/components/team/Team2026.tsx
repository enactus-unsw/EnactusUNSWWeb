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
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember imageSrc={dummy} name="Noyal Shaji" role="Co-President" />
        <TeamMember imageSrc={dummy} name="Meenal Janjua" role="Co-President" />
      </div>

      {/* second row */}
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
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
          name="Nathan Chung"
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
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
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
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <TeamMember
          imageSrc={dummy}
          name="Tharshan Indrakumar"
          role="R&D Director"
        />
        <TeamMember imageSrc={dummy} name="Ethan Khisa" role="R&D Director" />
        <TeamMember imageSrc={dummy} name="Abrar Hossain" role="R&D Director" />
      </div>

      {/* plate2plate row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
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
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
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
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
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
      <div className="sm:gap-30 mx-auto mt-8 w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Hemansh Nayampalli"
          role="Sponsorships Director"
        />
        {/* <TeamMember
          imageSrc={dummy}
          name="Nathan Chung"
          role="Sponsorships Director"
        /> */}
      </div>

      {/* hr row - 3 members */}
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        <TeamMember imageSrc={dummy} name="Tej Baveja" role="HR Director" />
        <TeamMember imageSrc={dummy} name="Nikhil Sawant" role="HR Director" />
        <TeamMember
          imageSrc={dummy}
          name="Anushka Palayanur"
          role="HR Director"
        />
      </div>

      {/* IT row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember imageSrc={dummy} name="Piyush Jha" role="IT Director" />
        <TeamMember imageSrc={dummy} name="Ethan Richard" role="IT Director" />
      </div>

      {/* socials row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Aditya Bavigadda"
          role="Socials Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Allison Chan"
          role="Socials Director"
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
        SUBCOMMITTEES
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
          <div>
            <p>Sithula Gamage</p>
            <p>Natsumi Pollock</p>
          </div>
          <div>
            <p>Chandara Oeng</p>
            <p>Kavin Maran</p>
          </div>
          <div>
            <p>Charlotte Rogers</p>
            <p>Ali Ali</p>
          </div>
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
        <div className="mx-auto mt-4 grid w-fit grid-cols-3 gap-x-16 gap-y-2 text-center text-[1.1rem]">
          <div>
            <p>Wareesha Nadeem</p>
            <p>Anton Jusayan</p>
          </div>
          <div>
            <p>Prahalad Kasturi</p>
            <p>Owen Suyko</p>
          </div>
          <div>
            <p>Yim Namatra</p>
            <p>Searith Bajwa</p>
          </div>
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
          <div>
            <p>Kristina Mar</p>
            <p>Pratik Shah</p>
          </div>
          <div>
            <p>Carrie Luo</p>
            <p>Karthik Sunder Raj</p>
          </div>
          <div>
            <p>James Deng</p>
            <p>Habib Ullah</p>
          </div>
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
          <div>
            <p>Stella Kim</p>
            <p>Sophie Chen</p>
          </div>
          <div>
            <p>Jayla Yuen</p>
            <p>James Yang</p>
          </div>
          <div>
            <p>Yolanda Chai</p>
            <p>Gavin Tchong</p>
          </div>
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
          <div>
            <p>Harry Lin</p>
            <p>Diya Chakrapani</p>
          </div>
          <div>
            <p>Leon Lin</p>
            <p>Amigo Wong</p>
          </div>
          <div>
            <p>Sarah So</p>
            <p>Aditi Bhave</p>
          </div>
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
          <div>
            <p>Alen Jowins</p>
            <p>Ethan Woo</p>
          </div>
          <div>
            <p>Cindy Yu</p>
            <p>Aarnav Sheth</p>
          </div>
          <div>
            <p>Janice Joju</p>
            <p>Kusuma Tatineni</p>
          </div>
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
          <div>
            <p>Anish Reddy</p>
            <p>Naina Mathews</p>
          </div>
          <div>
            <p>Anna Jimmy</p>
            <p>Nathaniel Thie</p>
          </div>
          <div>
            <p>Mesha Thakker</p>
            <p>Adi Agarwal</p>
          </div>
          <div>
            <p>Pahal Wasu</p>
            <p>Denise Noel</p>
          </div>
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
          <div>
            <p>Sanya Sehgal</p>
            <p>Sarina Chen</p>
          </div>
          <div>
            <p>Rithika Sivakkumaran</p>
            <p>Aashka Sheth-Patel</p>
          </div>
          <div>
            <p>Mark Su</p>
            <p>Sukrit Mehra</p>
          </div>
        </div>
      </div>
    </>
  );
}
