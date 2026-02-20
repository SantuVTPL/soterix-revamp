import Image from 'next/image'
import React from 'react'

function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card-background rounded-3xl shadow-lg px-10 py-10 w-115 border border-border">
        <Image src='/assets/logo.png' alt='logo' width={150} height={41} loading='eager' className='object-contain mx-auto mb-6' />
        {children}
    </div>
  )
}

export default AuthCard