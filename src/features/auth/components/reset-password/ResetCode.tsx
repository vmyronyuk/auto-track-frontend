'use client'

import { Input } from '@/src/components/ui/input'
import {
	useCallback,
	useMemo,
	useRef,
	type ClipboardEvent,
	type KeyboardEvent,
} from 'react'

export function ResetCode() {
	const codeSlots = useMemo(() => Array.from({ length: 6 }), [])
	const inputRefs = useRef<Array<HTMLInputElement | null>>([])

	const focusSlot = useCallback((index: number) => {
		const next = inputRefs.current[index]
		if (next) {
			next.focus()
			next.select()
		}
	}, [])

	const handleChange = useCallback(
		(index: number, value: string) => {
			const normalized = value.replace(/\D/g, '').slice(0, 1)
			const current = inputRefs.current[index]
			if (current && current.value !== normalized) {
				current.value = normalized
			}
			if (normalized && index < codeSlots.length - 1) {
				focusSlot(index + 1)
			}
		},
		[codeSlots.length, focusSlot],
	)

	const handleKeyDown = useCallback(
		(index: number, event: KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Backspace') {
				const current = inputRefs.current[index]
				if (current && current.value === '' && index > 0) {
					focusSlot(index - 1)
				}
			}
		},
		[focusSlot],
	)

	const handlePaste = useCallback(
		(event: ClipboardEvent<HTMLInputElement>) => {
			event.preventDefault()
			const raw = event.clipboardData.getData('text').replace(/\D/g, '')
			if (!raw) return
			const chars = raw.slice(0, codeSlots.length).split('')
			chars.forEach((char, index) => {
				const input = inputRefs.current[index]
				if (input) {
					input.value = char
				}
			})
			focusSlot(Math.min(chars.length, codeSlots.length - 1))
		},
		[codeSlots.length, focusSlot],
	)

	return (
		<div className='flex items-center justify-center gap-2'>
			{codeSlots.map((_, index) => (
				<Input
					key={`code-slot-${index}`}
					type='text'
					inputMode='numeric'
					maxLength={1}
					placeholder=''
					className='h-13 w-12 text-center text-xl font-bold px-0'
					aria-label={`Код позиція ${index + 1}`}
					ref={node => {
						inputRefs.current[index] = node
					}}
					onChange={event => handleChange(index, event.target.value)}
					onKeyDown={event => handleKeyDown(index, event)}
					onPaste={handlePaste}
				/>
			))}
		</div>
	)
}
