import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center relative bg-[url('/assets/auth-banner.avif')] bg-cover">
      {children}
    </div>
  )
}

export default AuthLayout