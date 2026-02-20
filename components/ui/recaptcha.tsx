'use client'

import { CircularProgress } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import CCheckbox from './checkbox';

type Props = {
    verified: boolean;
    setVerified: (value: boolean) => void;
}

function ReCaptcha({ verified, setVerified }: Props) {
    const captchaRef = useRef<ReCAPTCHA>(null);

    const [loading, setLoading] = useState(false);

    const handleVerify = () => {
        captchaRef.current?.execute();
    }

    const handleChange = (value: string | null) => {
        if (value) {
            setVerified(true);
        } else {
            setVerified(false);
        }
        setLoading(false);
    }

    const handleCheckboxClick = () => {
        setLoading(true);
        handleVerify();
    }

    return (
        <div className='w-95 h-22 bg-background-secondary rounded-sm flex justify-between items-center px-5'>
            <div className='flex items-center gap-2'>
                {
                    loading ? (
                        <CircularProgress size='sm' />
                    ) : (
                        <CCheckbox size='md' disabled={verified} checked={verified} onChange={handleCheckboxClick} />
                    )
                }
                <span className='text-text-primary cursor-pointer' onClick={!verified ? handleCheckboxClick : undefined}>I&apos;m not a robot</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image src='/assets/recaptcha.png' alt='recaptcha' width={40} height={46} className='object-contain' />
                <span className='text-[10px]'>
                    <Link href="https://policies.google.com/privacy" target='_blank' className='text-text-primary hover:underline'>Policy</Link> - <Link href="https://policies.google.com/terms" target='_blank' className='text-text-primary hover:underline'>Terms</Link>
                </span>
            </div>

            <ReCAPTCHA
                className='absolute'
                ref={captchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                size="invisible"
                onChange={handleChange}
            />
        </div>
    )
}

export default ReCaptcha