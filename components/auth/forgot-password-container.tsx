'use client'

import dynamic from "next/dynamic";
import { useState } from "react";
import ForgotPasswordForm from "./forgot-password-form";

const EmailSent = dynamic(() => import("@/components/auth/email-sent"))

function ForgotPasswordContainer() {
    const [mailSent, setMailSent] = useState<boolean>(false)
  return (
    <>
      {!mailSent ? (
        <ForgotPasswordForm setMailSent={setMailSent} />
      ) : (
        <EmailSent />
      )}
    </>
  );
}

export default ForgotPasswordContainer;
