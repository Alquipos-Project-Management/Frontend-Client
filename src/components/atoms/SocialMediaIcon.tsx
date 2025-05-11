'use client';

import React from 'react';
import Image from 'next/image';

interface SocialMediaIconProps {
  icon: string;
  alt: string;
  href: string;
}

export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, alt, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
      title={alt}
    >
      <Image 
        src={icon} 
        alt={alt} 
        width={24} 
        height={24}
        className="w-full h-full object-contain"
      />
    </a>
  );
}; 