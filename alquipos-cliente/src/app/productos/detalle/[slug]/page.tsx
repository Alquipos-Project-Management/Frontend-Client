'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/mock/products';
import styles from './detalle.module.css';
import imagen3 from '@/assets/images/3.jpg';
import imagen4 from '@/assets/images/4.jpg';
import imagen5 from '@/assets/images/5.jpg';
import imagen6 from '@/assets/images/6.jpg';
import imagen7 from '@/assets/images/7.jpg';

// Utilizar imágenes de construcción de dominio público/gratuitas
const backgroundImages = {
  hero: "https://images.unsplash.com/photo-1621110628647-b4a64cb6df5e?q=80&w=1920&auto=format&fit=crop",
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png"
};

// Actualizar productos con imágenes de construcción si no tienen imágenes
const getProductImage = (product: any) => {
  if (product.images && product.images.length > 0 && product.images[0].url) {
    return product.images[0].url;
  }
  
  // Usar solo imagen4 para todos los productos
  return imagen4.src;
};

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products.find(prod => prod.slug === slug);
  const category = product ? categories.find(cat => cat.id === product.category_id) : null;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isRelatedVisible, setIsRelatedVisible] = useState(false);

  // Detectar scroll para animar secciones
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.querySelector('#featuresSection');
      const relatedSection = document.querySelector('#relatedSection');
      
      if (featuresSection) {
        const featuresSectionPosition = featuresSection.getBoundingClientRect().top;
        if (featuresSectionPosition < window.innerHeight * 0.75 && !isFeaturesVisible) {
          setIsFeaturesVisible(true);
        }
      }
      
      if (relatedSection) {
        const relatedSectionPosition = relatedSection.getBoundingClientRect().top;
        if (relatedSectionPosition < window.innerHeight * 0.75 && !isRelatedVisible) {
          setIsRelatedVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez para comprobar si alguna sección ya es visible sin scroll
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFeaturesVisible, isRelatedVisible]);

  // Buscar productos relacionados (misma categoría)
  const relatedProducts = product 
    ? products
        .filter(item => item.category_id === product.category_id && item.id !== product.id)
        .slice(0, 3) 
    : [];

  if (!product) {
    return (
      <main className={styles.main}>
        <div className={styles.errorContainer}>
          <h1>Producto no encontrado</h1>
          <p>El producto que busca no existe o ha sido removido.</p>
          <Link href="/productos" className={styles.backButton}>
            Volver a Productos
          </Link>
        </div>
      </main>
    );
  }

  // Organizar imágenes del producto o usar imágenes por defecto
  let productImages = [];
  // Usar siempre imagen4 para garantizar que se vean las imágenes
  productImages = [imagen4.src, imagen4.src, imagen4.src];

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs} style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url(${backgroundImages.pattern})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
      }}>
        <div className={styles.breadcrumbsContainer}>
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/productos">Productos</Link>
          {category && (
            <>
              <span>/</span>
              <Link href={`/productos/categoria/${category.slug}`}>{category.name}</Link>
            </>
          )}
          <span>/</span>
          <span className={styles.currentPage}>{product.name}</span>
        </div>
      </div>

      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.productGallery}>
            <div className={styles.mainImageContainer}>
              <Image 
                src={productImages[selectedImage]}
                alt={product.name}
                width={800}
                height={600}
                className={styles.mainImage}
                priority={true}
              />
            </div>
            {productImages.length > 1 && (
              <div className={styles.thumbnailsContainer}>
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`${styles.thumbnail} ${selectedImage === index ? styles.activeThumbnail : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image 
                      src={image}
                      alt={`${product.name} - imagen ${index + 1}`}
                      width={100}
                      height={75}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.name}</h1>
            
            {category && (
              <div className={styles.productCategory}>
                <Link href={`/productos/categoria/${category.slug}`}>
                  {category.name}
                </Link>
              </div>
            )}
            
            <div className={styles.productShortDescription}>
              <p>{product.description}</p>
            </div>
            
            {product.show_price && (
              <div className={styles.productPricing}>
                <h3>Precio de alquiler</h3>
                <div className={styles.priceContainer}>
                  {product.sale_price ? (
                    <>
                      <span className={styles.salePrice}>
                        ${product.sale_price.toLocaleString()}
                      </span>
                      <span className={`${styles.regularPrice} ${styles.hasDiscount}`}>
                        ${product.price?.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className={styles.regularPrice}>
                      ${product.price?.toLocaleString()}
                    </span>
                  )}
                  <span className={styles.priceUnit}>
                    / {product.price_unit}
                  </span>
                </div>
                
                {product.min_rental_period && (
                  <div className={styles.rentalPeriod}>
                    <span>Período mínimo de alquiler: </span>
                    <strong>{product.min_rental_period} {product.rental_period_unit}</strong>
                  </div>
                )}
              </div>
            )}
            
            <div className={styles.productAvailability}>
              <h3>Disponibilidad</h3>
              <span className={`${styles.availabilityBadge} ${product.is_available ? styles.available : styles.unavailable}`}>
                {product.is_available ? 'Disponible para alquiler' : 'No disponible temporalmente'}
              </span>
            </div>
            
            <div className={styles.productActions}>
              <button className={styles.primaryButton}>
                Solicitar Cotización
              </button>
              <button className={styles.secondaryButton}>
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="featuresSection" className={`${styles.featuresSection} ${isFeaturesVisible ? styles.visible : ''}`}>
        <div className={styles.featuresContainer}>
          <h2>Características y Especificaciones</h2>
          
          <div className={styles.featuresGrid}>
            {product.attributes && Object.entries(product.attributes).map(([key, value]) => (
              <div key={key} className={styles.featureItem}>
                <span className={styles.featureLabel}>{key}</span>
                <span className={styles.featureValue}>{value}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.additionalInfo}>
            <h3>Detalles adicionales</h3>
            <p>
              {product.description || 'Para obtener información más detallada sobre este equipo, por favor contáctenos y estaremos encantados de responder todas sus consultas y proporcionar especificaciones técnicas completas.'}
            </p>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section id="relatedSection" className={`${styles.relatedSection} ${isRelatedVisible ? styles.visible : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url(${backgroundImages.pattern})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat'
          }}
        >
          <div className={styles.relatedContainer}>
            <h2>Productos Relacionados</h2>
            
            <div className={styles.relatedGrid}>
              {relatedProducts.map((related) => (
                <Link 
                  href={`/productos/detalle/${related.slug}`}
                  key={related.id}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImageContainer}>
                    <Image 
                      src={imagen4.src}
                      alt={related.name}
                      width={400}
                      height={300}
                      className={styles.relatedImage}
                      priority
                    />
                  </div>
                  <div className={styles.relatedInfo}>
                    <h3>{related.name}</h3>
                    <p>{related.short_description}</p>
                    {related.show_price && related.price && (
                      <span className={styles.relatedPrice}>
                        ${related.price.toLocaleString()} / {related.price_unit}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
} 