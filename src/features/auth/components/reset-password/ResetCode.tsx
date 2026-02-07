'use client'

import { Input } from '@/src/components/ui/input'
import {
	useCallback,
	useMemo,
	useRef,
	useState,
	type ClipboardEvent,
	type KeyboardEvent,
} from 'react'

type ResetCodeProps = {
	length?: number
	onComplete?: (code: string) => boolean | Promise<boolean>
	onChange?: (code: string) => void
}

export function ResetCode({
	length = 6,
	onComplete,
	onChange,
}: ResetCodeProps) {
	const codeSlots = useMemo(() => Array.from({ length }), [length])
	const inputRefs = useRef<Array<HTMLInputElement | null>>([])
	const [values, setValues] = useState(() => Array.from({ length }, () => ''))
	const [status, setStatus] = useState<'valid' | 'invalid' | null>(null)
	const validationIdRef = useRef(0)

	const focusSlot = useCallback((index: number) => {
		const next = inputRefs.current[index]
		if (next) {
			next.focus()
			next.select()
		}
	}, [])

	const validateIfComplete = useCallback(
		async (nextValues: string[]) => {
			if (nextValues.some(value => value.length === 0)) {
				return
			}
			if (!onComplete) {
				return
			}
			const currentId = validationIdRef.current + 1
			validationIdRef.current = currentId
			const code = nextValues.join('')
			const result = await onComplete(code)
			if (validationIdRef.current === currentId) {
				setStatus(result ? 'valid' : 'invalid')
			}
		},
		[onComplete],
	)

	const handleChange = useCallback(
		(index: number, value: string) => {
			const normalized = value.replace(/\D/g, '').slice(0, 1)
			if (values[index] === normalized) {
				return
			}
			const nextValues = [...values]
			nextValues[index] = normalized
			setValues(nextValues)
			if (status) {
				setStatus(null)
			}
			validateIfComplete(nextValues)
			onChange?.(nextValues.join(''))
			if (normalized && index < codeSlots.length - 1) {
				focusSlot(index + 1)
			}
		},
		[codeSlots.length, focusSlot, onChange, status, validateIfComplete, values],
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
			const nextValues = [...values]
			chars.forEach((char, index) => {
				nextValues[index] = char
			})
			setValues(nextValues)
			if (status) {
				setStatus(null)
			}
			validateIfComplete(nextValues)
			onChange?.(nextValues.join(''))
			focusSlot(Math.min(chars.length, codeSlots.length - 1))
		},
		[codeSlots.length, focusSlot, onChange, status, validateIfComplete, values],
	)

	const statusClassName =
		status === 'valid'
			? 'border-emerald-500 focus-visible:border-emerald-500 focus-visible:ring-emerald-500'
			: status === 'invalid'
				? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive'
				: ''

	return (
		<div className='flex items-center justify-center gap-2'>
			{codeSlots.map((_, index) => (
				<Input
					key={`code-slot-${index}`}
					type='text'
					inputMode='numeric'
					maxLength={1}
					placeholder=''
					className={`h-13 w-12 text-center text-xl font-bold px-0 ${statusClassName}`}
					aria-label={`Код позиція ${index + 1}`}
					ref={node => {
						inputRefs.current[index] = node
					}}
					onChange={event => handleChange(index, event.target.value)}
					onKeyDown={event => handleKeyDown(index, event)}
					onPaste={handlePaste}
					value={values[index]}
				/>
			))}
		</div>
	)
}
