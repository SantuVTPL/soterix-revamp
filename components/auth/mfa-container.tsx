'use client'

import MFAForm from '@/components/auth/mfa-form'
import { MFASession } from '@/types/mfa';
import { CircularProgress } from '@mui/joy';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MFASuccess = dynamic(() => import("@/components/auth/mfa-success"), {
    loading: () => <div className='flex justify-center'>
                        <CircularProgress variant='plain' size={'md'} />
                    </div>
})
const RegisterAuthenticatorApp = dynamic(() => import("@/components/auth/register-authentication-app"), {
    loading: () => <div className='flex justify-center'>
                        <CircularProgress variant='plain' size={'md'} />
                    </div>
})

interface Props {
    mfaSession: string;
}

type MFAState = 'mfa' | 'success' | 'register';

function MFAContainer({ mfaSession }: Props) {
    const mfaJson: MFASession = JSON.parse(mfaSession)

    const [show, setShow] = useState<MFAState>('mfa')

    const showRegister = () => {
        setShow('register')
    }

    const backToMFA = () => {
        setShow('mfa')
    }

    const showSuccess = () => {
        setShow('success')
    }

    switch(show) {
        case "mfa":
            return <MFAForm mfaJson={mfaJson} showRegister={showRegister} showSuccess={showSuccess} />;
        case "register":
            return <RegisterAuthenticatorApp backToMFA={backToMFA} />;
        case 'success':
            return <MFASuccess />;
    }
}

export default MFAContainer