import AuthCard from "@/components/auth/auth-card";
import ResetPasswordForm from "@/components/auth/reset-password-form";
import dynamic from "next/dynamic";

const ResetPasswordLinkExpired = dynamic(() => import('@/components/auth/reset-password-link-expired'))
const PasswordResetSuccess = dynamic(() => import('@/components/auth/password-reset-success'))

function ResetPasswordPage() {
  return (
    // <AuthCard>
    //     <ResetPasswordForm />
    // </AuthCard>

    // <ResetPasswordLinkExpired />

    <PasswordResetSuccess />
  );
}

export default ResetPasswordPage;
