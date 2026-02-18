import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/src/components/ui/select'

export function CarsHeader() {
	return (
		<div className='w-full flex items-center gap-4'>
			<Select>
				<SelectTrigger>
					<SelectValue placeholder='Всі марки' />
				</SelectTrigger>
				<SelectContent position='popper'>
					<SelectItem value='Tesla'>Tesla</SelectItem>
					<SelectItem value='Audi'>Audi</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
