import { CarCardWrapper } from '../CarCardWrapped'
import { CarCardForm } from './CarCardForm'

type Car = {
  id: string
  image: string
  year: number
  title: string
  description: string
  race: number
}

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
