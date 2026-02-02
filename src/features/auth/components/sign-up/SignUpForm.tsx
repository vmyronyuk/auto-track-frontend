import { Email } from '@/src/components/Input/Email';
import { Name } from '@/src/components/Input/Name';
import { Password } from '@/src/components/Input/Password';
import { Car } from 'lucide-react';

export function SignUpForm() {
	return (
		<div className='border border-border rounded-md px-5.5 py-10 bg-card w-full max-w-md flex items-center justify-center'>
			<div className="flex flex-col justify-center items-center w-full">
				<Car className=' size-12 text-blue-500 bg-blue-950 mb-3 rounded-4xl p-2' />
				<h1 className='text-2xl '>Реєстрація</h1>
				<p className='text-sm text-muted-foreground pb-4 pt-4'>Cтворіть акаунт для управління автомобілями </p>
				<Name />
				<Email />
				<Password />
				<button className='rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground w-full' >Зараєструватись</button>
				<div className="pt-3">
					<p className='text-sm text-muted-foreground'>Вже є акаунт? <a href="/auth/login" className="text-primary underline ">Увійти </a></p>
				</div>
			</div>
		</div>
	)
}
