import { AuthCardWrapper } from "../AuthCardWrapper"
import { AuthHeadline } from "../AuthHeadline"
import { Logo } from '@/src/components/Logo'
import { ForgotPasswordForm } from "./ForgotPasswordForm"
import Link from 'next/link'

export function ForgotPassword() {
    return (
        <AuthCardWrapper>
            <div className='flex flex-col justify-center items-center w-full gap-3'>
                <Logo />
                <AuthHeadline
                    title="Забули пароль?"
                    description="Ввeдіть email, і ми надішлемо вам код для скидання пароля"
                />
                <ForgotPasswordForm />
                <div className='flex items-center gap-1.5'>
                    <Link href='/auth/login' className='text-sm text-muted-foreground'>
                        ⭠ Повернутись до входу
                    </Link>
                </div>
            </div>
        </AuthCardWrapper >
    )
}