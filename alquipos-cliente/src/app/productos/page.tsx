'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/mock/products';
import styles from './productos.module.css';
import imagen3 from '@/assets/images/3.jpg';

// Utilizar imágenes de construcción de dominio público/gratuitas
const backgroundImages = {
  hero: imagen3.src,
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png"
};

// Usar esta imagen para todas las categorías
const getCategoryImage = (category: any) => {
  return imagen3.src;
};

export default function ProductosPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    categories: false,
    featured: false,
    info: false
  });

  useEffect(() => {
    // Hacer visible la sección de categorías después de cargar la página
    setTimeout(() => {
      setVisibleSections(prev => ({ ...prev, categories: true }));
    }, 300);

    // Configurar la detección de scroll para animar las secciones
    const handleScroll = () => {
      const featuredSection = document.querySelector('#featuredSection');
      const infoSection = document.querySelector('#infoSection');
      
      if (featuredSection) {
        const featuredSectionPosition = featuredSection.getBoundingClientRect().top;
        if (featuredSectionPosition < window.innerHeight * 0.75 && !visibleSections.featured) {
          setVisibleSections(prev => ({ ...prev, featured: true }));
        }
      }
      
      if (infoSection) {
        const infoSectionPosition = infoSection.getBoundingClientRect().top;
        if (infoSectionPosition < window.innerHeight * 0.75 && !visibleSections.info) {
          setVisibleSections(prev => ({ ...prev, info: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez para comprobar si alguna sección ya es visible sin scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  return (
    <main className={styles.main}>
      <div className={styles.heroSection} style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.9)), url(${backgroundImages.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className={styles.heroContent}>
          <h1>Nuestros Equipos y Maquinarias</h1>
          <p>
            Descubra nuestra amplia gama de equipos de construcción disponibles para alquiler.
            Ofrecemos soluciones para todo tipo de proyectos, desde pequeñas reformas hasta grandes obras.
          </p>
        </div>
      </div>

      <section className={`${styles.categoriesSection} ${visibleSections.categories ? styles.visible : ''}`}>
        <h2>Categorías de Productos</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link 
              href={`/productos/categoria/${category.slug}`} 
              key={category.id}
              className={styles.categoryCard}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className={styles.categoryImageContainer}>
                <Image 
                  src={getCategoryImage(category)}
                  alt={category.name}
                  width={400}
                  height={300}
                  className={styles.categoryImage}
                />
                {hoveredCategory === category.id && (
                  <div className={styles.categoryOverlay}>
                    <p>{category.description}</p>
                    <span className={styles.viewButton}>Ver productos</span>
                  </div>
                )}
              </div>
              <h3 className={styles.categoryTitle}>
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section id="featuredSection" className={`${styles.featuredSection} ${visibleSections.featured ? styles.visible : ''}`}
        style={{
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.95), rgba(17, 17, 17, 0.95)), url(${backgroundImages.pattern})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }}
      >
        <h2>Productos Destacados</h2>
        <p>Nuestros equipos más solicitados con disponibilidad inmediata</p>
        <div className={styles.callToAction}>
          <Link href="/productos/todos" className={styles.primaryButton}>
            Ver todos los productos
          </Link>
        </div>
      </section>

      <section id="infoSection" className={`${styles.infoSection} ${visibleSections.info ? styles.visible : ''}`}>
        <div className={styles.infoCard}>
          <h3>Asesoramiento Personalizado</h3>
          <p>Nuestro equipo técnico te ayudará a elegir el equipo más adecuado para tu proyecto.</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Mantenimiento Incluido</h3>
          <p>Todos nuestros equipos incluyen mantenimiento preventivo durante el período de alquiler.</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Entrega y Recogida</h3>
          <p>Servicio de transporte para entrega y recogida de equipos en obra.</p>
        </div>
      </section>
    </main>
  );
} 