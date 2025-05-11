// Application routes
export const ROUTES = {
  // Public routes
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // Protected routes
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  
  // Equipment routes
  EQUIPMENT: '/equipment',
  EQUIPMENT_DETAIL: (id: string) => `/equipment/${id}`,
  
  // Rental routes
  RENTALS: '/rentals',
  RENTAL_DETAIL: (id: string) => `/rentals/${id}`,
  NEW_RENTAL: '/rentals/new',

  // Admin routes
  ADMIN: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_EQUIPMENT: '/admin/equipment',
  ADMIN_RENTALS: '/admin/rentals',
};

// Navigation items for different parts of the app
export const NAVIGATION = {
  // Main navigation items (public)
  MAIN: [
    { label: 'Inicio', path: ROUTES.HOME },
    { label: 'Equipos', path: ROUTES.EQUIPMENT },
    { label: 'Sobre Nosotros', path: ROUTES.ABOUT },
    { label: 'Contacto', path: ROUTES.CONTACT },
  ],
  
  // Dashboard navigation (authenticated users)
  DASHBOARD: [
    { label: 'Panel', path: ROUTES.DASHBOARD },
    { label: 'Alquileres', path: ROUTES.RENTALS },
    { label: 'Equipos', path: ROUTES.EQUIPMENT },
    { label: 'Perfil', path: ROUTES.PROFILE },
  ],
  
  // Admin navigation
  ADMIN: [
    { label: 'Panel', path: ROUTES.ADMIN },
    { label: 'Usuarios', path: ROUTES.ADMIN_USERS },
    { label: 'Equipos', path: ROUTES.ADMIN_EQUIPMENT },
    { label: 'Alquileres', path: ROUTES.ADMIN_RENTALS },
  ],
}; 