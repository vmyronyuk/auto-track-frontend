import { GetCarsDto } from '../dtos/get-car.dto'
import { CarCard } from './car-card/CarCard'

type CarGridProps = {
	cars: GetCarsDto
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
