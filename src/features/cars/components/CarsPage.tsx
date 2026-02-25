'use client'

import { useEffect, useState } from 'react'
import { Car } from '../types/car'
import { CarsHeader } from './CarsHeader'
import { CarGrid } from './CarGrid'
import { getCars } from '../api/GetCars'

export function CarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCars()
      .then(setCars)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="flex min-h-screen flex-col gap-8 py-8">
      <CarsHeader />
      <CarGrid cars={cars} />
    </div>
  )
}