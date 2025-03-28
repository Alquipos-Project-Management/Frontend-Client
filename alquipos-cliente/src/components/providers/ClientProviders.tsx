'use client';

import { ReactNode } from 'react';
import { AppProvider } from '@/context/AppContext';
import WhatsAppButton from '@/components/atoms/WhatsAppButton/WhatsAppButton';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      {children}
      <WhatsAppButton phoneNumber="5491123456789" />
    </AppProvider>
  );
} 