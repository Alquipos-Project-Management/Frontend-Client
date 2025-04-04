'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NAVIGATION, ROUTES } from '@/constants/routes';
import { useApp } from '@/context/AppContext';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user } = useApp();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll cuando menú está abierto en mobile.
    if (document.body) {
      document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    }
  };

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Enlaces de navegación personalizados
  const navLinks = [
    { path: ROUTES.HOME, label: 'Inicio' },
    { path: ROUTES.EQUIPMENT, label: 'Equipos' },
    { path: '/testimonios', label: 'Testimonios' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/noticias', label: 'Noticias' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href={ROUTES.HOME} className={styles.logo}>
          {/* Logo placeholder - reemplazar con imagen real */}
          <div style={{ width: 40, height: 40, backgroundColor: 'var(--primary-100)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: '#333', fontWeight: 'bold' }}>A</span>
          </div>
          <span className={styles.logoText}>Alqui<span>pos</span></span>
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.navLinks}>
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {isAuthenticated && (
              <li>
                <Link 
                  href="/dashboard"
                  className={`${styles.navLink} ${pathname === '/dashboard' ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          
          <div className={styles.callToAction}>
            {isAuthenticated ? (
              <Link href="/dashboard" className={styles.ctaButton} onClick={() => setIsMenuOpen(false)}>
                Mi Cuenta
              </Link>
            ) : (
              <Link href="/contact" className={styles.ctaButton} onClick={() => setIsMenuOpen(false)}>
                Solicitar Cotización
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 