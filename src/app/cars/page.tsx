'use client'

import { useEffect, useState } from 'react'
import { CarGrid } from '@/src/features/cars/components/CarGrid'
import { CarsHeader } from '@/src/features/cars/components/CarsHeader'
import { Car } from '@/src/features/cars/types/car'
import { carsService } from '@/src/features/cars/api/cars.service'

export default function CarsPage() {
    const [cars, setCars] = useState<Car[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadCars = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const data = await carsService.getAll()
                setCars(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        loadCars()
    }, [])

    if (isLoading) return <div className="p-10 text-center">Loading..</div>
    if (error) return <div className="p-10 text-red-500 text-center">{error}</div>

    return (
        <div className='flex min-h-screen items-start bg-background py-8 flex-col gap-8'>
            <CarsHeader />
            {cars.length > 0 ? (
                <CarGrid cars={cars} />
            ) : (
                <div className="flex flex-col items-center justify-center w-full py-20 opacity-60">
                    <h1>Car not found for this user but you can create one</h1>
                </div>
            )}
        </div>
    )
}