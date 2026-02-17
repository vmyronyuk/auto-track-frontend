import { carsMock } from '../mocdata/MocCarData'
import { CarGrid } from '../components/CarGrid'

export function CarsPage() {
  return (
    <section className="container mx-auto py-8 px-8 ">
      <CarGrid cars={carsMock} />
    </section>
  )
}
