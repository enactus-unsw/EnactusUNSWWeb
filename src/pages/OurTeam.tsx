//Importing this way so vite bundle it up for deployment
import useDocumentTitle from '@src/hooks/use-document-title';

import { useState } from 'react';

import { Team2025 } from '../components/team/TeamYear2025';

const teamPhoto = '/images/enactus_board_cropped.jpg';

export default function OurTeam() {
  const [selectedTeamYear, setSelectedTeamYear] = useState('2026');

  useDocumentTitle('Team | Enactus UNSW');

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Meet the Team</h2>
      <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
        The team making the magic happen.
      </p>
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* team photo */}
        <img
          src={teamPhoto}
          alt="team-photo"
          className="mb-10 h-auto w-[700px] max-w-full rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div
        style={{
          marginTop: '2rem',
          gap: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() => setSelectedTeamYear('2026')}
          style={{
            backgroundColor:
              selectedTeamYear === '2026' ? '#FFC107' : 'transparent',
            color: '#000',
            border: '2px solid #FFC107',
            borderRadius: '9999px',
            padding: '0.6rem 2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          2026
        </button>

        <button
          onClick={() => setSelectedTeamYear('2025')}
          style={{
            backgroundColor:
              selectedTeamYear === '2025' ? '#FFC107' : 'transparent',
            color: '#000',
            border: '2px solid #FFC107',
            borderRadius: '9999px',
            padding: '0.6rem 2rem',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
          marginRight: 'auto',
        }}
      />

      {selectedTeamYear === '2026' ? (
        <div className="mt-12 font-medium">2026 team view coming soon.</div>
      ) : (
        <Team2025 />
      )}
    </div>
  );
}
