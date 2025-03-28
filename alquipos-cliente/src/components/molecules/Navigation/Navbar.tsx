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
  const { state, logout } = useApp();
  const { isAuthenticated } = state;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll cuando menú está abierto en mobile
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
            {NAVIGATION.MAIN.map((item) => (
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
          </ul>

          <div className={styles.authButtons}>
            {isAuthenticated ? (
              <>
                <Link href={ROUTES.DASHBOARD} className={styles.dashboardLink} onClick={() => setIsMenuOpen(false)}>
                  Panel
                </Link>
                <button 
                  className={styles.logoutButton}
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link href={ROUTES.LOGIN} className={styles.loginLink} onClick={() => setIsMenuOpen(false)}>
                  Iniciar Sesión
                </Link>
                <Link href={ROUTES.REGISTER} className={styles.registerLink} onClick={() => setIsMenuOpen(false)}>
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 