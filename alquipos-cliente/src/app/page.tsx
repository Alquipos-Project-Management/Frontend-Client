'use client';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '@/components/molecules/Carousel/HeroCarousel';
import BrandSlider from '@/components/molecules/BrandSlider/BrandSlider';
import { heroSlides } from '@/mock/carouselData';
import { brands } from '@/mock/brandsData';
import styles from './page.module.css';

// Datos de prueba para las secciones
const categories = [
  {
    id: 'andamios',
    name: 'Andamios',
    description: 'Andamios certificados para todo tipo de construcción',
    image: '/images/categories/andamios.jpg',
  },
  {
    id: 'maquinaria',
    name: 'Maquinaria',
    description: 'Equipos y maquinaria pesada para construcción',
    image: '/images/categories/maquinaria.jpg',
  },
  {
    id: 'herramientas',
    name: 'Herramientas',
    description: 'Herramientas profesionales para cada trabajo',
    image: '/images/categories/herramientas.jpg',
  },
];

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
    title: 'Equipos certificados',
    description: 'Todos nuestros equipos cumplen con las normativas de seguridad y calidad.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Entrega rápida',
    description: 'Servicio de entrega en obra en menos de 24 horas en la mayoría de ubicaciones.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: 'Asesoría técnica',
    description: 'Equipo de profesionales para asesorarle en la elección de los equipos adecuados.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Precios competitivos',
    description: 'Ofrecemos las mejores tarifas del mercado con descuentos por volumen o plazo.'
  }
];

export default function Home() {
  // Simular carga de imágenes para el carrusel
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  
  // Referencias para animaciones al hacer scroll
  const categoriesRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const brandsRef = useRef<HTMLElement>(null);
  
  // Efecto para simular la carga de imágenes
  useEffect(() => {
    // En un caso real, aquí se cargarían las imágenes previamente
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Control de visibilidad del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setNavbarVisible(visible);
      
      // Aplicar clase para ocultar/mostrar navbar
      const navbar = document.querySelector('[class^="Navbar_navbar"]') as HTMLElement;
      if (navbar) {
        navbar.classList.toggle('Navbar_navBarHidden', !visible);
      }
      
      // Animar secciones al hacer scroll
      const sections = [
        { ref: categoriesRef, className: styles.animateSection },
        { ref: benefitsRef, className: styles.animateSection },
        { ref: ctaRef, className: styles.animateSection },
        { ref: brandsRef, className: styles.animateSection }
      ];
      
      sections.forEach(({ ref, className }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          
          if (isVisible) {
            ref.current.classList.add(className);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <main className={styles.main}>
      {/* Hero Section con Carrusel */}
      <section className={styles.heroSection}>
        {imagesLoaded ? (
          <HeroCarousel slides={heroSlides} />
        ) : (
          <div className={styles.carouselPlaceholder}>
            <div className={styles.placeholderContent}>
              <span className={styles.loader}></span>
            </div>
          </div>
        )}
      </section>

      {/* Sección de Categorías */}
      <section ref={categoriesRef} className={`${styles.categoriesSection} ${styles.sectionToAnimate}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nuestros Equipos</h2>
            <p className={styles.sectionSubtitle}>
              Contamos con una amplia variedad de equipos para la construcción, todos en excelente estado y listos para alquilar.
            </p>
          </div>
          
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link 
                href={`/equipment?category=${category.id}`} 
                key={category.id}
                className={styles.categoryCard}
              >
                <div className={styles.categoryImageContainer}>
                  <div className={styles.categoryImage}>
                    {/* En producción, reemplazar con imágenes reales */}
                    <div className={styles.imagePlaceholder} style={{ backgroundColor: '#f0f0f0' }}>
                      {category.name[0]}
                    </div>
                  </div>
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section ref={benefitsRef} className={`${styles.benefitsSection} ${styles.sectionToAnimate}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>¿Por qué elegirnos?</h2>
            <p className={styles.sectionSubtitle}>
              En Alquipos ofrecemos soluciones profesionales con equipos de alta calidad y servicio personalizado.
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div 
                className={`${styles.benefitCard} ${styles.fadeInItem}`} 
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.benefitIconContainer}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción (CTA) */}
      <section ref={ctaRef} className={`${styles.ctaSection} ${styles.sectionToAnimate}`}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Listo para comenzar su proyecto?</h2>
            <p className={styles.ctaDescription}>
              Contáctenos hoy mismo para obtener una cotización personalizada para su proyecto.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaPrimaryButton}>
                Solicitar cotización
              </Link>
              <Link href="/equipment" className={styles.ctaSecondaryButton}>
                Ver equipos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Marcas */}
      <section ref={brandsRef} className={`${styles.brandsSection} ${styles.sectionToAnimate}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trabajamos con las Mejores Marcas</h2>
            <p className={styles.sectionSubtitle}>
              Ofrecemos equipos de las marcas más reconocidas y confiables del mercado
            </p>
          </div>
          
          <BrandSlider brands={brands} />
        </div>
      </section>
    </main>
  );
}
