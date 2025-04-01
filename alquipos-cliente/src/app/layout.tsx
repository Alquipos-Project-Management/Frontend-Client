import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";
import ClientProviders from "@/components/providers/ClientProviders";
import Navbar from "@/components/molecules/Navigation/Navbar";
import Footer from "@/components/organisms/Footer/Footer";

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
        </ClientProviders>
      </body>
    </html>
  );
}
