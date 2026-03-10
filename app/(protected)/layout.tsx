import Header from '@/components/Layout/header'
import Sidenav from '@/components/Layout/sidenav'
import React from 'react'
import { getUser } from "@/dal/user";
import InitializeStates from '@/components/auth/initialize-states';
import { redirect } from 'next/navigation';

async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  const userData = await getUser()

  if (!userData) {
    return redirect('/auth/login')
  }

  const user = {
    userId: userData.user.userId,
    profileId: userData.user.profileId,
    profileName: userData.user.profileName,
    priority: userData.user.priority,
    superadmin: userData.user.superadmin,
    name: userData.user.name,
    lastName: userData.user.lastName,
    address: userData.user.address,
    mailId: userData.user.mailId,
    mobile: userData.user.mobile,
    profilePicId: userData.user.profilePicId,
    profilePicture: userData.user.profilePicUrl,
    userType: userData.user.userType,
    timelineTimeoutInMin: userData.user.timelineTimeoutInMin,
  }

  const enterprises = userData.enterprises?.map((enterPrise: any) => ({
    enterpriseId: enterPrise.enterpriseId,
    name: enterPrise.name,
    logoId: enterPrise.logoId,
    address: enterPrise.address,
    contact: enterPrise.contact,
  }))

  const sites = userData.sites?.map((site: any) => ({
    siteId: site.siteId,
    name: site.name,
  }))

  return (
    <div className='w-dvw h-dvh flex'>
      <InitializeStates user={user} enterprises={enterprises} sites={sites} />
        <Sidenav />
        <div className='flex-1 overflow-hidden flex flex-col'>
          <Header />
          { children }
        </div>
    </div>
  )
}

export default ProtectedLayout