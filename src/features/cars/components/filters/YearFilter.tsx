import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/src/components/ui/select'


export function YearFilter() {
    return (
        <div >
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder='Всі роки' />
                </SelectTrigger>
                <SelectContent position='popper'>
                    <SelectItem value='Year'>2025</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

