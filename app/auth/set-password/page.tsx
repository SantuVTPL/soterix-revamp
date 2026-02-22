import AuthCard from '@/components/auth/auth-card'
import CButton from '@/components/ui/button'
import CInput from '@/components/ui/input'
import React from 'react'

function SetPasswordPage() {
  return (
    <AuthCard>
        <div className="flex flex-col gap-6">
            <h2 className='text-2xl font-bold text-center'>Email Sent</h2>
            <CInput
                id='password'
                name='password'
                placeholder='Enter New Password'
            />
            <CInput
                id='password1'
                name='password1'
                placeholder='Re-Enter New Password'
            />
            <CButton 
                text='Create Password'
            />
        </div>
    </AuthCard>
  )
}

export default SetPasswordPage