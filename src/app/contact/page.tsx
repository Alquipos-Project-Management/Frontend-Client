'use client';

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/molecules/ContactForm';
import { SocialMediaBar } from '@/components/molecules/SocialMediaBar/SocialMediaBar';
import styles from './contact.module.css';

const fallbackData = {
  header: {
    content: {
      title: 'Póngase en Contacto con Nosotros',
      subtitle: 'Estamos aquí para ayudarle con sus necesidades de alquiler de equipos.',
    }
  },
  info: {
    content: {
      title: 'Información de Contacto',
      address: 'Calle Principal #123, Ciudad',
      phone: '+57 300 123 4567',
      email: 'info@alquipos.com',
      businessHours: {
        weekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
        saturday: 'Sábado: 8:00 AM - 12:00 PM'
      }
    }
  },
  social: {
    content: {
      title: 'Síganos en Redes Sociales',
      socialMedia: [
        { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
        { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
      ]
    }
  }
};

export default function ContactPage() {
  const [pageData, setPageData] = useState(fallbackData);
  const [isLoading, setIsLoading] = useState(true);
  
  // Destructure directly from pageData
  const { header, info, social } = pageData;

  useEffect(() => {
    const loadContactData = async () => {
      try {
        // This is where we would normally fetch data
        // For now, just use fallback data and skip actual fetching
        // const data = await contactService.getContactPageData();
        // setPageData(data);
      } catch (error) {
        console.error('Error loading contact data:', error);
        // We're already using fallback data as the initial state
      } finally {
        setIsLoading(false);
      }
    };

    loadContactData();
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            {header.content.title ? 
              <>
                {header.content.title.split(' ').slice(0, -2).join(' ')} <span>{header.content.title.split(' ').slice(-2).join(' ')}</span>
              </> : 
              'Contacto'
            }
          </h1>
          <p className={styles.subtitle}>
            {header.content.subtitle}
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>
              Envíenos un mensaje
            </h2>
            <ContactForm />
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>
                {info.content.title}
              </h2>
              
              <div>
                <h3 className={styles.infoLabel}>Dirección</h3>
                <p className={styles.infoValue}>{info.content.address}</p>

                <h3 className={styles.infoLabel}>Teléfono</h3>
                <p className={styles.infoValue}>
                  <a href={`tel:${info.content.phone}`} className="text-gray-800 hover:text-gray-600 transition-colors">
                    {info.content.phone}
                  </a>
                </p>

                <h3 className={styles.infoLabel}>Correo Electrónico</h3>
                <p className={styles.infoValue}>
                  <a href={`mailto:${info.content.email}`} className="text-gray-800 hover:text-gray-600 transition-colors">
                    {info.content.email}
                  </a>
                </p>

                <h3 className={styles.infoLabel}>Horario de Atención</h3>
                <p className={styles.infoValue}>{info.content.businessHours?.weekdays}</p>
                <p className={styles.infoValue}>{info.content.businessHours?.saturday}</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                {social.content.title}
              </h3>
              <SocialMediaBar socialLinks={social.content.socialMedia} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 