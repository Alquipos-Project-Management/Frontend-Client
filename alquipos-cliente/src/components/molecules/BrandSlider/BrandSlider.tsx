'use client';

import { useEffect, useRef } from 'react';
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

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {duplicatedBrands.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className={styles.brandItem}>
            <img 
              src={brand.logoUrl} 
              alt={brand.name} 
              className={styles.brandLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 