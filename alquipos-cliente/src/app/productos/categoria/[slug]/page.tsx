'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, products } from '@/mock/products';
import styles from './categoria.module.css';
import imagen3 from '@/assets/images/3.jpg';

// Utilizar imágenes de construcción de dominio público/gratuitas
const backgroundImages = {
  hero: "https://images.unsplash.com/photo-1621110628647-b4a64cb6df5e?q=80&w=1920&auto=format&fit=crop",
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png"
};

// Obtener imagen de la categoría
const getCategoryImage = (category: any) => {
  // Usar la imagen 3.jpg para todas las categorías
  return imagen3.src;
};

// Actualizar productos con imágenes de construcción si no tienen imágenes
const getProductImage = (product: any) => {
  // Forzar el uso de imagen3 para todos los productos
  return imagen3.src;
};

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => product.category_id === category?.id);
  
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isRelatedVisible, setIsRelatedVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const relatedSection = document.querySelector('#relatedSection');
      
      if (relatedSection) {
        const relatedSectionPosition = relatedSection.getBoundingClientRect().top;
        if (relatedSectionPosition < window.innerHeight * 0.75 && !isRelatedVisible) {
          setIsRelatedVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez para comprobar si la sección ya es visible sin scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRelatedVisible]);

  if (!category) {
    return (
      <main className={styles.main}>
        <div className={styles.errorContainer}>
          <h1>Categoría no encontrada</h1>
          <p>La categoría que busca no existe.</p>
          <Link href="/productos" className={styles.backButton}>
            Volver a Productos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.heroSection} style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.85), rgba(17, 17, 17, 0.9)), url(${backgroundImages.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className={styles.heroContent}>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <section className={styles.productsSection}>
        <div className={styles.productsHeader}>
          <h2>Productos disponibles</h2>
          <p>{categoryProducts.length} productos encontrados</p>
        </div>

        <div className={styles.productsGrid}>
          {categoryProducts.map((product) => (
            <Link 
              href={`/productos/detalle/${product.slug}`}
              key={product.id}
              className={styles.productCard}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className={styles.productImageContainer}>
                <Image 
                  src={getProductImage(product)}
                  alt={product.name}
                  width={400}
                  height={300}
                  className={styles.productImage}
                />
                {hoveredProduct === product.id && (
                  <div className={styles.productOverlay}>
                    <div className={styles.productInfo}>
                      <h4>Características:</h4>
                      <ul>
                        {product.attributes && Object.entries(product.attributes).map(([key, value]) => (
                          <li key={key}><strong>{key}:</strong> {value}</li>
                        ))}
                      </ul>
                      <span className={styles.viewButton}>Ver detalles</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>{product.short_description}</p>
                {product.show_price && (
                  <div className={styles.productPrice}>
                    {product.sale_price ? (
                      <>
                        <span className={styles.salePrice}>
                          ${product.sale_price.toLocaleString()} / {product.price_unit}
                        </span>
                        <span className={styles.regularPrice}>
                          ${product.price?.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className={styles.regularPrice}>
                        ${product.price?.toLocaleString()} / {product.price_unit}
                      </span>
                    )}
                  </div>
                )}
                <div className={styles.productMeta}>
                  <span className={styles.availability}>
                    {product.is_available ? 'Disponible' : 'No disponible'}
                  </span>
                  {product.min_rental_period && (
                    <span className={styles.rentalPeriod}>
                      Mín: {product.min_rental_period} {product.rental_period_unit}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="relatedSection" className={`${styles.relatedSection} ${isRelatedVisible ? styles.visible : ''}`}
        style={{
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.95), rgba(17, 17, 17, 0.95)), url(${backgroundImages.pattern})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }}
      >
        <h2>Otras categorías que podrían interesarte</h2>
        <div className={styles.relatedCategories}>
          {categories
            .filter(cat => cat.id !== category.id)
            .slice(0, 2)
            .map(cat => (
              <Link 
                href={`/productos/categoria/${cat.slug}`}
                key={cat.id}
                className={styles.relatedCategoryCard}
              >
                <div className={styles.relatedCategoryImageContainer}>
                  <Image 
                    src={getCategoryImage(cat)}
                    alt={cat.name}
                    width={300}
                    height={200}
                    className={styles.relatedCategoryImage}
                  />
                </div>
                <div className={styles.relatedCategoryContent}>
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
} 