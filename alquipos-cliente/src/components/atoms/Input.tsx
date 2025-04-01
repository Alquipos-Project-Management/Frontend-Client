'use client';

import React from 'react';
import styles from '@/app/contact/contact.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-secondary-100 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className={`${styles.input} w-full px-4 py-3 rounded-md focus:outline-none ${
          error ? 'border-error' : ''
        } ${className || ''}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-error text-xs">
          {error}
        </p>
      )}
    </div>
  );
}; 