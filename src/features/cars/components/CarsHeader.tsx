import { CarsFilters } from './filters/CarsFilters'

export function CarsHeader() {
	return (
		<div className='w-full flex '>
			<CarsFilters />
		</div>
	)
}
