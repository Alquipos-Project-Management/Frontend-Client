'use client';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import HeroCarousel from '@/components/molecules/Carousel/HeroCarousel';
import BrandSlider from '@/components/molecules/BrandSlider/BrandSlider';
import styles from './page.module.css';
import { dynamicContentService, DynamicContentRpcResponseItem } from '@/services/dynamicContent';

// Interfaces for processed dynamic content (subset of what API might provide)
interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

interface CategorySpec {
  text: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: CategorySpec[];
  icon: React.ReactElement;
}

interface CategoriesData {
  title?: string;
  subtitle?: string;
  items: Category[];
}

interface Benefit {
  icon: React.ReactElement;
  title: string;
  description: string;
  spec?: string;
}

interface BenefitsData {
  title?: string;
  subtitle?: string;
  items: Benefit[];
}

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}

interface BrandsData {
  title?: string;
  subtitle?: string;
  items: Brand[];
}

interface Product {
  id: string;
  name: string;
  slug: string; // For linking to product details page
  image: string;
  price: number;
  price_unit: string;
  short_description: string;
  sale_price?: number;
}

interface FeaturedProductsData {
  title?: string;
  items: Product[];
}

// --- SVG Icon Definitions & Mappings ---
const categoryIcons: { [key: string]: React.ReactElement } = {
  andamios: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  maquinaria: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
      <path d="M4 11V4H17L22 9V11"/><path d="M14 4V9H21.5"/><rect x="3" y="11" width="17" height="8" rx="1" /><circle cx="7.5" cy="19" r="2.5" /><circle cx="17.5" cy="19" r="2.5" />
    </svg>
  ),
  herramientas: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  default: ( // Fallback icon
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.iconoConstructivo}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="8" x2="16" y2="16" />
      <line x1="16" y1="8" x2="8" y2="16" />
    </svg>
  )
};

const benefitIcons: { [key: string]: React.ReactElement } = {
  "Equipos certificados": (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}><path d="M3.5 18.5L9.5 12.5L13.5 16.5L22 6.92771" /><path d="M19 7L22 7L22 10" /><rect x="2" y="2" width="20" height="20" rx="2" /></svg>),
  "Entrega rápida": (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}><path d="M8 19L5 17V7L8 5L12 7L16 5L19 7V17L16 19L12 17L8 19Z" /><path d="M12 7V17" /><path d="M16 5V19" /><path d="M8 5V19" /></svg>),
  "Asesoría técnica": (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}><circle cx="12" cy="12" r="10" /><path d="M12 8V12L14 14" /><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" /></svg>),
  "Precios competitivos": (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}><path d="M12 2V5" /><path d="M12 19V22" /><path d="M4.93 4.93L7.05 7.05" /><path d="M16.95 16.95L19.07 19.07" /><path d="M2 12H5" /><path d="M19 12H22" /><path d="M4.93 19.07L7.05 16.95" /><path d="M16.95 7.05L19.07 4.93" /><circle cx="12" cy="12" r="4" /></svg>),
  default: ( // Fallback icon
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.benefitIcon}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12" y2="16" /></svg>
  )
};

// Default images configuration
const DEFAULT_IMAGES = {
  hero: [
    '/assets/images/hero/hero-1.jpg',
    '/assets/images/hero/hero-2.jpg',
    '/assets/images/hero/hero-3.jpg'
  ],
  categories: {
    andamios: '/assets/images/categories/andamios-default.jpg',
    maquinaria: '/assets/images/categories/maquinaria-default.jpg',
    herramientas: '/assets/images/categories/herramientas-default.jpg',
    default: '/assets/images/categories/default.jpg'
  },
  brands: {
    default: '/assets/images/brands/default-brand.svg'
  },
  products: {
    default: '/assets/images/products/default-product.jpg'
  }
};

// Enhanced image validation
const isValidImageUrl = (url: string | undefined): boolean => {
  if (!url || url.trim() === '') return false;
  if (url.startsWith('blob:')) return false;
  if (url.startsWith('http://localhost')) return false;
  // Check for valid image extensions
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  return validExtensions.some(ext => url.toLowerCase().endsWith(ext)) || url.includes('supabase.co/storage');
};

// Get fallback image based on type and key
const getFallbackImage = (type: keyof typeof DEFAULT_IMAGES, key?: string): string => {
  if (type === 'hero') {
    return DEFAULT_IMAGES.hero[0]; // Default to first hero image
  }
  if (type === 'categories' && key) {
    return DEFAULT_IMAGES.categories[key as keyof typeof DEFAULT_IMAGES.categories] || DEFAULT_IMAGES.categories.default;
  }
  if (type === 'brands') {
    return DEFAULT_IMAGES.brands.default;
  }
  if (type === 'products') {
    return DEFAULT_IMAGES.products.default;
  }
  return '/assets/images/default.jpg'; // Ultimate fallback
};

const findApiSectionContent = (sections: DynamicContentRpcResponseItem[], sectionKey: string): any | undefined => {
  const section = sections.find(item => item.section_key === sectionKey && item.status === 'published');
  return section ? section.content : undefined;
};

export default function Home() {
  const [imagesLoaded, setImagesLoaded] = useState(false); // For carousel placeholder
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  // State for dynamic content
  const [dynamicHeroSlides, setDynamicHeroSlides] = useState<HeroSlide[]>([]);
  const [dynamicCategoriesData, setDynamicCategoriesData] = useState<CategoriesData | null>(null);
  const [dynamicBenefitsData, setDynamicBenefitsData] = useState<BenefitsData | null>(null);
  const [dynamicBrandsData, setDynamicBrandsData] = useState<BrandsData | null>(null);
  const [dynamicFeaturedProductsData, setDynamicFeaturedProductsData] = useState<FeaturedProductsData | null>(null);
  const [isError, setIsError] = useState(false);

  // Refs for animaciones al hacer scroll
  const categoriesRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const brandsRef = useRef<HTMLElement>(null);
  const featuredProductsRef = useRef<HTMLElement>(null); // Ref for new section

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dynamicContentService.getPageContent('home');
        if (response && response.length > 0 && response[0].success && response[0].data && response[0].data.items) {
          const sections = response[0].data.items;

          // Process Hero Carousel
          const heroContent = findApiSectionContent(sections, 'hero_carousel');
          if (heroContent && heroContent.slides) {
            setDynamicHeroSlides(
              heroContent.slides.map((slide: any, index: number) => {
                // Special handling for the second slide (maquinaria)
                if (index === 1) {
                  return {
                    id: Number(slide.id),
                    title: slide.title || "Maquinaria pesada y equipos de construcción",
                    ctaLink: slide.ctaLink || "/contact",
                    ctaText: slide.ctaText || "Solicitar cotización",
                    imageUrl: "/assets/images/hero/hero-2.jpg", // Use the dedicated maquinaria image
                    subtitle: slide.subtitle || "Alquile la mejor maquinaria para su proyecto con servicio técnico incluido",
                  };
                }
                
                return {
                  id: Number(slide.id),
                  title: slide.title || "Título por defecto",
                  ctaLink: slide.ctaLink || "/",
                  ctaText: slide.ctaText || "Ver más",
                  imageUrl: isValidImageUrl(slide.imageUrl) 
                    ? slide.imageUrl 
                    : DEFAULT_IMAGES.hero[index % DEFAULT_IMAGES.hero.length],
                  subtitle: slide.subtitle || "Subtítulo por defecto",
                };
              }).filter((slide: HeroSlide) => !isNaN(slide.id))
            );
          }

          // Process Categories
          const categoriesContent = findApiSectionContent(sections, 'categories');
          if (categoriesContent && categoriesContent.items) {
            setDynamicCategoriesData({
              title: categoriesContent.title || "Nuestros Equipos",
              subtitle: categoriesContent.subtitle || "Contamos con una amplia variedad de equipos para la construcción",
              items: categoriesContent.items.map((cat: any) => ({
                id: cat.id,
                name: cat.name,
                description: cat.description,
                image: isValidImageUrl(cat.image) 
                  ? cat.image 
                  : getFallbackImage('categories', cat.id),
                specs: cat.specs.map((spec: any) => ({ text: spec.text })),
                icon: categoryIcons[cat.id as keyof typeof categoryIcons] || categoryIcons.default,
              })),
            });
          }

          // Process Benefits
          const benefitsContent = findApiSectionContent(sections, 'benefits');
          if (benefitsContent && benefitsContent.items) {
            setDynamicBenefitsData({
              title: benefitsContent.title || "¿Por qué elegirnos?",
              subtitle: "En Alquipos ofrecemos soluciones profesionales con equipos de alta calidad y servicio personalizado.",
              items: benefitsContent.items.map((ben: any) => ({
                title: ben.title,
                description: ben.description,
                spec: ben.spec,
                icon: benefitIcons[ben.title as keyof typeof benefitIcons] || benefitIcons.default,
              })),
            });
          }
          
          // Process Brands
          const brandsContent = findApiSectionContent(sections, 'brands');
          if (brandsContent && brandsContent.items) {
            setDynamicBrandsData({
              title: brandsContent.title || "Trabajamos con las Mejores Marcas",
              subtitle: "Ofrecemos equipos de las marcas más reconocidas y confiables del mercado",
              items: brandsContent.items.map((brandAPI: any) => ({
                id: Number(brandAPI.id),
                name: brandAPI.name,
                logoUrl: isValidImageUrl(brandAPI.logoUrl) 
                  ? brandAPI.logoUrl 
                  : getFallbackImage('brands'),
              })).filter((brand: Brand) => !isNaN(brand.id))
            });
          }

          // Process Featured Products
          const featuredProductsContent = findApiSectionContent(sections, 'featured_products');
          if (featuredProductsContent && featuredProductsContent.items) {
            setDynamicFeaturedProductsData({
              title: featuredProductsContent.title || "Productos Destacados",
              items: featuredProductsContent.items.map((prod: any) => ({
                id: prod.id,
                name: prod.name,
                slug: prod.slug,
                image: isValidImageUrl(prod.image) 
                  ? prod.image 
                  : getFallbackImage('products'),
                price: prod.price,
                price_unit: prod.price_unit,
                short_description: prod.short_description,
                sale_price: prod.sale_price,
              })),
            });
          }
          
          setImagesLoaded(true); // Indicate data is ready for hero carousel
        } else {
          console.warn("Using fallback data: No dynamic content or empty response");
          // Set default fallback data for each section
          setDynamicHeroSlides([
            {
              id: 1,
              title: "Equipos de Construcción de Alta Calidad",
              subtitle: "Alquile equipos profesionales para su proyecto",
              ctaText: "Explorar Equipos",
              ctaLink: "/equipment",
              imageUrl: DEFAULT_IMAGES.hero[0]
            },
            {
              id: 2,
              title: "Maquinaria pesada y equipos de construcción",
              subtitle: "Alquile la mejor maquinaria para su proyecto con servicio técnico incluido",
              ctaText: "Solicitar cotización",
              ctaLink: "/contact",
              imageUrl: DEFAULT_IMAGES.hero[1]
            }
          ]);
        }
      } catch (error) {
        console.error("Error fetching dynamic page data for 'home':", error);
        setIsError(true);
        setImagesLoaded(true);
      }
    };

    fetchData();
  }, []);


  // Control de visibilidad del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setNavbarVisible(visible);
      
      const navbar = document.querySelector('[class^="Navbar_navbar"]') as HTMLElement;
      if (navbar) {
        navbar.classList.toggle('Navbar_navBarHidden', !visible);
      }
      
      const sectionsToAnimate = [
        { ref: categoriesRef, className: styles.animateSection },
        { ref: benefitsRef, className: styles.animateSection },
        { ref: ctaRef, className: styles.animateSection },
        { ref: brandsRef, className: styles.animateSection },
        { ref: featuredProductsRef, className: styles.animateSection } // Add new section to animation
      ];
      
      sectionsToAnimate.forEach(({ ref, className }) => {
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
        {imagesLoaded && dynamicHeroSlides.length > 0 ? (
          <HeroCarousel slides={dynamicHeroSlides} />
        ) : (
          <div className={styles.carouselPlaceholder}>
            <div className={styles.placeholderContent}>
              <span className={styles.loader}></span>
            </div>
          </div>
        )}
      </section>

      {/* Sección de Categorías */}
      {dynamicCategoriesData && dynamicCategoriesData.items.length > 0 && (
        <section ref={categoriesRef} className={`${styles.categoriesSection} ${styles.sectionToAnimate}`}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{dynamicCategoriesData.title || 'Nuestros Equipos'}</h2>
              {dynamicCategoriesData.subtitle && (
                <p className={styles.sectionSubtitle}>{dynamicCategoriesData.subtitle}</p>
              )}
            </div>
            
            <div className={styles.categoriesGrid}>
              {dynamicCategoriesData.items.map((category) => (
                <Link 
                  href={`/equipment?category=${category.id}`} 
                  key={category.id}
                  className={styles.categoryCard}
                >
                  <div className={styles.categoryImageContainer}>
                    <div className={styles.categoryImage}>
                      {category.icon} {/* Mapped SVG icon */}
                    </div>
                  </div>
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryTitle}>{category.name}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
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
      )}

      {/* Sección de Beneficios */}
      {dynamicBenefitsData && dynamicBenefitsData.items.length > 0 && (
        <section ref={benefitsRef} className={`${styles.benefitsSection} ${styles.sectionToAnimate}`}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{dynamicBenefitsData.title || '¿Por qué elegirnos?'}</h2>
              {dynamicBenefitsData.subtitle && (
                <p className={styles.sectionSubtitle}>{dynamicBenefitsData.subtitle}</p>
              )}
            </div>
            
            <div className={styles.benefitsGrid}>
              {dynamicBenefitsData.items.map((benefit, index) => (
                <div 
                  className={`${styles.benefitCard} ${styles.fadeInItem}`} 
                  key={index} // Consider using a unique ID from API if available for benefits
                  style={{ animationDelay: `${index * 0.15}s` }}
                  data-spec={benefit.spec}
                >
                  <div className={styles.benefitIconContainer}>
                    {benefit.icon} {/* Mapped SVG icon */}
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sección de Llamado a la Acción (CTA) - Kept as is */}
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
      {dynamicBrandsData && dynamicBrandsData.items.length > 0 && (
        <section ref={brandsRef} className={`${styles.brandsSection} ${styles.sectionToAnimate}`}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{dynamicBrandsData.title || 'Trabajamos con las Mejores Marcas'}</h2>
              {dynamicBrandsData.subtitle && (
                 <p className={styles.sectionSubtitle}>{dynamicBrandsData.subtitle}</p>
              )}
            </div>
            <BrandSlider brands={dynamicBrandsData.items} />
          </div>
        </section>
      )}

      {/* Nueva Sección de Productos Destacados */}
      {dynamicFeaturedProductsData && dynamicFeaturedProductsData.items.length > 0 && (
        <section ref={featuredProductsRef} className={`${styles.featuredProductsSection} ${styles.sectionToAnimate}`}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{dynamicFeaturedProductsData.title || 'Productos Destacados'}</h2>
              {/* Add subtitle for featured products if available or needed */}
            </div>
            <div className={styles.productsGrid}> {/* Assuming a similar grid style, define in CSS */}
              {dynamicFeaturedProductsData.items.map((product) => (
                <div key={product.id} className={styles.productCard}> {/* Define styles.productCard */}
                  <Link href={`/product/${product.slug}`} className={styles.productLink}>
                    <div className={styles.productImageContainer}>
                      {/* Next/Image could be used here if 'next/image' import is restored and configured */}
                      <img src={isValidImageUrl(product.image) ? product.image : DEFAULT_IMAGES.products.default} alt={product.name} className={styles.productImage}/>
                    </div>
                    <div className={styles.productContent}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productShortDescription}>{product.short_description}</p>
                      <div className={styles.productPriceContainer}>
                        {product.sale_price && product.sale_price < product.price && (
                          <span className={styles.productSalePrice}>${product.sale_price.toLocaleString()}/{product.price_unit}</span>
                        )}
                        <span className={product.sale_price && product.sale_price < product.price ? styles.productOriginalPrice : styles.productPrice}>
                          ${product.price.toLocaleString()}/{product.price_unit}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
