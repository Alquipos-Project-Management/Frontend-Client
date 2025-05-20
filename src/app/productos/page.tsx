'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './productos.module.css';
import imagen3 from '@/assets/images/3.jpg';

// Define the Category interface based on the API response
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  // Add other relevant fields if needed
}

// Utilizar imágenes de construcción de dominio público/gratuitas
const backgroundImages = {
  hero: imagen3.src,
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png"
};

export default function ProductosPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    categories: false,
    featured: false,
    info: false
  });
  // Add state for categories, loading, and error
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories from Supabase
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error("Supabase URL or Anon Key is not configured in environment variables.");
        }

        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_categories`, {
          method: 'POST', // Assuming POST based on rpc call, adjust if needed
          headers: {
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${supabaseAnonKey}`,
            'Content-Type': 'application/json'
          }
          // Add body if required by the RPC function
          // body: JSON.stringify({ /* parameters if any */ })
        });

        if (!response.ok) {
           const errorData = await response.json();
           throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Adjust to access the array nested under the 'data' key in the response
        setCategories(data && data.data ? data.data : []);

      } catch (err: any) {
        console.error("Failed to fetch categories:", err);
        setError(err.message || "Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    // Make visible the section of categories after loading is finished
    // The rendering logic below will handle showing loading/error/empty states
    if (!loading) { // Check only for loading completion
       setTimeout(() => {
         setVisibleSections(prev => ({ ...prev, categories: true }));
       }, 300); // Keep delay or adjust as needed
    }

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
  }, [visibleSections, loading, categories.length]); // Add loading and categories.length dependencies

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
        {loading && <p>Loading categories...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
          <div className={styles.categoriesGrid}>
            {categories
              .filter(category => category.is_active) // Filter for active categories
              .map((category) => (
              <Link
                href={`/productos/categoria/${category.slug}`} // Use dynamic slug
                key={category.id} // Use dynamic id
                className={styles.categoryCard}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={imagen3.src} // Use static image for now
                    alt={category.name} // Use dynamic name
                    width={400}
                    height={300}
                    className={styles.categoryImage}
                  />
                  {hoveredCategory === category.id && (
                    <div className={styles.categoryOverlay}>
                      <p>{category.description}</p> {/* Use dynamic description */}
                      <span className={styles.viewButton}>Ver productos</span>
                    </div>
                  )}
                </div>
                <h3 className={styles.categoryTitle}>
                  {category.name} {/* Use dynamic name */}
                </h3>
              </Link>
            ))}
          </div>
        )}
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