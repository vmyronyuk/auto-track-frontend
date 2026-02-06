import { Logo } from '@/src/components/Logo'
import Link from 'next/link'
import { AuthCardWrapper } from '../AuthCardWrapper'
import { AuthHeadline } from '../AuthHeadline'
import { SignInForm } from './SignInForm'

export function SignIn() {
	return (
		<AuthCardWrapper>
			<div className='flex flex-col justify-center items-center w-full gap-3'>
				<Logo />
				<AuthHeadline
					title='Вхід'
					description='Увійдіть, щоб керувати вашими автомобілями'
				/>
				<SignInForm />
				<div className='flex items-center gap-1.5'>
					<p className='text-sm text-muted-foreground'>Немає акаунту? </p>
					<Link href='/auth/sign-up' className='text-primary underline mb-0.5'>
						Зареєструватись
					</Link>
				</div>
			</div>
		</AuthCardWrapper>
	)
}
