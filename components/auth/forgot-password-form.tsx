import React from "react";
import CInput from "../ui/input";
import CButton from "../ui/button";

type Props = {
    setMailSent: (val: boolean) => void;
}

function ForgotPasswordForm({ setMailSent }: Props) {
  return (
    <div className="flex flex-col gap-6">
        <CInput 
            id="email"
            name="email"
            type="email"
            placeholder="Email"
        />
        <CButton 
            text="Request Rest Link"
            type="button"
            onClick={() => setMailSent(true)}
        />
    </div>
  );
}

export default ForgotPasswordForm;
