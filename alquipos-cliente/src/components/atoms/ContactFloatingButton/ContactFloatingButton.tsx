'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ContactFloatingButton.module.css';
import ObreroImage from '@/assets/images/obrero.png';

interface ContactFloatingButtonProps {
  phoneNumber: string;
  email: string;
  whatsappMessage?: string;
}

export default function ContactFloatingButton({ 
  phoneNumber, 
  email, 
  whatsappMessage = 'Hola, me gustaría obtener más información sobre sus servicios.'
}: ContactFloatingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Mostrar el botón después de 2 segundos para no ser invasivo inmediatamente
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generar el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  // Generar el enlace de correo
  const emailUrl = `mailto:${email}?subject=Consulta desde el sitio web`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={styles.floatingContactContainer}>
      {/* Botones de contacto que aparecen al hacer clic */}
      <div className={`${styles.contactOptions} ${isOpen ? styles.open : ''}`}>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.contactOption} ${styles.whatsappOption}`}
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>WhatsApp</span>
        </a>
        
        <a 
          href={emailUrl}
          className={`${styles.contactOption} ${styles.emailOption}`}
          aria-label="Contactar por Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Email</span>
        </a>
      </div>
      
      {/* Botón principal con imagen de obrero */}
      <button 
        className={`${styles.mainButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleOpen}
        aria-label="Abrir opciones de contacto"
        title="¿Necesitas ayuda?"
      >
        <div className={styles.constructorIcon}>
          <Image 
            src={ObreroImage} 
            alt="Icono de obrero"
            width={40}
            height={40}
            className={styles.obreroImage}
          />
        </div>
        
        <span className={styles.buttonLabel}>¿Necesitas ayuda?</span>
      </button>
    </div>
  );
} 