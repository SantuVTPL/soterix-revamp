'use client';

import { IconButton, Input } from "@mui/joy";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    id: string;
    name: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CPassword({
    placeholder = "",
    value,
    defaultValue,
    id,
    name,
    error,
    onChange
}: Props) {
  const [show, setShow] = useState(false);


  return (
    <div>
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        id={id}
        name={name}
        onChange={onChange}
        endDecorator={
          <IconButton
            variant="plain"
            onClick={() => setShow(!show)}
            className="
              text-gray-400!
              hover:text-gray-600!
              focus-visible:text-gray-600!
              active:text-gray-600!
              bg-transparent!
              transition-colors duration-200!
            "
          >
            {show ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        className={`
          bg-background-input!
          border ${error ? "border-alert-danger!" : "border-border2!"}
          text-text-primary!
          placeholder-text-primary/50!
          rounded-lg!
          py-2.25! px-4!
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

export default CPassword;
