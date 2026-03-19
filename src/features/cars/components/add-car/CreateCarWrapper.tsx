import { ReactNode } from "react"

type CreateCarWrapperProps = {
    children: ReactNode
}

export function CreateCarWrapper ({children}: CreateCarWrapperProps) {
    return (
 		<div className='border border-border rounded-md px-6 py-8 bg-card w-full max-w-xl flex items-center justify-center'>
            {children}
        </div>
    )
}