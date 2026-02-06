type ErrorProps = {
	error: string
}

export function Error({ error }: ErrorProps) {
	return <p className='text-sm text-red-500'>{error}</p>
}
