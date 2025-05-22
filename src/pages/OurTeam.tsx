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
          width: '22c0px',
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
      <TeamMember imageSrc="src/images/member1.jpg" name="Amrutha Sivaranjan" role="Co-President" />
      <TeamMember imageSrc="src/images/member2.jpg" name="Benjamin Liu" role="Co-President" />
    </div>

    {/* second row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member3.jpg" name="Sehej Panesar" role="Secretary" />
      <TeamMember imageSrc="src/images/member4.jpg" name="Iqtidar Rahman" role="Treasurer" />
      <TeamMember imageSrc="src/images/member5.jpg" name="Brendan Huynh" role="Vice President of Internals" />
    </div>

    {/* third row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member6.jpg" name="Alice Khau" role="Vice President of Externals" />
      <TeamMember imageSrc="src/images/member7.jpg" name="Rifah Riyadh" role="Vice President of Projects" />
      <TeamMember imageSrc="src/images/member8.jpg" name="Akansha Sood" role="Vice President of Projects" />
    </div>

    {/* bottom row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Denton Nguyen" role="Returning Officer" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Melani Gunawardana" role="Returning Officer" />
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

    {/* director profiles */}
    <h3 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginTop: '3rem' }}>DIRECTORS</h3>

    {/* prockets row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Olivia Vu" role="Prockets Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Saaini Balakrishna" role="Prockets Director" />
    </div>

    {/* tech4impact row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Aryan Thukral" role="Tech4Impact Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Noyal Shaji" role="Tech4Impact Director" />
    </div>

    {/* shareplate row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Karen Huo" role="SharePlate Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Jennifer Yu" role="SharePlate Director" />
    </div>

    {/* careers row */} 
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Jayden Truong" role="Careers Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Emily Goh" role="Careers Director" />
    </div>
  
    {/* sponsorships row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Sarah Zhong" role="Sponsorships Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Meenal Janjua" role="Sponsorships Director" />
    </div>

    {/* hr row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Fleur Randerath" role="HR Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Justin Bu" role="HR Director" />
    </div>

    {/* it row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Amy Wang" role="IT Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Iris Dautriat" role="IT Director" />
    </div>

    {/* marketing row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Henry Tat" role="Marketing Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Jessica Tran" role="Marketing Director" />
    </div>

    {/* multimedia row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Zainab Atif" role="Multimedia Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Amaya Polutele" role="Multimedia Director" />
    </div>

    {/* socials row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '14rem', marginTop: '2rem' }}>
      <TeamMember imageSrc="src/images/member9.jpg" name="Maanya Gawande" role="Social Director" />
      <TeamMember imageSrc="src/images/member10.jpg" name="Saarthak Aggarwal" role="Social Director" />
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

      {/* director profiles */}
      <h3 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginTop: '3rem' }}>SUBCOMMITTEES</h3>


  </div>
  );
}