"use client";

import { Input, Stack } from "@mui/joy";
import { useRef, useState } from "react";

type Props = {
  error?: boolean;
}

export default function OTPInput({ error = false }: Props) {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
      setFocusedIndex(index -1);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      {otp.map((digit, index) => (
        <Input
          key={index}
          value={digit}
          error={error}
          slotProps={{
            input: {
              maxLength: 1,
              // @ts-ignore
              ref: (el: HTMLInputElement) => (inputsRef.current[index] = el),
              className: 'text-center! text-2xl! font-medium! text-text-primary!'
            },
            }}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          sx={{
            width: 50,
            textAlign: "center",
            fontSize: "20px",
            "--Input-focusedHighlight": "none !important",
            borderColor: focusedIndex === index ? (
              error ? "var(--alert-danger)" : "var(--border3)"
            ) : (
              error ? "var(--alert-danger-a)" : "var(--border2)"
            )
          }}
          className="bg-background-input! border h-12! w-12! rounded-lg! "
        />
      ))}
    </Stack>
  );
}