'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productService } from '@/services/products';
import { Product } from '@/types/product';
import styles from './detalle.module.css';
import imagen4 from '@/assets/images/4.jpg';

// Default images for products
const defaultImages = {
  hero: "https://images.unsplash.com/photo-1621110628647-b4a64cb6df5e?q=80&w=1920&auto=format&fit=crop",
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png",
  placeholder: imagen4.src
};

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await productService.getProductBySlug(slug);
        
        if (!response.success) {
          setError(response.message);
          return;
        }

        setProduct(response.data);
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message || 'Error loading product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.querySelector('#featuresSection');
      
      if (featuresSection) {
        const featuresSectionPosition = featuresSection.getBoundingClientRect().top;
        if (featuresSectionPosition < window.innerHeight * 0.75 && !isFeaturesVisible) {
          setIsFeaturesVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFeaturesVisible]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loadingContainer}>
          <p>Cargando detalles del producto...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className={styles.main}>
        <div className={styles.errorContainer}>
          <h1>Producto No Encontrado</h1>
          <p>{error || 'El producto que busca no existe o ha sido removido.'}</p>
          <Link href="/productos" className={styles.backButton}>
            Volver a Productos
          </Link>
        </div>
      </main>
    );
  }

  // Use placeholder image if no product image is available
  const productImages = product.images && product.images.length > 0
    ? product.images.map(img => img.url)
    : [defaultImages.placeholder];

  // Format metadata keys for display
  const formatMetadataKey = (key: string) => {
    const keyMap: { [key: string]: string } = {
      material: 'Material',
      capacidad: 'Capacidad de Carga',
      altura_max: 'Altura Máxima',
      certificacion: 'Certificación',
      sku: 'Código',
      name: 'Nombre',
      description: 'Descripción',
      short_description: 'Descripción Corta',
      is_available: 'Disponibilidad',
      is_rental: 'Tipo de Producto',
      is_featured: 'Destacado',
      category_name: 'Categoría',
      tags: 'Etiquetas'
    };
    return keyMap[key] || key;
  };

  // Format field values for display
  const formatFieldValue = (key: string, value: any) => {
    if (value === null || value === undefined) return 'No disponible';
    
    switch (key) {
      case 'is_available':
        return value ? 'Disponible' : 'No disponible';
      case 'is_rental':
        return value ? 'Alquiler' : 'Venta';
      case 'is_featured':
        return value ? 'Sí' : 'No';
      case 'tags':
        return Array.isArray(value) ? value.join(', ') : value;
      default:
        return value.toString();
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbs} style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url(${defaultImages.pattern})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
      }}>
        <div className={styles.breadcrumbsContainer}>
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/productos">Productos</Link>
          {product.category && (
            <>
              <span>/</span>
              <Link href={`/productos/categoria/${product.category.slug}`}>{product.category.name}</Link>
            </>
          )}
          <span>/</span>
          <span className={styles.currentPage}>{product.name}</span>
        </div>
      </div>

      <section className={styles.productSection}>
        <div className={styles.productGalleryWithTitle}>
          <div className={styles.mainImageContainer}>
            <Image 
              src={productImages[selectedImage]}
              alt={product.name}
              width={800}
              height={600}
              className={styles.mainImage}
              priority={true}
            />
            <div className={styles.imageTitleOverlay}>
              <h1 className={styles.productTitle}>{product.name}</h1>
            </div>
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
          <div className={styles.productDetails}>
            {/* Basic Information Section */}
            <div className={styles.detailsSection}>
              <h3 className={styles.sectionTitle}>Información Básica</h3>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Código</span>
                  <span className={styles.detailValue}>{product.sku}</span>
                </div>

                {product.category && (
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Categoría</span>
                    <span className={styles.detailValue}>
                      <Link href={`/productos/categoria/${product.category.slug}`}>
                        {product.category.name}
                      </Link>
                    </span>
                  </div>
                )}

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Tipo</span>
                  <span className={styles.detailValue}>
                    {product.is_rental ? 'Alquiler' : 'Venta'}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Estado</span>
                  <span className={`${styles.detailValue} ${styles.availabilityBadge} ${product.is_available ? styles.available : styles.unavailable}`}>
                    {product.is_available ? 'Disponible' : 'No disponible'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className={styles.productActions}>
              <button className={styles.primaryButton}>
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="featuresSection" className={`${styles.featuresSection} ${isFeaturesVisible ? styles.visible : ''}`}>
          <div className={styles.featuresContainer}>
            <h2>Características y Especificaciones</h2>
            
            <div className={styles.featuresGrid}>
              {product.metadata && Object.entries(product.metadata).map(([key, value]) => (
                <div key={key} className={styles.featureItem}>
                  <span className={styles.featureLabel}>{formatMetadataKey(key)}</span>
                  <span className={styles.featureValue}>{formatFieldValue(key, value)}</span>
                </div>
              ))}
              {product.attributes && Object.entries(product.attributes).map(([key, value]) => (
                <div key={key} className={styles.featureItem}>
                  <span className={styles.featureLabel}>{formatMetadataKey(key)}</span>
                  <span className={styles.featureValue}>{formatFieldValue(key, value)}</span>
                </div>
              ))}
            </div>

            {/* Description Section */}
            <div className={styles.descriptionSection}>
              <h3 className={styles.sectionTitle}>Descripción</h3>
              <div className={styles.descriptionContent}>
                {product.short_description && (
                  <div className={styles.shortDescription}>
                    <p>{product.short_description}</p>
                  </div>
                )}
                <div className={styles.fullDescription}>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            {product.tags && product.tags.length > 0 && (
              <div className={styles.tagsSection}>
                <h3 className={styles.sectionTitle}>Etiquetas</h3>
                <div className={styles.tagsContainer}>
                  {product.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {product.exta_information && (
              <div className={styles.additionalInfo}>
                <h3>Información Adicional</h3>
                <p>{typeof product.exta_information === 'string' ? product.exta_information : JSON.stringify(product.exta_information)}</p>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
} 