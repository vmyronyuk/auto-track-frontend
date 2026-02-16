import { CarCardHeader } from "../CarCardHeader";
import { CarYearBadge } from "../CarYearBadge";
import { Car } from "../../types/car";

export function CarCardForm({ image, year, title, description, mileage, }: Car) {
    return (
        <div className='w-full flex flex-col gap-3 '>
            <div className="relative aspect-video w-full">
                <CarYearBadge year={year} />
                <img src={image} alt={title} className="object-cover w-full h-full " />
            </div>
 
            <CarCardHeader
                title={title}
                description={description}
                mileage={mileage}
            />
        </div>
    )
}