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
}

function CButton({ onClick, disabled, loading, text, type = "button", inline }: Props) {
  return (
    <Button 
        onClick={onClick}
        disabled={disabled}
        loading={loading}
        type={type}
        className={`bg-btn-default! text-btn-primary-text! hover:bg-btn-default/80! rounded-full! h-10.25! font-medium! ${inline ? '' : 'w-full!'} ${disabled ? 'opacity-50 cursor-not-allowed!' : ''}`}
    >
        {
            !loading && text
        }
    </Button>
  )
}

export default CButton