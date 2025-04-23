import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like the page you are looking for doesn’t exist.</p>
      <Link href="/">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Go Home
        </button>
      </Link>
    </div>
  );
}
