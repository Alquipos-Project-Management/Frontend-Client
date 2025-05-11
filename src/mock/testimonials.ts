import { TestimonialProps } from '@/components/molecules/TestimonialCard';

export const mockTestimonials: TestimonialProps[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    role: 'Constructor',
    text: 'Los andamios que alquilamos en Alquipos fueron de excelente calidad. El equipo nos permitió completar nuestro proyecto de construcción de manera segura y eficiente. El servicio de entrega fue puntual y el equipo llegó en perfectas condiciones. Definitivamente volveremos a trabajar con ellos en futuros proyectos.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80',
    specs: [
      { text: 'Andamios' },
      { text: 'Construcción' },
      { text: 'Servicio Puntual' }
    ],
    submittedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    approvedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
    userId: '9bebe2c4-63f7-4b63-82a2-992293387580',
    relatedEntityType: 'products',
    relatedEntityId: '9e1edbe9-aa2a-41f2-8cb6-2a0aa4fb6a91',
    location: 'Tegucigalpa, Honduras',
    isFeatured: true,
    displayOrder: 100
  },
  {
    id: '2',
    name: 'María González',
    role: 'Diseñadora de Interiores',
    text: 'Las torres móviles son perfectas para nuestros proyectos de remodelación interior. Son ligeras, fáciles de transportar y ofrecen toda la seguridad que necesitamos. El proceso de alquiler con Alquipos fue muy sencillo y su equipo siempre estuvo disponible para resolver cualquier duda.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80',
    specs: [
      { text: 'Torres Móviles' },
      { text: 'Remodelación' },
      { text: 'Seguridad' }
    ],
    submittedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    approvedAt: new Date(Date.now() - 42 * 24 * 60 * 60 * 1000).toISOString(),
    userId: '9bebe2c4-63f7-4b63-82a2-992293387580',
    relatedEntityType: 'products',
    relatedEntityId: '9e1edbe9-aa2a-41f2-8cb6-2a0aa4fb6a91',
    location: 'San Pedro Sula, Honduras',
    isFeatured: false,
    displayOrder: 200
  },
  {
    id: '3',
    name: 'Carlos Mendoza',
    role: 'Director de Proyectos',
    text: 'Llevamos más de 5 años trabajando con Alquipos para todos nuestros proyectos de construcción. La calidad de sus equipos y su profesionalismo han sido constantes a lo largo de los años. Su variedad de andamios nos permite encontrar siempre la solución adecuada para cada proyecto, sin importar su complejidad.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    specs: [
      { text: 'Experiencia' },
      { text: 'Profesionalismo' },
      { text: 'Variedad de Equipos' }
    ],
    submittedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    approvedAt: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString(),
    userId: '9bebe2c4-63f7-4b63-82a2-992293387580',
    relatedEntityType: 'categories',
    relatedEntityId: '9e1edbe9-aa2a-41f2-8cb6-2a0aa4fb6a91',
    location: 'Tegucigalpa, Honduras',
    isFeatured: true,
    displayOrder: 150
  }
]; 