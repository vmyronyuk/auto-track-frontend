import Image from 'next/image'
import { GetCarDto } from '../../dtos/get-car.dto'
import { CarCardHeader } from './CarCardHeader'
import { CarCardWrapper } from './CarCardWrapper'
import { CarYearBadge } from './CarYearBadge'

type CarCardProps = {
	car: GetCarDto
}

const FALLBACK_IMAGE = '/default-car.jpg';

export function CarCard({ car }: CarCardProps) {
	return (
		<CarCardWrapper>
			<div className='w-full flex flex-col gap-3 '>
				<div className='relative aspect-video w-full'>
					<CarYearBadge year={car.year} />
					<Image
						src={car.imageUrl || FALLBACK_IMAGE}
						alt={car.model}
						className='object-cover w-full h-full rounded-t-xl border-b border-primary/25'
						width={500}
						height={500}
					/>
				</div>

				<CarCardHeader
					title={car.brand + ' ' + car.model}
					description={car.description ?? ''}
					mileage={car.mileage}
				/>
			</div>
		</CarCardWrapper>
	)
}
