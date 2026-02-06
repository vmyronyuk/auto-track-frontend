'use client'

import { Error } from '@/src/components/Form/Error'
import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signUpAction } from '../../actions/sign-up'
import { SignUpDto, SignUpDtoScema } from '../../dtos/sign-up.dto'

export function SignUpForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignUpDto>({
		mode: 'onChange',
		resolver: zodResolver(SignUpDtoScema),
	})

	const onSubmit = async (data: SignUpDto) => {
		await signUpAction(data)
		router.push('/auth/sign-in')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full flex flex-col gap-3'
		>
			<Field>
				<Label>Ім&apos;я</Label>
				<Input
					{...register('fullName')}
					type='text'
					placeholder='Назар Стахів'
				/>
				{errors.fullName?.message && <Error error={errors.fullName.message} />}
			</Field>
			<Field>
				<Label>Email</Label>
				<Input
					{...register('email')}
					type='email'
					placeholder='user@example.com'
				/>
				{errors.email?.message && <Error error={errors.email.message} />}
			</Field>
			<Field>
				<Label>Пароль</Label>
				<Input
					{...register('password')}
					type='password'
					placeholder='Password'
				/>
				{errors.password?.message && <Error error={errors.password.message} />}
			</Field>
			{errors.root?.message && (
				<p className='text-sm text-red-500'>{errors.root.message}</p>
			)}
			<Button type='submit' disabled={isSubmitting}>
				Зареєструватися
			</Button>
		</form>
	)
}
