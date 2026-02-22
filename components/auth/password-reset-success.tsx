'use client'

import Image from 'next/image'
import AuthCard from './auth-card'
import CButton from '../ui/button'
import { redirect } from 'next/navigation'

function PasswordResetSuccess() {
  return (
    <AuthCard>
        <div className="flex flex-col gap-6 justify-center items-center">
            <Image src={'/assets/success.gif'} alt='success' width={202} height={170} />
            <div className='flex flex-col gap-11.25'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold text-center'>Password reset successfully</h2>
                    <p className='text-text-secondary'>Log into your account with your new password</p>
                </div>
                <CButton 
                    text='Login'
                    onClick={() => redirect('/auth/login')}
                />
            </div>
        </div>
    </AuthCard>
  )
}

export default PasswordResetSuccess