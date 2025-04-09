import React from 'react';
import styles from '@/app/contact/contact.module.css';

type SocialMediaBarProps = {
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
};

export const SocialMediaBar = ({ socialLinks }: SocialMediaBarProps) => {
  return (
    <div className={styles.socialMediaSection}>
      {socialLinks?.facebook && (
        <a 
          href={socialLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      )}
      
      {socialLinks?.instagram && (
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      )}
      
      {socialLinks?.whatsapp && (
        <a 
          href={socialLinks.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            <path d="M15 14.5c.5-.5.5-1 0-1.5l-1.5-2c-.5-.5-1-.5-1.5 0L11 12c-1-.5-2-1-3-2s-1.5-2-2-3l1-1c.5-.5.5-1 0-1.5l-2-1.5c-.5-.5-1-.5-1.5 0L3 4c0 1.5.5 3 1.5 4.5s2 3 3.5 4.5 3 2.5 4.5 3.5 3 1.5 4.5 1.5l1.5-1.5z"></path>
          </svg>
        </a>
      )}
    </div>
  );
}; 