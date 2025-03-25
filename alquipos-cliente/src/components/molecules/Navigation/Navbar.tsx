'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAVIGATION, ROUTES } from '@/constants/routes';
import { useApp } from '@/context/AppContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { state, logout } = useApp();
  const { isAuthenticated } = state;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={ROUTES.HOME} className={styles.logo}>
          <span className={styles.logoText}>Alquipos</span>
        </Link>

        <button 
          className={styles.menuButton}
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
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.authButtons}>
            {isAuthenticated ? (
              <>
                <Link href={ROUTES.DASHBOARD} className={styles.dashboardLink}>
                  Panel
                </Link>
                <button 
                  className={styles.logoutButton}
                  onClick={() => logout()}
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link href={ROUTES.LOGIN} className={styles.loginLink}>
                  Iniciar Sesión
                </Link>
                <Link href={ROUTES.REGISTER} className={styles.registerLink}>
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