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
        <TeamMember imageSrc={dummy} name="Iris Martin" role="Secretary" />
        <TeamMember imageSrc={dummy} name="Iqtidar Rahman" role="Treasurer" />
        <TeamMember
          imageSrc={dummy}
          name="Brendan Huynh"
          role="Vice President of Internals"
        />
        <TeamMember
          imageSrc={dummy}
          name="Alice Khau"
          role="Vice President of Externals"
        />
        <TeamMember
          imageSrc={dummy}
          name="Rifah Riyadh"
          role="Vice President of Projects"
        />
        <TeamMember
          imageSrc={dummy}
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
          name="Olivia Vu"
          role="Prockets Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Saaini Balakrishna"
          role="Prockets Director"
        />
      </div>

      {/* tech4impact row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Aryan Thukral"
          role="Tech4Impact Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Noyal Shaji"
          role="Tech4Impact Director"
        />
      </div>

      {/* plate2plate row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Karen Huo"
          role="plate2plate Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Jennifer Yu"
          role="plate2plate Director"
        />
      </div>

      {/* careers row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Jayden Truong"
          role="Careers Director"
        />
        <TeamMember imageSrc={dummy} name="Emily Goh" role="Careers Director" />
      </div>

      {/* sponsorships and multimedia row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Meenal Janjua"
          role="Sponsorships Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Zainab Atif"
          role="Multimedia Director"
        />
      </div>

      {/* hr row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Fleur Randerath"
          role="HR Director"
        />
        <TeamMember imageSrc={dummy} name="Justin Bu" role="HR Director" />
      </div>

      {/* it row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember imageSrc={dummy} name="Amy Wang" role="IT Director" />
        <TeamMember imageSrc={dummy} name="Iris Dautriat" role="IT Director" />
      </div>

      {/* marketing row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
          name="Henry Tat"
          role="Marketing Director"
        />
        <TeamMember
          imageSrc={dummy}
          name="Jessica Tran"
          role="Marketing Director"
        />
      </div>

      {/* socials row */}
      <div className="sm:gap-30 mx-auto mt-8 grid w-fit grid-cols-1 gap-10 sm:grid-cols-2 md:gap-60">
        <TeamMember
          imageSrc={dummy}
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
        SUBCOMMITTEES{' '}
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
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Tech4Impact Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
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
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Human Resources Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
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
          style={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            marginTop: '2rem',
          }}
        >
          Multimedia Team
        </h4>
        <div className="mt-4 flex justify-center gap-[2rem] sm:gap-[5rem]">
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
  );
}
