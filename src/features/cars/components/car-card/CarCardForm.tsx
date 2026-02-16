import { CarCardHeader } from "../CarCardHeader";
import { CarYearBadge } from "../CarYearBadge";

type CarCardProps = {
    image: string
    year: number
    title: string
    description: string
    race: number
}


export function CarCardForm({ image, year, title, description, race, }: CarCardProps) {
    return (
        <div className='w-full flex flex-col gap-3'>
            <div className="relative w-full ">
                <CarYearBadge year={year} />
                <img src={image} alt={title} className="object-cover w-full " />
            </div>
 
            <CarCardHeader
                title={title}
                description={description}
                race={race}
            />
        </div>
    )
}