type TeamMemberProps = {
  imageSrc: string;
  name: string;
  role: string;
};

function TeamMember({ imageSrc, name, role }: TeamMemberProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          backgroundColor: '#ddd',
          border: '12px solid #FFC107',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <img
          src={imageSrc}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
        <div style={{ marginTop: '0.5rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{name}</div>
        <div style={{ fontSize: '1rem' }}>{role}</div>
      </div>
    </div>
  );
}


export default function OurTeam() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Meet the Team</h2>
      <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
        The team making the magic happen.
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* team photo */}
        <img
          src="src/images/enactus_board_cropped.jpg"
          alt="team-photo"
          style={{
            borderRadius: '1rem',
            maxWidth: '100%',
            height: 'auto',
            width: '600px'
          }}
        />
      </div>

      {/* 2025 button */}
      <div style={{ marginTop: '2rem' }}>
        <button
          style={{
            backgroundColor: '#FFC107',
            color: '#000',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.6rem 2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          2025
        </button>
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
          marginRight: 'auto'
        }}
      />
  
    {/* STEER profiles */}
    <h3 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginTop: '3rem' }}>STEER</h3>

    {/* top row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/amrutha.jpg" name="Amrutha Sivaranjan" role="Co-President" />
      <TeamMember imageSrc="src/images/teamPhotos/benjamin.jpg" name="Benjamin Liu" role="Co-President" />
    </div>

    {/* second row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/sehej.jpg" name="Sehej Panesar" role="Secretary" />
      <TeamMember imageSrc="src/images/teamPhotos/iqtidar.jpg" name="Iqtidar Rahman" role="Treasurer" />
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Brendan Huynh" role="Vice President of Internals" />
    </div>

    {/* third row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/alice.jpg" name="Alice Khau" role="Vice President of Externals" />
      <TeamMember imageSrc="src/images/teamPhotos/rifah.jpg" name="Rifah Riyadh" role="Vice President of Projects" />
      <TeamMember imageSrc="src/images/teamPhotos/akanksha.jpg" name="Akanksha Sood" role="Vice President of Projects" />
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
        marginRight: 'auto'
      }}
    />

    {/* director profiles */}
    <h3 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginTop: '3rem' }}>DIRECTORS</h3>

    {/* prockets row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/olivia.jpg" name="Olivia Vu" role="Prockets Director" />
      <TeamMember imageSrc="src/images/teamPhotos/saaini.jpg" name="Saaini Balakrishna" role="Prockets Director" />
    </div>

    {/* tech4impact row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/aryan.jpg" name="Aryan Thukral" role="Tech4Impact Director" />
      <TeamMember imageSrc="src/images/teamPhotos/noyal.jpg" name="Noyal Shaji" role="Tech4Impact Director" />
    </div>

    {/* shareplate row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/karen.jpg" name="Karen Huo" role="SharePlate Director" />
      <TeamMember imageSrc="src/images/teamPhotos/jennifer.jpg" name="Jennifer Yu" role="SharePlate Director" />
    </div>

    {/* careers row */} 
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Jayden Truong" role="Careers Director" />
      <TeamMember imageSrc="src/images/teamPhotos/emily.jpg" name="Emily Goh" role="Careers Director" />
    </div>
  
    {/* sponsorships row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/sarah.jpg" name="Sarah Zhong" role="Sponsorships Director" />
      <TeamMember imageSrc="src/images/teamPhotos/meenal.jpg" name="Meenal Janjua" role="Sponsorships Director" />
    </div>

    {/* hr row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/fleur.jpg" name="Fleur Randerath" role="HR Director" />
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Justin Bu" role="HR Director" />
    </div>

    {/* it row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Amy Wang" role="IT   Director" />
      <TeamMember imageSrc="src/images/teamPhotos/iris.jpg" name="Iris Dautriat" role="IT Director" />
    </div>

    {/* marketing row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/henry.jpg" name="Henry Tat" role="Marketing Director" />
      <TeamMember imageSrc="src/images/teamPhotos/jessica.jpg" name="Jessica Tran" role="Marketing Director" />
    </div>

    {/* multimedia row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/zainab.jpg" name="Zainab Atif" role="Multimedia Director" />
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Amaya Polutele" role="Multimedia Director" />
    </div>

    {/* socials row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/teamPhotos/maanya.jpg" name="Maanya Gawande" role="Social Director" />
      <TeamMember imageSrc="src/images/teamPhotos/dummy.jpg" name="Saarthak Aggarwal" role="Social Director" />
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
        marginRight: 'auto'
      }}
    />

      {/* subcomittee  profile heading */}
      <h3 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginTop: '3rem' }}>SUBCOMMITTEES</h3>

      {/* subcom team list*/}
        {/* prockets team */}
        <div>
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Prockets Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Tech4Impact Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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

        {/* shareplate team */}
        <div>
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>SharePlate Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Careers Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Sponsorships Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Human Resources Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
            <div>
              <div>Aaryan Khan</div>
              <div>Heidi Ho</div>
            </div>
            <div>
              <div>Kirk Foo</div>
              <div>Manya Garg</div>
            </div>
            <div>
              <div>Mohnish Puvvena</div>
              <div>Rimsha Laiqa</div>
            </div>
          </div>
        </div>

        {/* it team */}
        <div>
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Information Technology Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Marketing Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
            <div>
              <div>Aaron Tran</div>
              <div>Amon Saito</div>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Marketing Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
          <h4 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginTop: '2rem'  }}>Marketing Team</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', marginTop: '1rem' }}>
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
  </div>
  );
}