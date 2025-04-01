import { ContactPageData } from '@/types/contact';

export const mockContactData: ContactPageData = {
  header: {
    id: '1',
    page_key: 'contact',
    section_key: 'header',
    content: {
      title: 'Contáctenos',
      subtitle: '¿Tiene alguna pregunta sobre nuestros servicios? Estamos aquí para ayudarle. Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.'
    },
    status: 'published',
    display_order: 1,
    language: 'es',
    version: 1
  },
  info: {
    id: '2',
    page_key: 'contact',
    section_key: 'info',
    content: {
      title: 'Información de Contacto',
      address: 'San José, Costa Rica',
      phone: '+506 8888-8888',
      email: 'contacto@alquipos.com',
      businessHours: {
        weekdays: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
        saturday: 'Sábados: 8:00 AM - 12:00 PM'
      }
    },
    status: 'published',
    display_order: 2,
    language: 'es',
    version: 1
  },
  social: {
    id: '3',
    page_key: 'contact',
    section_key: 'social',
    content: {
      title: 'Síguenos en Redes Sociales',
      socialMedia: {
        facebook: 'https://facebook.com/alquipos',
        instagram: 'https://instagram.com/alquipos',
        linkedin: 'https://linkedin.com/company/alquipos',
        whatsapp: 'https://wa.me/50688888888'
      }
    },
    status: 'published',
    display_order: 3,
    language: 'es',
    version: 1
  }
}; 