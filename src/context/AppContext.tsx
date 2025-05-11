'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Interfaces
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AppState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<{success: boolean, error?: string}>;
  logout: () => void;
}

// Valor por defecto para el contexto
const defaultState: AppState = {
  isAuthenticated: false,
  user: null,
  login: async () => ({ success: false, error: 'No implementado' }),
  logout: () => {}
};

// Crear el contexto
export const AppContext = createContext<AppState>(defaultState);

// Hook personalizado para usar el contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};

// Proveedor del contexto
export function AppProvider({ children }: { children: ReactNode }) {
  // Estado de autenticación inicial
  const [state, setState] = useState<{
    isAuthenticated: boolean;
    user: User | null;
  }>({
    isAuthenticated: false,
    user: null,
  });

  // Función de login
  const login = async (email: string, password: string): Promise<{success: boolean, error?: string}> => {
    try {
      // Simulación de autenticación
      if (email === 'admin@example.com' && password === 'password') {
        const user = {
          id: '1',
          email,
          name: 'Administrador',
          role: 'admin',
        };
        
        setState({
          isAuthenticated: true,
          user,
        });
        
        return { success: true };
      }
      
      return { success: false, error: 'Credenciales inválidas' };
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: 'Error al iniciar sesión' };
    }
  };

  // Función de logout
  const logout = () => {
    setState({
      isAuthenticated: false,
      user: null,
    });
  };

  // Valor del contexto
  const value = {
    ...state,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
} 