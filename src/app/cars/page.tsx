import { getAllCarsAction } from '@/src/features/cars/actions/get-all-cars'
import { CarGrid } from '@/src/features/cars/components/CarGrid'
import { CarsHeader } from '@/src/features/cars/components/CarsHeader'

export default async function CarsPage() {
	const cars = await getAllCarsAction()

	return (
		<div className='flex min-h-screen justify-center items-start bg-background py-8 flex-col gap-8'>
			<CarsHeader />
			<CarGrid cars={cars} />
			{cars.length === 0 && <h1 className='text-3xl font-bold'>Немає машин</h1>}
		</div>
	)
}
