import { ReactNode } from 'react'

type FieldProps = {
	children: ReactNode
}

export function Field({ children }: FieldProps) {
	return <div className='flex flex-col gap-1.5'>{children}</div>
}
