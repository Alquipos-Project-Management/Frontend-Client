'use client';

import React from 'react';
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

type PageProps = {
  params: { slug: string };
};

export default function CategoryPage({ params }: PageProps) {
  const { slug } = params;
  const category = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => product.category_id === category?.id);

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
            >
              <div className={styles.productImageContainer}>
                <Image 
                  src={getProductImage(product)}
                  alt={product.name}
                  width={400}
                  height={300}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDescription}>{product.short_description}</p>
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

      <section id="relatedSection" className={styles.relatedSection}
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