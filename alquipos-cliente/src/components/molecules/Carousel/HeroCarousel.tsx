'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';
import { StaticImageData } from 'next/image';

// Tipos para las slides
interface Slide {
    id: number;
    imageUrl: string | StaticImageData;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

interface HeroCarouselProps {
    slides: Slide[];
    autoPlayInterval?: number; // en ms
}

export default function HeroCarousel({
    slides,
    autoPlayInterval = 5000
}: HeroCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);

    // Función para pasar a la siguiente slide
    const nextSlide = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

        // Esperar a que termine la transición
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning, slides.length]);

    // Función para ir a la slide anterior
    const prevSlide = useCallback(() => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning, slides.length]);

    // Función para navegar a una slide específica
    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return;

        setIsTransitioning(true);
        setCurrentSlide(index);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    // AutoPlay con useEffect
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (autoPlay) {
            interval = setInterval(() => {
                nextSlide();
            }, autoPlayInterval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoPlay, autoPlayInterval, nextSlide]);

    // Pausar autoplay al hover
    const pauseAutoPlay = () => setAutoPlay(false);
    const resumeAutoPlay = () => setAutoPlay(true);

    return (
        <div
            className={styles.carouselContainer}
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
        >
            <div className={styles.slidesContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
                        style={{
                            transform: `translateX(${(index - currentSlide) * 100}%)`,
                            opacity: index === currentSlide ? 1 : 0
                        }}
                    >
                        <div className={styles.slideImageContainer}>
                            <Image
                                src={slide.imageUrl}
                                alt={slide.title}
                                fill
                                sizes="100vw"
                                priority={index === currentSlide}
                                className={styles.slideImage}
                            />
                            <div className={styles.overlay}></div>
                        </div>

                        <div className={styles.slideContent}>
                            <div className={styles.slideTextContent}>
                                <h1 className={styles.slideTitle}>{slide.title}</h1>
                                <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                                <Link href={slide.ctaLink} className={styles.slideCta}>
                                    {slide.ctaText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controles de navegación */}
            <button
                className={`${styles.carouselControl} ${styles.prevControl}`}
                onClick={prevSlide}
                aria-label="Slide anterior"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.controlIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button
                className={`${styles.carouselControl} ${styles.nextControl}`}
                onClick={nextSlide}
                aria-label="Siguiente slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.controlIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Indicadores */}
            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
} 