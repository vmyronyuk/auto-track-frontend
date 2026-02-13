'use client'

import { Error } from '@/src/components/Form/Error'
import { Field } from '@/src/components/Form/Field'
import { Label } from '@/src/components/Form/Label'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { forgotPasswordAction } from '../../actions/forgot-password'
import { ForgotPasswordDto, ForgotPasswordDtoSchema } from '../../dtos/forgot-password.dto'

export function ForgotPasswordForm() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordDto>({
        resolver: zodResolver(ForgotPasswordDtoSchema)
    })

    const onSubmit = async (data: ForgotPasswordDto) => {
        await forgotPasswordAction(data)
        
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
                        placeholder='user@example.com'
                    />
                    {errors.email?.message && <Error error={errors.email.message} />}
                </Field>
                <Button type='submit' disabled={isSubmitting}>
                    Надіслати код
                </Button>
            </div>
        </form>
    )
}