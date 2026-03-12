import MFAContainer from '@/components/auth/mfa-container';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function MFAPage() {
  const cookieStore = await cookies();

  const mfaJSession = cookieStore.get('MFA-JSESSIONID')
  const mfaSession = cookieStore.get('MFA')

  if (!mfaJSession || !mfaSession) {
    redirect('/auth/login')
  }

  return (
    <MFAContainer mfaSession={mfaSession.value} />
  )
}

export default MFAPage