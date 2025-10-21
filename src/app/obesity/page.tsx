'use client';
export default function Obesity() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Obesity</h1>
      <p>
        Welcome to the Obesity section. This page will contain information about obesity management
        and treatment.
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
  );
}
