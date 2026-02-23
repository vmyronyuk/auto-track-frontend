'use client'

import { Search } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import { BrandFilter } from './BrandFilter'
import { YearFilter } from './YearFilter'
import { Button } from '@/src/components/ui/button'

export function CarsFilters() {
    return (
        <div className="flex w-full items-center justify-start gap-6">
            <div className="flex-1 min-w-190 max-w-240 relative ">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Пошук за маркою або моделлю..."
                    className="pl-10 h-10 "
                />
            </div>
            <BrandFilter/>
            <YearFilter/>
            <Button className='w-40 rounded-sm'>+  Додати машину</Button>
        </div>
    )
}