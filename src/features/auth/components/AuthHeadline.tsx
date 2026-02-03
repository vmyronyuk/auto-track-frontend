type AuthHeadlineProps = {
	title: string
	description: string
}

export function AuthHeadline({ title, description }: AuthHeadlineProps) {
	return (
		<div className='flex flex-col items-center gap-2'>
			<h1 className='text-2xl font-semibold'>{title}</h1>
			<p className='text-sm text-muted-foreground'>{description}</p>
		</div>
	)
}
