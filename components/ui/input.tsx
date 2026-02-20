import { Input } from "@mui/joy";
import React from "react";

type Props = {
    type?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    error?: string;
    id: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CInput({
    type = "text",
    placeholder = "",
    value,
    defaultValue,
    error,
    id,
    name,
    onChange
}: Props) {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        id={id}
        name={name}
        onChange={onChange}
        className={`
          bg-background-input!
          border ${error ? "border-alert-danger!" : "border-border2!"}
          text-text-primary!
          placeholder-text-primary/50!
          rounded-lg!
          py-2.75! px-4!
          outline-none!
          transition-all duration-200!
          [&_.MuiInput-endDecorator]:mr-2!
          focus-within:border-border2!
          focus-within:shadow-none!
        `}
        sx={{
          "--Input-focusedHighlight": "inherit !important",
          "&.Mui-focused": {
            borderColor: "inherit !important",
          },
          "&:focus-within": {
            boxShadow: "none !important",
          },
        }}
      />
      {/* {
        error && (
          <p className="text-xs text-alert-danger mt-1">{error}</p>
        )
      } */}
    </div>
  );
}

export default CInput;
