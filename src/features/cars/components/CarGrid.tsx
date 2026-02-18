import { Car } from '../types/car'
import { CarCard } from './car-card/CarCard'

type CarGridProps = {
	cars: Car[]
}

export function CarGrid({ cars }: CarGridProps) {
	return (
		<div className='grid items-ce gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3'>
			{cars.map(car => (
				<CarCard key={car.id} car={car} />
			))}
		</div>
	)
}
