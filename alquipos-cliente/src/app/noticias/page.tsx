'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { newsService, NewsItem, NewsDetail } from '@/services/news';
import styles from './noticias.module.css';
import { useRouter } from 'next/navigation';

export default function NoticiasPage() {
  const router = useRouter();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsDetail | null>(null);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

  // Fetch news items on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const items = await newsService.getNewsList();
        setNewsItems(items);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al cargar las noticias';
        setError(errorMessage);
        console.error('Error fetching news:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleNewsClick = async (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      setSelectedNews(null);
      return;
    }

    setIsDetailLoading(true);
    try {
      // Since we already have the details from the initial fetch,
      // we can just find the item in our state
      const newsDetail = newsItems.find(item => item.id === id);
      if (newsDetail) {
        setSelectedNews(newsDetail as NewsDetail);
        setExpandedId(id);
      } else {
        // Fallback to fetching if not found in state
        const detail = await newsService.getNewsDetail(id);
        setSelectedNews(detail);
        setExpandedId(id);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar la noticia';
      console.error('Error fetching news detail:', err);
      // Fallback to just expanding the card with summary
      setExpandedId(id);
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  if (isLoading) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            <p>Cargando noticias...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.error}>
            <h2>Error al cargar las noticias</h2>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className={styles.retryButton}
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Noticias y <span>Novedades</span></h1>
          <span className={styles.badge}>Últimas Actualizaciones</span>
          <p className={styles.subtitle}>
            Mantente informado sobre nuestros nuevos equipos, proyectos exitosos y logros más recientes
          </p>
        </div>
        
        <div className={styles.newsGrid}>
          {newsItems.map((item) => {
            const dimensions = newsService.getImageDimensions(item);
            const hasImageError = imageErrors[item.id];
            const isLoading = imageLoading[item.id];
            
            return (
              <article 
                key={item.id} 
                className={`${styles.newsCard} ${expandedId === item.id ? styles.expanded : ''}`}
                onClick={() => handleNewsClick(item.id)}
              >
                <div className={styles.newsImageContainer}>
                  <div className={styles.categoryBadge}>
                    {item.tags[0] || 'Noticia'}
                  </div>
                  <div className={styles.imageWrapper}>
                    {!hasImageError && (
                      <>
                        {isLoading && (
                          <div className={styles.imageLoading}>
                            <div className={styles.loadingSpinner}></div>
                          </div>
                        )}
                        <Image 
                          src={newsService.getImageUrl(item)}
                          alt={item.title}
                          width={dimensions.width}
                          height={dimensions.height}
                          className={styles.newsImage}
                          priority={item.is_featured}
                          onError={() => handleImageError(item.id)}
                          onLoadingComplete={() => setImageLoading(prev => ({ ...prev, [item.id]: false }))}
                          onLoadStart={() => setImageLoading(prev => ({ ...prev, [item.id]: true }))}
                          style={dimensions.style}
                        />
                      </>
                    )}
                    {hasImageError && (
                      <div className={styles.fallbackImage}>
                        <Image 
                          src="/large-hydraulic-excavator-cat-6030-caterpillar.jpg"
                          alt="Imagen por defecto"
                          width={dimensions.width}
                          height={dimensions.height}
                          className={styles.newsImage}
                          style={dimensions.style}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.newsContent}>
                  <div className={styles.newsDate}>
                    {new Date(item.created_at).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className={styles.newsTitle}>{item.title}</h2>
                  {isDetailLoading && expandedId === item.id ? (
                    <div className={styles.loadingDetail}>
                      <div className={styles.loadingSpinner}></div>
                      <p>Cargando contenido...</p>
                    </div>
                  ) : (
                    <p className={styles.newsDescription}>
                      {expandedId === item.id && selectedNews 
                        ? selectedNews.content 
                        : `${item.summary.slice(0, 100)}...`}
                    </p>
                  )}
                  {expandedId === item.id && (
                    <div className={styles.contactSection}>
                      <a href="/contact" className={styles.contactButton}>
                        Contáctenos
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
} 