import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/professionals">
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Professionals
          </button>
        </Link>

        <Link href="/obesity">
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Obesity
          </button>
        </Link>

        <Link href="/metabolic-test">
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Metabolic Test
          </button>
        </Link>

        <Link href="/privacy-policy">
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Privacy Policy
          </button>
        </Link>

        <Link href="/terms-conditions">
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Terms & Conditions
          </button>
        </Link>
      </div>
    </div>
  );
}
