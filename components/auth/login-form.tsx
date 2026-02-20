'use client'

import Form from 'next/form';
import CButton from '@/components/ui/button'
import CInput from '@/components/ui/input'
import CPassword from '@/components/ui/password'
import ReCaptcha from '@/components/ui/recaptcha'
import Link from 'next/link'
import { useActionState, useState } from 'react';
import { login } from '@/actions/auth';

function LoginForm() {
    const [validCaptcha, setValidCaptcha] = useState(false);

    const [ state, formAction, isPending ] = useActionState(login, undefined)

  return (
    <Form action={formAction}>
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='font-medium text-2xl text-center'>Login</h1>
            {
              state?.message && (
                <p className='text-alert-danger text-sm text-center'>{state.message}</p>
              )
            }
          </div>
          <CInput type='email' placeholder='Email' id='email' name='email' error={state?.errors?.email?.[0]} />
          <div className='flex flex-col gap-2'>
            <CPassword placeholder='Password' id='password' name='password' error={state?.errors?.password?.[0]} />
            <span>
              <Link href='/auth/forgot-password' className='text-btn-default block text-start inline'>
                Forgot password?
              </Link>
            </span>
          </div>
          <ReCaptcha verified={validCaptcha} setVerified={setValidCaptcha} />
          <CButton text='Login' type='submit' disabled={!validCaptcha} loading={isPending} />
        </div>
    </Form>
  )
}

export default LoginForm