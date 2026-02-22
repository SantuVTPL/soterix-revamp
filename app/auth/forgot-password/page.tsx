import AuthCard from "@/components/auth/auth-card";
import ForgotPasswordContainer from "@/components/auth/forgot-password-container";
import { Divider } from "@mui/joy";
import Link from "next/link";

function ForgotPasswordPage() {

  return (
    <div>
      <AuthCard>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-medium text-2xl text-center">
              Forgot Password?
            </h1>
            {/* {
            state?.message && (
                <p className='text-alert-danger text-sm text-center'>{state.message}</p>
                )
                } */}
          </div>
          <ForgotPasswordContainer />
          <Divider><span className="text-sm text-white">or</span></Divider>
          <p className="text-center">Back to <span className="text-btn-default"><Link href={'/auth/login'}>Login</Link></span> page</p>
        </div>
      </AuthCard>
    </div>
  );
}

export default ForgotPasswordPage;
