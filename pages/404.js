import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '0 2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404 - Página no encontrada</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        href="/"
        style={{
          display: 'inline-block',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.25rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
} 