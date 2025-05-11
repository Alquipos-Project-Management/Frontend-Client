import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";
import ClientProviders from "@/components/providers/ClientProviders";
import Navbar from "@/components/molecules/Navigation/Navbar";
import Footer from "@/components/organisms/Footer/Footer";
import { ContactFloatingButton } from "@/components/atoms/ContactFloatingButton";
import "../env-init.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alquipos - Alquiler de Equipos de Construcción",
  description: "Soluciones profesionales para tus proyectos de construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProviders>
          <Navbar />
          <main className="min-h-screen pt-[80px]">
            {children}
          </main>
          <Footer />
          <ContactFloatingButton 
            phoneNumber="50662345678" 
            email="contacto@alquipos.com" 
          />
        </ClientProviders>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            window.__ENV__ = {
              NEXT_PUBLIC_SUPABASE_URL: "${process.env.NEXT_PUBLIC_SUPABASE_URL || ''}",
              NEXT_PUBLIC_SUPABASE_ANON_KEY: "${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}",
              NEXT_PUBLIC_DEFAULT_ROLE_ID: "${process.env.NEXT_PUBLIC_DEFAULT_ROLE_ID || ''}"
            };
            console.log("ENV variables initialized from inline script");
          `
        }} />
      </body>
    </html>
  );
}
