import Image from 'next/image'
import { Car } from '../../types/car'
import { CarCardHeader } from './CarCardHeader'
import { CarCardWrapper } from './CarCardWrapper'
import { CarYearBadge } from './CarYearBadge'

type CarCardProps = {
	car: Car
}

export function CarCard({ car }: CarCardProps) {
	return (
		<CarCardWrapper>
			<div className='w-full flex flex-col gap-3 '>
				<div className='relative aspect-video w-full'>
					<CarYearBadge year={car.year} />
					<Image
						src={car.image}
						alt={car.title}
						className='object-cover w-full h-full rounded-t-xl border-b border-primary/25'
						width={500}
						height={500}
					/>
				</div>

				<CarCardHeader
					title={car.title}
					description={car.description}
					mileage={car.mileage}
				/>
			</div>
		</CarCardWrapper>
	)
}
