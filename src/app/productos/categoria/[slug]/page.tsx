'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './categoria.module.css';
import imagen3 from '@/assets/images/3.jpg';
import { productService } from '@/services/products';
import { categoryService } from '@/services/categories';
import { Product, Category } from '@/types/product';

// Utilizar imágenes de construcción de dominio público/gratuitas
const backgroundImages = {
  hero: "https://images.unsplash.com/photo-1621110628647-b4a64cb6df5e?q=80&w=1920&auto=format&fit=crop",
  pattern: "https://www.transparenttextures.com/patterns/concrete-wall.png"
};

// Obtener imagen del producto
const getProductImage = (product: Product) => {
  // Forzar el uso de imagen3 para todos los productos por ahora
  return imagen3.src;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(true);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, fetch the category data
        const categoryResponse = await categoryService.getCategoryBySlug(resolvedParams.slug);
        
        if (!categoryResponse.success || !categoryResponse.data) {
          setError('Categoría no encontrada');
          return;
        }

        const categoryData = categoryResponse.data;
        setCategory(categoryData);

        console.log('Fetching products with params:', {
          category_id_param: categoryData.id,
          is_featured_param: showFeaturedOnly,
          limit_param: 10,
          offset_param: 0
        });

        const productsResponse = await productService.getProducts({
          category_id_param: categoryData.id,
          is_featured_param: showFeaturedOnly,
          limit_param: 10,
          offset_param: 0
        });

        console.log('API Response:', {
          success: productsResponse.success,
          message: productsResponse.message,
          data: {
            limit: productsResponse.data.limit,
            offset: productsResponse.data.offset,
            total_count: productsResponse.data.total_count,
            products_count: productsResponse.data.products.length,
            products: productsResponse.data.products
          }
        });

        if (!productsResponse.success) {
          setError(productsResponse.message || 'Error al cargar los productos');
          return;
        }

        if (productsResponse.data.products.length === 0) {
          setError(showFeaturedOnly 
            ? 'No hay productos destacados disponibles en esta categoría.' 
            : 'Actualmente esta categoría no tiene productos disponibles.');
          return;
        }

        setProducts(productsResponse.data.products);
      } catch (err: any) {
        console.error('Error fetching data:', err);
        console.error('Error details:', {
          message: err.message,
          stack: err.stack,
          response: err.response
        });
        setError(err.message || 'Error al cargar los datos. Por favor, intente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [resolvedParams.slug, showFeaturedOnly]);

  const toggleFeatured = () => {
    setShowFeaturedOnly(!showFeaturedOnly);
  };

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loadingContainer}>
          <p>Cargando productos...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <div className={styles.errorContainer}>
          <h1>Información</h1>
          <p>{error}</p>
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
          <h1>{category?.name}</h1>
          <p>{category?.description || 'Descubre nuestra selección de productos en esta categoría'}</p>
        </div>
      </div>

      <section id="productsSection" className={styles.productsSection}>

        <div className={styles.productsGrid}>
          {products.map((product) => (
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
                  style={{ width: 'auto', height: 'auto' }}
                />
                {product.is_featured && (
                  <div className={styles.featuredBadge}>
                    Destacado
                  </div>
                )}
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
          {/* We'll implement related categories later */}
        </div>
      </section>
    </main>
  );
} 