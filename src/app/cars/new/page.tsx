import { CreateCar } from "@/src/features/cars/components/add-car/CreateCar";

export default function CreateCarPage() {
    return(
        <div className="flex min-h-screen justify-center items-center bg-background py-8 flex-col gap-8">
            <CreateCar/>
        </div>
    )

}