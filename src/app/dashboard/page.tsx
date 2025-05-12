'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { NAVIGATION } from '@/constants/routes';
import { rentalService, Rental } from '@/services/rental';

export default function DashboardPage() {
  const { user } = useApp();
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRentals = async () => {
      try {
        setIsLoading(true);
        console.log('Cargando alquileres desde dashboard');
        const { data, error } = await rentalService.getAll();
        
        if (error) {
          throw error;
        }
        
        setRentals(data || []);
        setError(null);
      } catch (err) {
        console.error('Error cargando alquileres:', err);
        setError('No se pudieron cargar los alquileres');
        setRentals([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadRentals();
  }, []);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

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
            <ul>
              {rentals.map(rental => (
                <li key={rental.id}>
                  Alquiler ID: {rental.id} - Estado: {rental.status}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 