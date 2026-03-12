'use client'

import CButton from '@/components/ui/button'
import OTPInput from '@/components/ui/otp-input'
import { MFASession } from '@/types/mfa'
import { Divider } from '@mui/joy'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface Props {
    mfaJson: MFASession;
    showRegister: () => void;
    showSuccess: () => void;
}

function MFAForm({ mfaJson, showRegister, showSuccess }: Props) {
    const { mfa, showAuthenticator } = mfaJson
    const [counter, setCounter] = useState<number>(10)

    const intervalRef = useRef<ReturnType<typeof setInterval>>(null)

    const removeInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }
    
    const handleCounterChange = () => {
        setCounter(prevVal => {
            if (prevVal <= 1) {
                removeInterval()
            }
            return prevVal - 1
        })
    }

    useEffect(() => {
        intervalRef.current = setInterval(handleCounterChange, 1000)

        return () => {
            removeInterval()
        }
    }, [removeInterval])

  return (
    <div className='flex flex-col gap-6 items-center'>
        <h3 className='text-2xl font-medium text-center'>Multi-factor Authentication</h3>
        <div className='flex flex-col gap-3 items-center'>
            <p className='text-text-secondary'>Enter the code sent to your registered Email ID</p>
            {/* <p className='text-sm font-medium text-alert-danger'>The code entered is incorrect or has expired</p> */}
            <OTPInput />
            {
                counter === 0 ? (
                    <p className='font-medium text-btn-default cursor-pointer'>Resend code</p>
                ) : (
                    <p className='text-text-secondary'>Resend code in {Math.floor(counter / 60).toString().padStart(2, "0")}:{Math.floor(counter % 60).toString().padStart(2, "0")}</p>
                )
            }
        </div>
        <div className='flex flex-col gap-3 items-center'>
            <p className='text-text-secondary'>Enter the code from the Authenticator App</p>
            <OTPInput />
        </div>
        <CButton text='Verify' onClick={showSuccess} fullWidth />
        <CButton text='Register Authenticator App' variant='outlined' onClick={showRegister} fullWidth />
        <Divider className="text-text-primary!">or</Divider>
        <div className='flex font-semibold gap-1'>
            <span>Back to</span>
            <Link href={'/auth/login'} className='text-btn-default!'>Login</Link>
            <span>Page</span>
        </div>
    </div>
  )
}

export default MFAForm