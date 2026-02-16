import { Gauge } from 'lucide-react'

type CarCardHeadereProps = {
    title: string
    description: string
    race: number
}

export function CarCardHeader({ title, description ,race}: CarCardHeadereProps) {
    return (
        <div className="flex flex-col gap-2 px-4 py-4">
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
            <div className='flex items-end gap-2 '>
                <Gauge className='size-5 text-muted-foreground'/>
                <p className='text-sm text-muted-foreground'>{race} км</p>
            </div>
        </div>
    )
}