import { CarCardWrapper } from '../CarCardWrapped'
import { CarCardForm } from './CarCardForm'
import { Car } from '../../types/car'

type CarCardProps = {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
    return (
        <CarCardWrapper>
            <CarCardForm {...car}/>
        </CarCardWrapper>
    )
}
