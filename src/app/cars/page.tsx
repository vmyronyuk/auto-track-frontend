import { CarGrid } from '@/src/features/cars/components/CarGrid'
import { carsMock } from '@/src/features/cars/mocdata/MocCarData'

export default function CarsPage() {
	return (
		<div className='flex min-h-screen justify-center items-start bg-background py-8'>
			<CarGrid cars={carsMock} />
		</div>
	)
}
