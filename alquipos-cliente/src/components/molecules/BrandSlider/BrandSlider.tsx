'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './BrandSlider.module.css';

interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}

interface BrandSliderProps {
  brands: Brand[];
}

export default function BrandSlider({ brands }: BrandSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  // Duplicar las marcas para crear el efecto infinito
  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    if (!sliderRef.current) return;

    // Reiniciar la animación cuando llegue al final
    const handleAnimationEnd = () => {
      if (!sliderRef.current) return;
      sliderRef.current.style.animation = 'none';
      void sliderRef.current.offsetWidth; // Truco para forzar un reflow
      sliderRef.current.style.animation = `${styles.slideAnimation} ${brands.length * 5}s linear infinite`;
    };

    sliderRef.current.addEventListener('animationiteration', handleAnimationEnd);

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('animationiteration', handleAnimationEnd);
      }
    };
  }, [brands.length]);

  const handleImageLoad = (brandId: number) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(brandId.toString());
      return newSet;
    });
  };

  const handleImageError = (brandId: number) => {
    setErrorImages(prev => {
      const newSet = new Set(prev);
      newSet.add(brandId.toString());
      return newSet;
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {duplicatedBrands.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className={styles.brandItem}>
            {!errorImages.has(brand.id.toString()) ? (
              <Image 
                src={brand.logoUrl} 
                alt={brand.name} 
                className={`${styles.brandLogo} ${loadedImages.has(brand.id.toString()) ? styles.fadeIn : ''}`}
                width={150}
                height={60}
                priority
                onLoad={() => handleImageLoad(brand.id)}
                onError={() => handleImageError(brand.id)}
              />
            ) : (
              <div className={styles.brandPlaceholder}>
                {brand.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 