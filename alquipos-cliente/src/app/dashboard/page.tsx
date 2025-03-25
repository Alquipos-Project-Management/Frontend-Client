'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { NAVIGATION } from '@/constants/routes';
import { rentalService } from '@/services/supabase';

interface Rental {
  id: string;
  equipment_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  status: string;
  total_price: number;
}

export default function DashboardPage() {
  const { state } = useApp();
  const { user } = state;
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRentals = async () => {
      try {
        const { data } = await rentalService.getAll();
        setRentals(data || []);
      } catch (error) {
        console.error('Error cargando alquileres:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRentals();
  }, []);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Panel de Control</h1>
      
      {user && (
        <div>
          <p>Bienvenido, {user.name}</p>
        </div>
      )}
      
      <div>
        <h2>Menú</h2>
        <ul>
          {NAVIGATION.DASHBOARD.map((item) => (
            <li key={item.path}>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2>Resumen de Alquileres</h2>
        {rentals.length === 0 ? (
          <p>No tienes alquileres activos</p>
        ) : (
          <div>
            <p>Tienes {rentals.length} alquileres</p>
          </div>
        )}
      </div>
    </div>
  );
} 