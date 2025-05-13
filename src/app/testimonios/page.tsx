'use client';

import { useState, useEffect } from 'react';
import styles from './testimonios.module.css';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import { testimonialService } from '@/services/testimonials';
import { dynamicContentService } from '@/services/dynamicContent';
import { TestimonialProps } from '@/components/molecules/TestimonialCard';
import { DynamicContentRpcResponseItem } from '@/services/dynamicContent';

// Define a default structure for header data in case of fetch failure or no content
const defaultHeaderContent = {
  title: 'Testimonios de Nuestros Clientes', // Default title
  subtitle: 'Descubre lo que nuestros clientes opinan sobre nosotros.', // Default subtitle
  description: '', // Default empty description
  displaySettings: {
    showTitle: true,
    showSubtitle: true,
    showDescription: false,
    itemsPerPage: 10, // Default items to show
  },
};

export default function TestimoniosPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  // Initialize headerData to null, it will be populated or remain null if fetch fails
  const [headerData, setHeaderData] = useState<DynamicContentRpcResponseItem | null>(null);
  const [headerLoading, setHeaderLoading] = useState(true);
  const [headerError, setHeaderError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // For testimonials
  const [error, setError] = useState<string | null>(null); // For testimonials
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Reset states for retry
      setLoading(true);
      setError(null);
      setHeaderLoading(true);
      setHeaderError(null);
      
      try {
        // Fetch testimonials
        console.log('Fetching testimonials data...');
        const testimonialsData = await testimonialService.getAllTestimonials();
        console.log('Raw testimonialsData from service:', JSON.stringify(testimonialsData, null, 2));
        setTestimonials(Array.isArray(testimonialsData) ? testimonialsData : []);
        console.log(`Fetched ${testimonialsData ? testimonialsData.length : 0} testimonials`);
      } catch (fetchError) {
        console.error('Error fetching testimonios data on page:', fetchError);
        const errorMessage = fetchError instanceof Error ? fetchError.message : 'Error desconocido al cargar testimonios';
        setError(errorMessage);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }

      // Fetch dynamic content for the header
      try {
        console.log('Fetching header content...');
        const dynamicContent = await dynamicContentService.getSectionContent('testimonios', 'header');
        if (dynamicContent) {
          console.log('Successfully loaded header content from RPC');
          setHeaderData(dynamicContent);
        } else {
          console.warn('No dynamic header content returned from service for testimonios/header.');
          setHeaderError('No se pudo cargar el contenido del encabezado.');
          setHeaderData(null); // Explicitly set to null if no content
        }
      } catch (err) {
        console.error('Failed to fetch header content from RPC:', err);
        const message = err instanceof Error ? err.message : 'Error al cargar encabezado.';
        setHeaderError(`Error al cargar encabezado: ${message}`);
        setHeaderData(null); // Ensure headerData is null on error
      } finally {
        setHeaderLoading(false);
      }
    };

    fetchData();
  }, [retryCount]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  const sortedTestimonials = [...(testimonials || [])].sort((a, b) => 
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );

  // Safely access header content, using defaults if headerData is null or properties are missing
  const currentHeaderContent = headerData?.content || defaultHeaderContent;
  const currentDisplaySettings = headerData?.metadata?.displaySettings || defaultHeaderContent.displaySettings;

  const title = currentHeaderContent.title || defaultHeaderContent.title;
  const subtitle = currentHeaderContent.subtitle || defaultHeaderContent.subtitle;
  const description = currentHeaderContent.description || defaultHeaderContent.description;
  const displaySettings = {
    showTitle: currentDisplaySettings.showTitle !== undefined ? currentDisplaySettings.showTitle : defaultHeaderContent.displaySettings.showTitle,
    showSubtitle: currentDisplaySettings.showSubtitle !== undefined ? currentDisplaySettings.showSubtitle : defaultHeaderContent.displaySettings.showSubtitle,
    showDescription: currentDisplaySettings.showDescription !== undefined ? currentDisplaySettings.showDescription : defaultHeaderContent.displaySettings.showDescription,
    itemsPerPage: currentDisplaySettings.itemsPerPage || defaultHeaderContent.displaySettings.itemsPerPage,
  };

  const displayedTestimonials = sortedTestimonials.slice(0, displaySettings.itemsPerPage);

  if (loading || headerLoading) { // Combined loading state
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            <p>Cargando contenido...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error display can be more granular if needed
  if (error && !loading) { // Show testimonial error first if present
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.error}>
            <h2>Error al cargar los testimonios</h2>
            <p>{error}</p>
            <button onClick={handleRetry} className={styles.retryButton}>Intentar nuevamente</button>
          </div>
        </div>
      </div>
    );
  }
  // If testimonials loaded but header failed, we can still show testimonials with default header or error message for header

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          {headerError && (
            <div className={styles.errorNotice}>Error al cargar encabezado: {headerError}</div>
          )}
          {displaySettings.showTitle && (
            <h1 className={styles.title}>
              {(title || '').split(' ').map((word: string, index: number, array: string[]) => 
                index === array.length - 1 ? 
                  <span key={index}>{word}</span> : 
                  word + ' '
              )}
            </h1>
          )}
          {displaySettings.showSubtitle && (
            <p className={styles.subtitle}>{subtitle || ''}</p>
          )}
          {displaySettings.showDescription && (
            <p className={styles.description}>{description || ''}</p>
          )}
        </div>
        
        {displayedTestimonials.length > 0 ? (
          <div className={styles.testimonialGrid}>
            {displayedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                expanded={expandedId === testimonial.id}
                onClick={() => toggleExpand(testimonial.id)}
              />
            ))}
          </div>
        ) : (
          !loading && <div className={styles.noContent}>No hay testimonios disponibles en este momento.</div>
        )}
      </div>
    </div>
  );
} 