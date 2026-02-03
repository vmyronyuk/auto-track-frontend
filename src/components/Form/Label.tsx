import { ReactNode } from 'react'

type LabelProps = {
	children: ReactNode
}

export function Label({ children }: LabelProps) {
	return <label className='text-sm font-medium'>{children}</label>
}
