'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CButton from '../ui/button'
import { Divider } from '@mui/joy'
import Link from 'next/link'
import { getQrData } from '@/lib/util/qr-to-image'

interface Props {
  backToMFA: () => void;
}

function RegisterAuthenticatorApp({ backToMFA }: Props) {

  return (
    <div className='flex flex-col items-center gap-3'>
        <h3 className='text-2xl font-medium'>Register Authenticator App</h3>
        <p className='text-text-secondary'>Scan the QR code to register.</p>
        <Image src={'/auth/login/mfa/authenticator-qr/api'} width={240} height={240} alt='QR' className='border border-border rounded-lg' />
        {/* <div className='flex flex-col gap-2 items-center'>
            <p className='text-text-secondary'>Or manually enter the setup key</p>
            <h3 className='font-medium'>{code}</h3>
        </div> */}
        <CButton text='Continue' onClick={backToMFA} fullWidth/>
        <Divider className="text-white!">or</Divider>
        <div className='flex font-semibold gap-1'>
            <span>Back to</span>
            <Link href={'/auth/login'} className='text-btn-default!'>Login</Link>
            <span>Page</span>
        </div>
    </div>
  )
}

export default RegisterAuthenticatorApp