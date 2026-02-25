import { requireApiBase } from './requireApiBase';
import { getAuthHeader } from '@/src/features/cars/api/getAuthHeader'; // шлях до твого файлу

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = requireApiBase();
    const headers = {
        'Content-Type': 'application/json',
        ...getAuthHeader(), // Твій обов'язковий токен через функцію
        ...options.headers,
    };

    const config = {
        ...options,
        headers,
    };

    try {
        const response = await fetch(`${baseUrl}${endpoint}`, config);

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData || `Помилка: ${response.status}`);
        }

        // Якщо сервер повертає порожній контент (204 No Content)
        if (response.status === 204) return {} as T;

        return await response.json();
    } catch (error: any) {
        // Обробка NetworkError (CORS, вимкнений сервер)
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            throw new Error('Сервер недоступний. Перевірте CORS або з’єднання.');
        }
        throw error;
    }
}

export const apiClient = {
    get: <T>(url: string, options?: RequestInit) => request<T>(url, { ...options, method: 'GET' }),
    post: <T>(url: string, body: any, options?: RequestInit) => 
        request<T>(url, { ...options, method: 'POST', body: JSON.stringify(body) }),
    // додай put, delete за аналогією
};