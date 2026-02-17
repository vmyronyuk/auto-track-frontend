import { ReactNode } from 'react'

type CarCardWrapperProps = {
    children: ReactNode
}

export function CarCardWrapper({ children }: CarCardWrapperProps) {
    return (
        <div className='border border-border rounded-2xl py-8  bg-card w-full max-w-md flex flex-col'>
            {children}
        </div>
    )
}