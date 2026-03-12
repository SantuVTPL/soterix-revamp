import Image from 'next/image'
import React from 'react'

function MFASuccess() {
  return (
    <>
        <div className='flex justify-center'>
            <Image src={'/assets/success.gif'} width={202} height={170} alt='success' />
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <h3 className='text-2xl font-bold text-center'>Authentication Successful</h3>
            <p className='text-text-secondary text-center'>You will be redirected to the Main page.</p>
        </div>
    </>
  )
}

export default MFASuccess