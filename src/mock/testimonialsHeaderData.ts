interface TestimonialsHeaderData {
  id: string;
  pageKey: string;
  sectionKey: string;
  content: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  version: number;
  language: string;
  metadata: {
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
    displaySettings: {
      showTitle: boolean;
      showSubtitle: boolean;
      showDescription: boolean;
      showCta: boolean;
      itemsPerPage: number;
    };
  };
  contentType: string;
  displayOrder: number;
}

export const testimonialsHeaderData: TestimonialsHeaderData = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  pageKey: "home",
  sectionKey: "testimonials",
  content: {
    title: "Lo que dicen nuestros clientes",
    subtitle: "Descubre las experiencias de quienes han confiado en nuestros servicios",
    description: "En Alquipos, nos enorgullece la satisfacción de nuestros clientes. Estas son algunas de las experiencias compartidas por empresas y profesionales que han elegido nuestros servicios de alquiler de equipos.",
    ctaText: "Ver más testimonios",
    ctaLink: "/testimonios"
  },
  status: "published",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  createdBy: "1b22e833-5a6a-4349-a922-ef17115513ba",
  updatedBy: "1b22e833-5a6a-4349-a922-ef17115513ba",
  version: 1,
  language: "es",
  metadata: {
    seo: {
      title: "Testimonios de Clientes | Alquipos",
      description: "Conoce las experiencias de nuestros clientes con el servicio de alquiler de equipos y andamios de Alquipos",
      keywords: ["testimonios", "clientes satisfechos", "experiencias", "alquiler de equipos", "andamios"]
    },
    displaySettings: {
      showTitle: true,
      showSubtitle: true,
      showDescription: true,
      showCta: true,
      itemsPerPage: 3
    }
  },
  contentType: "section_header",
  displayOrder: 10
}; 