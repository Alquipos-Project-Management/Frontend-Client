import { Category, Product } from "../types/product";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Excavadoras",
    slug: "excavadoras",
    description: "Maquinaria para excavación y movimiento de tierra",
    level: 1,
    is_active: true,
    display_order: 1,
    icon: "shovel",
    url: { url: "/images/categories/excavadoras.jpg" },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c2",
    name: "Compactadoras",
    slug: "compactadoras",
    description: "Equipos para compactación de tierra y materiales",
    level: 1,
    is_active: true,
    display_order: 2,
    icon: "roller",
    url: { url: "/images/categories/compactadoras.jpg" },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c3",
    name: "Grúas",
    slug: "gruas",
    description: "Grúas para elevación de materiales pesados",
    level: 1,
    is_active: true,
    display_order: 3,
    icon: "crane",
    url: { url: "/images/categories/gruas.jpg" },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "c4",
    name: "Andamios",
    slug: "andamios",
    description: "Sistemas de andamios para construcción",
    level: 1,
    is_active: true,
    display_order: 4,
    icon: "scaffold",
    url: { url: "/images/categories/andamios.jpg" },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Excavadora CAT 320",
    slug: "excavadora-cat-320",
    description: "Excavadora de 20 toneladas con alcance extendido ideal para proyectos medianos y grandes. Equipada con motor diésel de alta eficiencia y sistema hidráulico avanzado.",
    short_description: "Excavadora de 20 toneladas con alcance extendido",
    category_id: "c1",
    sku: "EXC-CAT-320",
    price: 350000,
    sale_price: 330000,
    price_unit: "día",
    show_price: true,
    is_featured: true,
    is_active: true,
    is_rental: true,
    is_available: true,
    min_rental_period: 1,
    rental_period_unit: "días",
    attributes: {
      potencia: "150hp",
      peso: "20 toneladas",
      capacidad_cuchara: "1.5m³"
    },
    tags: ["excavación", "movimiento de tierra", "construcción"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: categories[0],
    images: [
      {
        id: "i1",
        product_id: "p1",
        url: "/images/products/excavadora-cat-320-1.jpg",
        alt: "Excavadora CAT 320 vista lateral",
        is_primary: true,
        display_order: 1
      },
      {
        id: "i2",
        product_id: "p1",
        url: "/images/products/excavadora-cat-320-2.jpg",
        alt: "Excavadora CAT 320 en obra",
        is_primary: false,
        display_order: 2
      }
    ]
  },
  {
    id: "p2",
    name: "Retroexcavadora JCB 3CX",
    slug: "retroexcavadora-jcb-3cx",
    description: "Retroexcavadora JCB 3CX con tracción 4x4 y sistema de estabilizadores. Perfecta para trabajos urbanos y espacios reducidos.",
    short_description: "Retroexcavadora versátil para múltiples aplicaciones",
    category_id: "c1",
    sku: "RET-JCB-3CX",
    price: 250000,
    price_unit: "día",
    show_price: true,
    is_featured: true,
    is_active: true,
    is_rental: true,
    is_available: true,
    min_rental_period: 1,
    rental_period_unit: "días",
    attributes: {
      potencia: "92hp",
      peso: "8 toneladas",
      capacidad_cuchara: "1.0m³"
    },
    tags: ["retroexcavadora", "movimiento de tierra", "construcción"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: categories[0],
    images: [
      {
        id: "i3",
        product_id: "p2",
        url: "/images/products/retroexcavadora-jcb-3cx-1.jpg",
        alt: "Retroexcavadora JCB 3CX",
        is_primary: true,
        display_order: 1
      }
    ]
  },
  {
    id: "p3",
    name: "Compactador Vibratorio BOMAG BW211D-40",
    slug: "compactador-vibratorio-bomag-bw211d-40",
    description: "Compactador vibratorio de suelos con alta capacidad de compactación. Sistema de vibración ajustable y cabina ergonómica.",
    short_description: "Compactador para grandes proyectos de infraestructura",
    category_id: "c2",
    sku: "COM-BOMAG-BW211",
    price: 180000,
    price_unit: "día",
    show_price: true,
    is_featured: false,
    is_active: true,
    is_rental: true,
    is_available: true,
    min_rental_period: 1,
    rental_period_unit: "días",
    attributes: {
      potencia: "130hp",
      peso: "12 toneladas",
      ancho_rodillo: "2.1m"
    },
    tags: ["compactación", "construcción de carreteras"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: categories[1],
    images: [
      {
        id: "i4",
        product_id: "p3",
        url: "/images/products/compactador-bomag-1.jpg",
        alt: "Compactador BOMAG BW211D-40",
        is_primary: true,
        display_order: 1
      }
    ]
  },
  {
    id: "p4",
    name: "Grúa Torre Liebherr 85 EC-B",
    slug: "grua-torre-liebherr-85-ec-b",
    description: "Grúa torre con alcance de 50 metros y capacidad de carga de 5 toneladas en punta. Ideal para edificación en altura.",
    short_description: "Grúa torre para construcción de edificios",
    category_id: "c3",
    sku: "GRU-LIEB-85ECB",
    price: 500000,
    price_unit: "mes",
    show_price: true,
    is_featured: true,
    is_active: true,
    is_rental: true,
    is_available: true,
    min_rental_period: 1,
    rental_period_unit: "meses",
    attributes: {
      altura_maxima: "60m",
      alcance: "50m",
      capacidad_carga: "5 toneladas en punta"
    },
    tags: ["grúa", "elevación", "edificación"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: categories[2],
    images: [
      {
        id: "i5",
        product_id: "p4",
        url: "/images/products/grua-liebherr-1.jpg",
        alt: "Grúa Torre Liebherr 85 EC-B",
        is_primary: true,
        display_order: 1
      }
    ]
  },
  {
    id: "p5",
    name: "Sistema de Andamios Multidireccional PERI UP",
    slug: "andamios-peri-up",
    description: "Sistema de andamios multidireccional PERI UP para trabajos en altura. Modular, seguro y versátil.",
    short_description: "Andamios multidireccionales para todo tipo de obras",
    category_id: "c4",
    sku: "AND-PERI-UP",
    price: 80000,
    price_unit: "mes",
    show_price: true,
    is_featured: false,
    is_active: true,
    is_rental: true,
    is_available: true,
    min_rental_period: 1,
    rental_period_unit: "meses",
    attributes: {
      capacidad_carga: "300kg/m²",
      modular: true,
      certificacion: "EN 12810"
    },
    tags: ["andamios", "trabajos en altura", "seguridad"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category: categories[3],
    images: [
      {
        id: "i6",
        product_id: "p5",
        url: "/images/products/andamios-peri-1.jpg",
        alt: "Andamios PERI UP",
        is_primary: true,
        display_order: 1
      }
    ]
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category_id === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
} 