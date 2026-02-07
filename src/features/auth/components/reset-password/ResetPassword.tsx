import { Logo } from '@/src/components/Logo'
import Link from 'next/link'
import { AuthCardWrapper } from '../AuthCardWrapper'
import { AuthHeadline } from '../AuthHeadline'
import { ResetPasswordForm } from './ResetPasswordForm'

export function ResetPassword() {
	return (
		<AuthCardWrapper>
			<div className='flex flex-col justify-center items-center w-full gap-3'>
				<Logo />
				<AuthHeadline
					title='Скидання пароля'
					description='Введіть код з листа та новий пароль'
				/>
				<ResetPasswordForm />
				<div className='flex flex-col items-center gap-2'>
					<p className='text-sm text-muted-foreground'>
						Не отримали код?
						<Link
							href='/auth/forgot-password'
							className='text-foreground underline'
						>
							{' '}
							Надіслати ще раз
						</Link>
					</p>
					<Link href='/auth/sign-in' className='text-sm text-muted-foreground'>
						⭠ Повернутись до входу
					</Link>
				</div>
			</div>
		</AuthCardWrapper>
	)
}
