import Image from 'next/image'
import React from 'react'
import CButton from '../ui/button'
import { SUPPORT } from '@/constants/support'

function ResetPasswordLinkExpired() {
  return (
    <>
        <div className='flex flex-col gap-8 w-129 items-center -mt-20'>
            <Image src={'/assets/icons/search-empty.png'} alt='timeout' width={212} height={180} />
            <div className='flex flex-col gap-4 items-center'>
                <h2 className='text-2xl font-bold'>Reset Password Link Expired</h2>
                <p className='text-text-secondary text-center'>The reset password link you have clicked has expired. For security reasons, reset password links are only valid for a limited time.</p>
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='text-center text-sm'>To access your account, please request a new reset password link by clicking the button below.</p>
                <CButton
                    text='Request New Reset Password Link'
                    inline
                />
            </div>
        </div>
        <div className='w-141 absolute bottom-5'>
            <p className='text-text-secondary text-center text-sm'>If you continue to experience issues, please contact our support team for assistance.</p>
            <div className='flex gap-4 justify-center'>
                <p className='text-text-secondary text-sm'>Support Email: <span className='text-text-primary'>{SUPPORT.EMAIL}</span></p>
                <p className='text-text-secondary text-sm'>Phone: <span className='text-text-primary'>{SUPPORT.PHONE}</span></p>
            </div>
        </div>
    </>
  )
}

export default ResetPasswordLinkExpired