import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'

export function ForgotPasswordForm () {
    return(
        <div className='w-full flex flex-col gap-3'>
            <Field>
                <Label>Email</Label>
        <Input type='email' placeholder='user@example.com' />
            </Field>
            <Button>Надіслати код</Button>
        </div>
    )
}