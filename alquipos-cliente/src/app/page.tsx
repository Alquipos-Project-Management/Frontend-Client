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
    specs: [
      { icon: 'altura', text: 'Hasta 30m' },
      { icon: 'capacidad', text: '300kg/m²' }
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    )
  },
  {
    id: 'maquinaria',
    name: 'Maquinaria',
    description: 'Equipos y maquinaria pesada para construcción',
    image: '/images/categories/maquinaria.jpg',
    specs: [
      { icon: 'potencia', text: '180-300HP' },
      { icon: 'peso', text: '20-30t' }
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
        <path d="M4 11V4H17L22 9V11"/>
        <path d="M14 4V9H21.5"/>
        <rect x="3" y="11" width="17" height="8" rx="1" />
        <circle cx="7.5" cy="19" r="2.5" />
        <circle cx="17.5" cy="19" r="2.5" />
      </svg>
    )
  },
  {
    id: 'herramientas',
    name: 'Herramientas',
    description: 'Herramientas profesionales para cada trabajo',
    image: '/images/categories/herramientas.jpg',
    specs: [
      { icon: 'energia', text: 'Eléctricas' },
      { icon: 'garantia', text: '12 meses' }
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
];

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92771" />
        <path d="M19 7L22 7L22 10" />
        <rect x="2" y="2" width="20" height="20" rx="2" />
      </svg>
    ),
    title: 'Equipos certificados',
    description: 'Todos nuestros equipos cumplen con las normativas de seguridad y calidad.',
    spec: 'ISO 9001'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path d="M8 19L5 17V7L8 5L12 7L16 5L19 7V17L16 19L12 17L8 19Z" />
        <path d="M12 7V17" />
        <path d="M16 5V19" />
        <path d="M8 5V19" />
      </svg>
    ),
    title: 'Entrega rápida',
    description: 'Servicio de entrega en obra en menos de 24 horas en la mayoría de ubicaciones.',
    spec: '24h'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8V12L14 14" />
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" />
      </svg>
    ),
    title: 'Asesoría técnica',
    description: 'Equipo de profesionales para asesorarle en la elección de los equipos adecuados.',
    spec: 'Expertos'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}>
        <path d="M12 2V5" />
        <path d="M12 19V22" />
        <path d="M4.93 4.93L7.05 7.05" />
        <path d="M16.95 16.95L19.07 19.07" />
        <path d="M2 12H5" />
        <path d="M19 12H22" />
        <path d="M4.93 19.07L7.05 16.95" />
        <path d="M16.95 7.05L19.07 4.93" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Precios competitivos',
    description: 'Ofrecemos las mejores tarifas del mercado con descuentos por volumen o plazo.',
    spec: 'Hasta -20%'
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
                    {/* Reemplazar el placeholder con el icono de construcción */}
                    {category.icon}
                  </div>
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.name}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  {/* Mostrar especificaciones técnicas */}
                  <div className={styles.specsList}>
                    {category.specs.map((spec, index) => (
                      <span key={index} className={styles.specItem}>
                        <svg className={styles.specIcon} viewBox="0 0 24 24" width="12" height="12">
                          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
                          <path d="M7 13l3 3 7-7" stroke="currentColor" fill="none" />
                        </svg>
                        {spec.text}
                      </span>
                    ))}
                  </div>
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
                /* Añadir atributo para mostrar especificación técnica */
                data-spec={benefit.spec}
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
            <h2 className={styles.sectionTitle}>Trabajamos con las <span>Mejores Marcas</span></h2>
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
