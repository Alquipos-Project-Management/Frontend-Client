import React from 'react';

type SocialMediaBarProps = {
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
};

export const SocialMediaBar = ({ socialLinks }: SocialMediaBarProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-[180px] mx-auto">
      {socialLinks?.facebook && (
        <a 
          href={socialLinks.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-[8px] text-yellow-500 hover:text-primary-100"
        >
          <span className="mr-1">👤</span>
          Facebook
        </a>
      )}
      
      {socialLinks?.instagram && (
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-[8px] text-yellow-500 hover:text-primary-100"
        >
          <span className="mr-1">📷</span>
          Instagram
        </a>
      )}
      
      {socialLinks?.whatsapp && (
        <a 
          href={socialLinks.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-[8px] text-yellow-500 hover:text-primary-100"
        >
          <span className="mr-1">📱</span>
          WhatsApp
        </a>
      )}

      {socialLinks?.linkedin && (
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-[8px] text-yellow-500 hover:text-primary-100"
        >
          <span className="mr-1">💼</span>
          LinkedIn
        </a>
      )}
    </div>
  );
}; 