'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'

const ProfilePopup = dynamic(() => import('@/components/Layout/profile-popup'))

function Profile() {
    const [show, setShow] = useState<boolean>(false)

  return (
    <div className=''>
        <Image src={'/assets/avatar-sample.png'} alt='avatar' width={24} height={24} className='cursor-pointer' onClick={() => setShow(true)} />
        {
            show && (
                <ProfilePopup setShow={setShow} />
            )
        }
    </div>
  )
}

export default Profile