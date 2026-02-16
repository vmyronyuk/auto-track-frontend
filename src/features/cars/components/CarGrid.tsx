import { Car } from '../types/car'
import { CarCard } from './car-card/CarCard'

type CarGridProps = {
  cars: Car[]
}

export function CarGrid({ cars }: CarGridProps) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 pl-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}
