import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/src/components/ui/select'



export function BrandFilter() {
    return (
        <div>
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

