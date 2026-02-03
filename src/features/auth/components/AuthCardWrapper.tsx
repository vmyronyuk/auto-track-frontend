import { ReactNode } from 'react'

type AuthCardWrapperProps = {
	children: ReactNode
}

export function AuthCardWrapper({ children }: AuthCardWrapperProps) {
	return (
		<div className='border border-border rounded-md px-6 py-8 bg-card w-full max-w-md flex items-center justify-center'>
			{children}
		</div>
	)
}
