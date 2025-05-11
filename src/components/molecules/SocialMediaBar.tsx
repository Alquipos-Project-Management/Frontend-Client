'use client';

import React from 'react';
import { SocialMediaIcon } from '../atoms/SocialMediaIcon';
import styles from '@/app/contact/contact.module.css';

const socialMediaLinks = [
  {
    icon: '/icons/facebook.svg',
    alt: 'Facebook',
    href: 'https://facebook.com/alquipos'
  },
  {
    icon: '/icons/instagram.svg',
    alt: 'Instagram',
    href: 'https://instagram.com/alquipos'
  },
  {
    icon: '/icons/whatsapp.svg',
    alt: 'WhatsApp',
    href: 'https://wa.me/50688888888'
  },
  {
    icon: '/icons/email.svg',
    alt: 'Email',
    href: 'mailto:contacto@alquipos.com'
  }
];

export const SocialMediaBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      {socialMediaLinks.map((social) => (
        <div key={social.alt} className={styles.socialIcon}>
          <SocialMediaIcon
            icon={social.icon}
            alt={social.alt}
            href={social.href}
          />
        </div>
      ))}
    </div>
  );
}; 