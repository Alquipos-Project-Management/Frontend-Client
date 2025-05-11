'use client';

import { useEffect, useRef } from 'react';
import styles from './nosotros.module.css';

export default function Nosotros() {
  const missionRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <header className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Sobre Nosotros</h1>
          <p className={styles.subtitle}>
            Con más de 5 años de experiencia en el sector de la construcción, nos enorgullecemos de ofrecer soluciones integrales y equipos de alta calidad para cada proyecto.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <section ref={missionRef} className={`${styles.missionCard} ${styles.fadeInUp}`}>
            <h2 className={styles.cardTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                <path d="M12 2l3.5 10h7l-6 4.5 2.5 7-7-5-7 5 2.5-7-6-4.5h7z" />
                <line x1="12" y1="2" x2="12" y2="14" />
                <line x1="12" y1="14" x2="16" y2="18" />
              </svg>
              Misión
            </h2>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section ref={visionRef} className={`${styles.visionCard} ${styles.fadeInUp}`}>
            <h2 className={styles.cardTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Visión
            </h2>
            <p className={styles.cardContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section ref={valuesRef} className={`${styles.valuesCard} ${styles.fadeInUp}`}>
            <h2 className={styles.cardTitle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Valores
            </h2>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.469c-1.006 0-1.937-.45-2.536-1.179l-.548-.547z" />
                  </svg>
                  Innovación
                </h3>
                <p className={styles.valueDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Compromiso
                </h3>
                <p className={styles.valueDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.valueIcon}>
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  Excelencia
                </h3>
                <p className={styles.valueDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 