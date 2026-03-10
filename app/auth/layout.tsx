import ClearStates from '@/components/auth/clear-states'
import { getUser } from '@/dal/user'
import { redirect } from 'next/navigation'
import React from 'react'

async function AuthLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser()

  if (user) {
    return redirect('/')
  }

  return (
    <div className="h-dvh w-dvw flex items-center justify-center relative bg-[url('/assets/auth-banner.avif')] bg-cover">
      <ClearStates />
      {children}
    </div>
  )
}

export default AuthLayout