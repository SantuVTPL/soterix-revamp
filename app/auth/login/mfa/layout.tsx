import AuthCard from '@/components/auth/auth-card'
import React from 'react'

async function MFALayout({ children }: { children: React.ReactNode }) {
  
  return (
    <AuthCard>
        { children }
    </AuthCard>
  )
}

export default MFALayout