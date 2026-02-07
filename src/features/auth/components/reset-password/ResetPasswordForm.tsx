'use client'

import { Error } from '@/src/components/Form/Error'
import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { resetPasswordAction } from '../../actions/reset-password'
import {
	ResetPasswordDto,
	ResetPasswordDtoSchema,
} from '../../dtos/reset-password.dto'
import { ResetCode } from './ResetCode'

export function ResetPasswordForm() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<ResetPasswordDto>({
		mode: 'onChange',
		resolver: zodResolver(ResetPasswordDtoSchema),
		defaultValues: {
			email: '',
			code: '',
			newPassword: '',
			confirmPassword: '',
		},
	})

	const onSubmit = async (data: ResetPasswordDto) => {
		await resetPasswordAction({
			email: data.email,
			code: data.code,
			newPassword: data.newPassword,
		})
		router.push('/auth/sign-in')
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full flex flex-col gap-3'
		>
			<Field>
				<Label>Email</Label>
				<Input {...register('email')} type='email' placeholder='user@example.com' />
				{errors.email?.message && <Error error={errors.email.message} />}
			</Field>
			<Field>
				<Label>Код підтвердження</Label>
				<ResetCode
					onChange={value => {
						setValue('code', value, { shouldValidate: true })
					}}
				/>
				<p className='text-xs  text-muted-foreground text-center'>
					Введіть 6-значний код з email
				</p>
				{errors.code?.message && <Error error={errors.code.message} />}
			</Field>
			<Field>
				<Label>Новий пароль</Label>
				<Input
					{...register('newPassword')}
					type='password'
					placeholder='Мінімум 6 символів'
				/>
				{errors.newPassword?.message && (
					<Error error={errors.newPassword.message} />
				)}
			</Field>
			<Field>
				<Label>Підтвердіть пароль</Label>
				<Input
					{...register('confirmPassword')}
					type='password'
					placeholder='Повторіть новий пароль'
				/>
				{errors.confirmPassword?.message && (
					<Error error={errors.confirmPassword.message} />
				)}
			</Field>
			{errors.root?.message && (
				<p className='text-sm text-red-500'>{errors.root.message}</p>
			)}
			<Button type='submit' disabled={isSubmitting}>
				Змінити пароль
			</Button>
		</form>
	)
}
