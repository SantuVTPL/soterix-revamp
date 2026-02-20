import { Checkbox } from '@mui/joy'
import React from 'react'

type Props = {
    size?: 'sm' | 'md' | 'lg';
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CCheckbox({ size, checked, disabled, onChange }: Props) {
  return (
    <Checkbox
        size={size || 'sm'}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={`
            [&_.Mui-checked_.MuiCheckbox-checkbox]:${checked ? "bg-btn-default!" : "bg-transparent!"}
            [&_.MuiCheckbox-checkbox]:${checked ? "bg-btn-default!" : "bg-transparent!"}
            [&_.MuiCheckbox-checkbox]:border-text-secondary!
            [&_.MuiCheckbox-checkbox_svg]:text-btn-primary-text!
        `}
    />
  )
}

export default CCheckbox