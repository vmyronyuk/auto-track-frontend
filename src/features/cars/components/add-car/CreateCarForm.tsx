'use client'

import { CreateCarDto, CreateCarDtoScema } from "../../dtos/create-car.dto";
import { Field } from "@/src/components/Form/Field";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/Form/Label";
import { Button } from "@/src/components/ui/button";
import { Upload } from "lucide-react";
import Link from "next/link";

export function CreateCarForm() {
  return (
    <div className="flex flex-col gap-5 w-full ">
      <div>
        <h1 className='text-2xl font-semibold'>Додати новий автомобіль</h1>
        <p className='text-sm text-muted-foreground'>Заповніть інформацію про ваш автомобіль</p>
      </div>
      <div className="flex flex-col">
        <Label>Фото автомобіля</Label>
        <div className="border-2 border-dashed border-border rounded-lg p-10 flex flex-col items-center justify-center gap-2 cursor-pointer">
          <Upload className="w-8 h-8 text-muted-foreground" />
          <div className="flex flex-col items-center">
            <p className='text-sm text-muted-foreground'>Натисніть для завантаження фото</p><br />
            <p className='text-sm text-muted-foreground'>PNG, JPG до 5MB</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <Label>Марка*</Label>
          <Input
            type='text'
            placeholder='BMW, Mersedes, Audi...'
          />
        </Field>
        <Field>
          <Label>Модель*</Label>
          <Input
            className="w-full"
            type='text'
            placeholder='320i,C-Class,A4...'
          />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <Label>Рік випуску*</Label>
          <Input
            type='number'
            placeholder='2025'
          />
        </Field>
        <Field>
          <Label>Пробіг (км)*</Label>
          <Input
            type='number'
            placeholder='0'
          />
        </Field>
      </div>
      <div>
        <Field>
          <Label>Опис</Label>
          <textarea
            className='min-h-24 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            placeholder='Додаткова інформація про автомобіль '
          />
        </Field>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button className='rounded-sm flex-1'>Додати автомобіль</Button>
        <Link href='/cars' >
          <Button className='rounded-sm flex-1 bg-background text-white border border-input'>Скасувати</Button>
        </Link>
      </div>
    </div>
  )
}