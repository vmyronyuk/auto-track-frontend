import { apiClient } from '@/src/lib/api-client';
import { Car } from '../types/car';

export const carsService = {
    getAll: () => apiClient.get<Car[]>('/cars'),
    getById: (id: string) => apiClient.get<Car>(`/cars/${id}`),
};