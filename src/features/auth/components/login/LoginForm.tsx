import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

export function LoginForm() {
	return (
		<div className='w-full flex flex-col gap-3'>
			<Field>
				<Label>Email</Label>
				<Input type='email' placeholder='user@example.com' />
			</Field>
			<Field>
				<Label>Пароль</Label>
				<Input type='password' placeholder='Password' />
			</Field>
			<Button>Увійти</Button>
		</div>
	)
}