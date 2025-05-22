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

      {/* dashed line */}
      <div
        style={{
          marginTop: '2.5rem',
          height: '5px',
          backgroundImage:
            'repeating-linear-gradient(to right, #FFD700, #FFD700 40px, transparent 40px, transparent 80px)',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    </div>
  );
}
