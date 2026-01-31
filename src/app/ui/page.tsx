export default function UiPage() {
	const swatches = [
		{ name: 'Background', varName: '--background' },
		{ name: 'Foreground', varName: '--foreground' },
		{ name: 'Card', varName: '--card' },
		{ name: 'Card Foreground', varName: '--card-foreground' },
		{ name: 'Primary', varName: '--primary' },
		{ name: 'Primary Foreground', varName: '--primary-foreground' },
		{ name: 'Secondary', varName: '--secondary' },
		{ name: 'Secondary Foreground', varName: '--secondary-foreground' },
		{ name: 'Muted', varName: '--muted' },
		{ name: 'Muted Foreground', varName: '--muted-foreground' },
		{ name: 'Accent', varName: '--accent' },
		{ name: 'Accent Foreground', varName: '--accent-foreground' },
		{ name: 'Destructive', varName: '--destructive' },
		{ name: 'Destructive Foreground', varName: '--destructive-foreground' },
		{ name: 'Border', varName: '--border' },
		{ name: 'Input', varName: '--input' },
		{ name: 'Ring', varName: '--ring' },
	]

	return (
		<main className='min-h-screen bg-black/50 text-foreground'>
			<div className='mx-auto w-full max-w-6xl px-6 py-12'>
				<header className='mb-10'>
					<p className='text-sm uppercase tracking-[0.25em] text-muted-foreground'>
						UI Style Guide
					</p>
				</header>

				<section className='mb-12'>
					<div className='mb-4 flex items-center justify-between'>
						<h2 className='text-2xl font-semibold'>Кольори</h2>
						<span className='text-sm text-muted-foreground'>
							tokens: CSS variables
						</span>
					</div>
					<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{swatches.map(swatch => (
							<div
								key={swatch.varName}
								className='rounded-2xl border border-border bg-card p-4'
							>
								<div
									className='h-24 w-full rounded-xl'
									style={{ background: `var(${swatch.varName})` }}
								/>
								<div className='mt-3'>
									<div className='text-sm text-muted-foreground'>
										{swatch.varName}
									</div>
									<div className='text-base font-medium'>{swatch.name}</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className='mb-12 grid gap-6 lg:grid-cols-2'>
					<div className='rounded-2xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold'>Типографіка</h3>
						<p className='mt-3 text-sm text-muted-foreground'>
							Приклади розмірів і ієрархії.
						</p>
						<div className='mt-6 space-y-3'>
							<div className='text-4xl font-semibold'>Heading 1</div>
							<div className='text-3xl font-semibold'>Heading 2</div>
							<div className='text-2xl font-medium'>Heading 3</div>
							<div className='text-base'>Body text</div>
							<div className='text-sm text-muted-foreground'>
								Secondary / helper text
							</div>
						</div>
					</div>

					<div className='rounded-2xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold'>Кнопки</h3>
						<p className='mt-3 text-sm text-muted-foreground'>
							Візуальні приклади станів.
						</p>
						<div className='mt-6 flex flex-wrap gap-3'>
							<button className='rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground'>
								Primary
							</button>
							<button className='rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground'>
								Secondary
							</button>
							<button className='rounded-full bg-muted px-5 py-2 text-sm font-medium text-muted-foreground'>
								Muted
							</button>
							<button className='rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground'>
								Accent
							</button>
							<button className='rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground'>
								Ghost
							</button>
							<button className='rounded-full bg-destructive px-5 py-2 text-sm font-medium text-destructive-foreground'>
								Destructive
							</button>
						</div>
					</div>
				</section>

				<section className='grid gap-6 lg:grid-cols-2'>
					<div className='rounded-2xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold'>Поля вводу</h3>
						<p className='mt-3 text-sm text-muted-foreground'>
							Приклад базового інпута та стану фокусу.
						</p>
						<div className='mt-6 space-y-3'>
							<input
								className='w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
								placeholder='Введіть текст'
							/>
							<textarea
								className='min-h-24 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
								placeholder='Коментар'
							/>
						</div>
					</div>

					<div className='rounded-2xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold'>Повідомлення</h3>
						<p className='mt-3 text-sm text-muted-foreground'>
							Семантичні блоки для станів.
						</p>
						<div className='mt-6 space-y-3'>
							<div className='rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-secondary-foreground'>
								Info: базова підказка або статус.
							</div>
							<div className='rounded-xl border border-border bg-accent px-4 py-3 text-sm text-accent-foreground'>
								Accent: підсвітити важливе.
							</div>
							<div className='rounded-xl border border-border bg-destructive px-4 py-3 text-sm text-destructive-foreground'>
								Error: повідомлення про помилку.
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}
