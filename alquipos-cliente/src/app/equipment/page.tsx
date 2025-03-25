'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { equipmentService } from '@/services/supabase';
import { ROUTES } from '@/constants/routes';

interface Equipment {
  id: string;
  name: string;
  description: string;
  daily_price: number;
  image_url: string;
  availability: boolean;
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEquipment = async () => {
      try {
        const { data, error } = await equipmentService.getAll();
        if (error) throw error;
        setEquipment(data || []);
      } catch (err) {
        console.error('Error cargando equipos:', err);
        setError('No se pudieron cargar los equipos');
      } finally {
        setIsLoading(false);
      }
    };

    loadEquipment();
  }, []);

  if (isLoading) return <p>Cargando equipos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Equipos Disponibles</h1>
      
      <div>
        {equipment.length === 0 ? (
          <p>No hay equipos disponibles</p>
        ) : (
          <div>
            {equipment.map((item) => (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Precio diario: ${item.daily_price}</p>
                <Link href={ROUTES.EQUIPMENT_DETAIL(item.id)}>
                  Ver detalles
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 