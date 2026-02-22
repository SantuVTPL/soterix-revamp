import CInput from '../ui/input'
import { Divider } from '@mui/joy'
import CButton from '../ui/button'
import Link from 'next/link'

function ResetPasswordForm() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">Reset Password</h2>
      <CInput id="password" name="password" placeholder="Enter New Password" />
      <CInput
        id="password1"
        name="password1"
        placeholder="Re-Enter New Password"
      />
      <CButton text="Create Password" />
      <Divider><span className="text-white text-sm">or</span></Divider>
      <p className="text-center">Back to <span className="text-btn-default"><Link href={'/auth/login'}>Login</Link></span> page</p>
    </div>
  )
}

export default ResetPasswordForm