import { Logo } from '@/src/components/Logo'
import Link from 'next/link'
import { AuthCardWrapper } from '../AuthCardWrapper'
import { AuthHeadline } from '../AuthHeadline'
import { SignUpForm } from './SignUpForm'

export function SignUp() {
	return (
		<AuthCardWrapper>
			<div className='flex flex-col justify-center items-center w-full gap-3'>
				<Logo />
				<AuthHeadline
					title='Реєстрація'
					description='Cтворіть акаунт для управління автомобілями'
				/>
				<SignUpForm />
				<div className='flex items-center gap-1.5'>
					<p className='text-sm text-muted-foreground'>Вже є акаунт?</p>
					<Link href='/auth/login' className='text-primary underline mb-0.5'>
						Увійти
					</Link>
				</div>
			</div>
		</AuthCardWrapper>
	)
}
