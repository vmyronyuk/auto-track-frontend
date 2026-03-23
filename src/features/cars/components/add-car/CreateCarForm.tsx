'use client'

import { CreateCarDto, CreateCarDtoScema } from "../../dtos/create-car.dto";
import { Field } from "@/src/components/Form/Field";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/Form/Label";
import { Button } from "@/src/components/ui/button";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Error } from "@/src/components/Form/Error";
import { useRouter } from "next/navigation";
import { CreateCarAction } from "../../actions/create-car";

export function CreateCarForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCarDto>({
    mode: 'onChange',
    resolver: zodResolver(CreateCarDtoScema)
  })

  const onSubmit = async (data: CreateCarDto) => {
    await CreateCarAction(data);
    router.push('/cars')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex flex-col gap-3'
    >
      <div className="flex flex-col gap-5 w-full ">
        <div>
          <h1 className='text-2xl font-semibold'>Додати новий автомобіль</h1>
          <p className='text-sm text-muted-foreground'>Заповніть інформацію про ваш автомобіль</p>
        </div>
        <div className="flex flex-col">
          <Label>Фото автомобіля</Label>
          <div className="relative border-2 border-dashed border-border rounded-lg p-10 flex flex-col items-center justify-center gap-2 ">
            <Upload className="w-8 h-8 text-muted-foreground" />
            <div className="flex flex-col items-center">
              <p className='text-sm text-muted-foreground'>Натисніть для завантаження фото</p><br />
              <p className='text-sm text-muted-foreground'>PNG, JPG до 5MB</p>
            </div>
            <Input
              type="file"
              accept=".jpg, .png" 
              //{...register("imageUrl")}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Label>Марка*</Label>
            <Input
              {...register('brand')}
              type='text'
              placeholder='BMW, Mersedes, Audi...'
            />
            {errors.brand?.message && <Error error={errors.brand.message} />}
          </Field>
          <Field>
            <Label>Модель*</Label>
            <Input
              {...register("model")}
              type='text'
              placeholder='320i,C-Class,A4...'
            />
            {errors.model?.message && <Error error={errors.model.message} />}
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Label>Рік випуску*</Label>
            <Input
              {...register("year", { valueAsNumber: true })}
              type='number'
              placeholder='2025'
            />
            {errors.year?.message && <Error error={errors.year.message} />}
          </Field>
          <Field>
            <Label>Пробіг (км)*</Label>
            <Input
              {...register("mileage", { valueAsNumber: true })}
              type='number'
              placeholder='0'
            />
            {errors.mileage?.message && <Error error={errors.mileage.message} />}
          </Field>
        </div>
        <div>
          <Field>
            <Label>Ціна</Label>
            <Input
              {...register("price", { valueAsNumber: true })}
              type='number'
              placeholder='0'
            />
            {errors.price?.message && <Error error={errors.price.message} />}
          </Field>
        </div>
        <div>
          <Field>
            <Label>Опис</Label>
            <textarea
              {...register("description")}
              className='min-h-24 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              placeholder='Додаткова інформація про автомобіль '
            />
            {errors.description?.message && <Error error={errors.description.message} />}
          </Field>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button className='rounded-sm flex-1'>Додати автомобіль</Button>
          <Link href='/cars' >
            <Button className='rounded-sm flex-1 bg-background text-white border border-input'>Скасувати</Button>
          </Link>
        </div>
      </div>
    </form>
  )
}