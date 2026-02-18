import { CarGrid } from '@/src/features/cars/components/CarGrid'
import { CarsHeader } from '@/src/features/cars/components/CarsHeader'
import { carsMock } from '@/src/features/cars/mocdata/MocCarData'

export default function CarsPage() {
	return (
		<div className='flex min-h-screen justify-center items-start bg-background py-8 flex-col gap-8'>
			<CarsHeader />
			<CarGrid cars={carsMock} />
		</div>
	)
}
