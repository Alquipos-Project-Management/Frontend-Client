'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './noticias.module.css';

// Example news data - this would come from your API/CMS in production
const newsItems = [
  {
    id: 1,
    title: 'Nueva Excavadora CAT 320',
    description: 'Ampliamos nuestra flota con la última excavadora CAT 320, ofreciendo mayor eficiencia y tecnología avanzada para sus proyectos. Esta adquisición representa un paso importante en nuestra misión de proporcionar equipos de primera clase para satisfacer las necesidades de nuestros clientes. La CAT 320 viene equipada con las últimas innovaciones en tecnología de construcción.',
    date: '15 Marzo 2024',
    category: 'Nuevo Equipo',
    imageUrl: '/excavator.jpg' // Replace with actual image path
  },
  {
    id: 2,
    title: 'Proyecto Exitoso: Construcción Centro Comercial',
    description: 'Completamos exitosamente el suministro de equipos para la construcción del nuevo centro comercial en San José. Este proyecto emblemático demuestra nuestra capacidad para manejar proyectos de gran escala y nuestra dedicación a proporcionar soluciones integrales de equipamiento para construcciones comerciales.',
    date: '10 Marzo 2024',
    category: 'Proyectos',
    imageUrl: '/mall.jpg' // Replace with actual image path
  },
  {
    id: 3,
    title: 'Certificación ISO 9001:2015',
    description: 'Nos enorgullece anunciar que hemos obtenido la certificación ISO 9001:2015, reafirmando nuestro compromiso con la calidad. Esta certificación valida nuestros procesos de gestión de calidad y demuestra nuestro compromiso continuo con la excelencia en el servicio.',
    date: '5 Marzo 2024',
    category: 'Logros',
    imageUrl: '/certification.jpg' // Replace with actual image path
  },
  {
    id: 4,
    title: 'Nuevos Montacargas Toyota',
    description: 'Incorporamos a nuestra flota 5 nuevos montacargas Toyota de última generación para satisfacer la creciente demanda. Estos equipos cuentan con características avanzadas de seguridad y eficiencia, permitiéndonos ofrecer soluciones más efectivas para las necesidades de manejo de materiales de nuestros clientes.',
    date: '1 Marzo 2024',
    category: 'Nuevo Equipo',
    imageUrl: '/forklift.jpg' // Replace with actual image path
  }
];

export default function NoticiasPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Noticias y Novedades</h1>
          <span className={styles.badge}>Últimas Actualizaciones</span>
          <p className={styles.subtitle}>
            Mantente informado sobre nuestros nuevos equipos, proyectos exitosos y logros más recientes
          </p>
        </div>
        
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className={`${styles.newsCard} ${expandedId === item.id ? styles.expanded : ''}`}
              onClick={() => toggleExpand(item.id)}
            >
              <div className={styles.newsImageContainer}>
                <div className={styles.categoryBadge}>{item.category}</div>
                <div className={styles.imageWrapper}>
                  {/* Temporarily using a colored div until you add actual images */}
                  <div className={styles.tempImage} />
                </div>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>{item.date}</div>
                <h2 className={styles.newsTitle}>{item.title}</h2>
                <p className={styles.newsDescription}>
                  {expandedId === item.id ? item.description : `${item.description.slice(0, 100)}...`}
                </p>
                {expandedId === item.id && (
                  <div className={styles.contactSection}>
                    <a href="/contact" className={styles.contactButton}>
                      Contáctenos
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 