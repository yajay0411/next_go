'use client';
import Navbar from '@/components/common/Navbar/Navbar';
export default function Professionals() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Professionals</h1>
        <p>
          Welcome to the Professionals section. This page will contain information about healthcare
          professionals.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
