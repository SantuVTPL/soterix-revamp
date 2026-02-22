import Header from '@/components/Layout/header'
import Sidebar from '@/components/Layout/sidebar'
import React from 'react'

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-dvw h-dvh flex'>
        <Sidebar />
        <div className='flex-1 overflow-hidden flex flex-col'>
          <Header />
          { children }
        </div>
    </div>
  )
}

export default ProtectedLayout