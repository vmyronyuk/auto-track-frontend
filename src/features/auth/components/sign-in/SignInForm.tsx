'use client'

import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Error } from '@/src/components/Form/Error'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { signInAction } from '../../actions/sign-in'
import { SignInDto, SignInDtoScema } from '../../dtos/sign-in.dto'
import { setAuthToken } from '@/src/lib/authToken'

export function SignInForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignInDto>({
		mode: 'onChange',
		resolver: zodResolver(SignInDtoScema),
	})

	const onSubmit = async (data: SignInDto) => {
		const { accessToken } = await signInAction(data)
		setAuthToken(accessToken)
		router.push('/cars')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full flex flex-col gap-3'
		>
			<div className='w-full flex flex-col gap-3'>
				<Field>
					<Label>Email</Label>
					<Input
						{...register('email')}
						type='email'
						placeholder='user@example.com' />
					{errors.email?.message && <Error error={errors.email.message} />}
				</Field>
				<Field>
					<Label>Пароль</Label>
					<Input
						{...register('password')}
						type='password'
						placeholder='Password' />
					{errors.password?.message && <Error error={errors.password.message} />}
				</Field>
				{errors.root?.message && (
					<p className=' text-sm text-red-500'>{errors.root.message}</p>
				)}
				<Button type='submit' disabled={isSubmitting}>
					Увійти
				</Button>
			</div>
		</form>
	)
}