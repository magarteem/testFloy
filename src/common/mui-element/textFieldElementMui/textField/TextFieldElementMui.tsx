import React, { ChangeEvent, ReactNode } from "react";
import { TextField } from "@mui/material";
import { styleTextFieldSX } from "./styleTextFieldSX";

interface TextFieldElementMuiType {
 type?: string;
 multiline?: boolean;
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: string;
 children?: ReactNode;
 placeholder: string;
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}

export default function TextFieldElementMui({
 children,
 type = "text",
 multiline = false,
 required = false,
 helperText = "",
 errors,
 inputValue,
 placeholder,
 ItemRef,
 onChange,
 onClick,
 ...props
}: TextFieldElementMuiType) {
 return (
  <TextField
   helperText={errors && errors.message}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   sx={styleTextFieldSX.input}
   fullWidth
   label={placeholder}
   autoComplete="off"
   placeholder={placeholder}
   variant="outlined"
   required={required}
   onChange={onChange}
   onClick={onClick}
   {...props}
  />
 );
}
