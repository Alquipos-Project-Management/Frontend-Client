'use client';

import { useState } from 'react';
import styles from './testimonios.module.css';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import { mockTestimonials } from '@/mock/testimonials';
import { testimonialsHeaderData } from '@/mock/testimonialsHeaderData';

export default function TestimoniosPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sort testimonials by submission date (newest first)
  const sortedTestimonials = [...mockTestimonials].sort((a, b) => 
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );

  const {
    content: { title, subtitle, description },
    metadata: { displaySettings }
  } = testimonialsHeaderData;

  // Apply display settings
  const displayedTestimonials = sortedTestimonials.slice(0, displaySettings.itemsPerPage);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          {displaySettings.showTitle && (
            <h1 className={styles.title}>
              {title.split(' ').map((word, index, array) => 
                index === array.length - 1 ? 
                  <span key={index}>{word}</span> : 
                  word + ' '
              )}
            </h1>
          )}
          {displaySettings.showSubtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
          {displaySettings.showDescription && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
        
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
      </div>
    </div>
  );
} 