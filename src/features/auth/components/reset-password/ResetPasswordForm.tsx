'use client'

import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { ResetCode } from './ResetCode'

export function ResetPasswordForm() {
	const handleCodeComplete = async (code: string) => {
		// TODO: replace with API validation
		return code === '123456'
	}

	return (
		<div className='w-full flex flex-col gap-3'>
			<Field>
				<Label>Email</Label>
				<Input type='email' placeholder='user@example.com' />
			</Field>
			<Field>
				<Label>Код підтвердження</Label>
				<ResetCode onComplete={handleCodeComplete} />
				<p className='text-xs  text-muted-foreground text-center'>
					Введіть 6-значний код з email
				</p>
			</Field>
			<Field>
				<Label>Новий пароль</Label>
				<Input type='password' placeholder='Мінімум 6 символів' />
			</Field>
			<Field>
				<Label>Підтвердіть пароль</Label>
				<Input type='password' placeholder='Повторіть новий пароль' />
			</Field>
			<Button>Змінити пароль</Button>
		</div>
	)
}
