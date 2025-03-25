'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface AppState {
  // Add global state properties here
  isAuthenticated: boolean;
  user: User | null;
  // Add more state as needed
}

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Define the shape of the context value
interface AppContextValue {
  state: AppState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  // Add more methods as needed
}

// Create the context with a default value
const AppContext = createContext<AppContextValue | undefined>(undefined);

// Initial state
const initialState: AppState = {
  isAuthenticated: false,
  user: null,
};

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      // This will be implemented with Supabase later
      console.log('Login with:', email, password);
      
      // Mock successful login for now
      setState({
        ...state,
        isAuthenticated: true,
        user: {
          id: '1',
          email,
          name: 'Usuario Demo',
          role: 'client',
        },
      });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    // This will be implemented with Supabase later
    setState({
      ...state,
      isAuthenticated: false,
      user: null,
    });
  };

  const value = {
    state,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook for using the auth context
export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  
  return context;
} 