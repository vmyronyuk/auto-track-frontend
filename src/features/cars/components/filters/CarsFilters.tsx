'use client'

import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { BrandFilter } from './BrandFilter'
import { YearFilter } from './YearFilter'
import Link from 'next/link'

export function CarsFilters() {
	return (
		<div className='flex w-full flex-col md:flex-row items-center justify-start gap-4'>
			<Input placeholder='Пошук за маркою або моделлю...' />

			<div className='flex gap-4 w-full sm:flex-row flex-col'>
				<div className='flex gap-4 items-center justify-center'>
					<BrandFilter />
					<YearFilter />
				</div>
				<Link href='/cars/new' >
					<Button className='rounded-sm flex-1'>+ Додати машину</Button>
				</Link>
			</div>
		</div>
	)
}
