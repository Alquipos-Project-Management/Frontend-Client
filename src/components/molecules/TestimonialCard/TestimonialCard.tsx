import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TestimonialCard.module.css';

export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  text: string;
  imageUrl: string;
  specs?: { text: string }[];
  link?: string;
  submittedAt: string;
  approvedAt: string;
  userId: string;
  relatedEntityType?: string;
  relatedEntityId?: string;
  location?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
  expanded?: boolean;
  onClick?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  expanded = false,
  onClick 
}) => {
  const CardWrapper = testimonial.link ? Link : 'div';
  const cardProps = testimonial.link 
    ? { href: testimonial.link, className: styles.testimonialCard } 
    : { className: styles.testimonialCard, onClick };

  const content = (
    <>
      <div className={styles.testimonialImageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={testimonial.imageUrl} 
            alt={`${testimonial.name} - ${testimonial.role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.testimonialImage}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement?.classList.add(styles.fallbackImage);
            }}
          />
        </div>
      </div>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialHeader}>
          <h3 className={styles.testimonialName}>{testimonial.name}</h3>
          {testimonial.isFeatured && (
            <span className={styles.featuredBadge}>Destacado</span>
          )}
        </div>
        <p className={styles.testimonialRole}>{testimonial.role}</p>
        {testimonial.location && (
          <p className={styles.testimonialLocation}>{testimonial.location}</p>
        )}
        <p className={styles.testimonialText}>
          "{expanded ? testimonial.text : `${testimonial.text.slice(0, 100)}...`}"
        </p>
        {testimonial.specs && testimonial.specs.length > 0 && (
          <div className={styles.testimonialSpecs}>
            {testimonial.specs.map((spec, index) => (
              <span key={index} className={styles.specItem}>
                {spec.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (testimonial.link) {
    return (
      <Link href={testimonial.link} className={styles.testimonialCard}>
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.testimonialCard} onClick={onClick}>
      {content}
    </div>
  );
};

export default TestimonialCard; 