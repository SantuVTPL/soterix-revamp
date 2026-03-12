'use client'

import { Button } from '@mui/joy'
import React from 'react'

type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    loading?: boolean;
    text: string;
    type?: "button" | "submit" | "reset";
    inline?: boolean;
    variant?: "solid" | "outlined";
    fullWidth?: boolean;
}

function CButton({ onClick, disabled, loading, text, type = "button", inline, variant = "solid", fullWidth }: Props) {
  return (
    <Button 
        onClick={onClick}
        disabled={disabled}
        loading={loading}
        type={type}
        variant={variant}
        sx={{
            borderColor: "var(--btn-CTA)",
            color: variant === "solid" ? "var(--btn-primary-text)" : "var(--border3)",
            borderRadius: '30px',
            backgroundColor: variant === "solid" ? "var(--btn-default)" : "transparent",
            "&:hover": {
                backgroundColor: variant === "solid" ? "var(--btn-default-a)" : 'var(--btn-CTA-A)',
            },
            width: fullWidth ? "100%" : 'auto',
            height: '41px',
        }}
    >
        {
            !loading && text
        }
    </Button>
  )
}

export default CButton