import { Metadata } from 'next';
import styles from './testimonios.module.css';

export const metadata: Metadata = {
  title: 'Testimonios de Clientes | Alquipos',
  description: 'Descubre las experiencias de nuestros clientes con los servicios de alquiler de equipos de Alquipos.',
  openGraph: {
    title: 'Testimonios de Clientes | Alquipos',
    description: 'Descubre las experiencias de nuestros clientes con los servicios de alquiler de equipos de Alquipos.',
    type: 'website',
  },
};

export default function TestimoniosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.mainLayout}>
      {children}
    </main>
  );
} 