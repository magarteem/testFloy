import { TextField } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface TextFieldTextareaElementMuiType {
 type?: string;
 multiline?: boolean;
 required?: boolean;
 helperText?: string;
 errors?: any;
 inputValue?: string | any;
 children?: ReactNode;
 placeholder: string;
 onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}

export default function TextFieldTextareaElementMui({
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
}: TextFieldTextareaElementMuiType) {
 return (
  <TextField
   helperText={helperText}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   sx={{
    width: "100% !important",
    fontWeight: "700  !important",
    fontSize: "14px",
    color: "#242424 ",
    fontFamily: `Mulish_Regular, sans-serif !important`,
    padding: "0",

    "& .MuiFormLabel-root": {
     lineHeight: "inherit",
     color: "#1A1C18",

     "& .MuiFormLabel-asterisk": {
      color: "red",
     },
    },

    "& .Mui-focused": {
     color: "#1A1C18 !important",
    },

    "& .MuiInputBase-root": {
     height: "auto",
     borderRadius: "8px",
     padding: "0 14px",
     color: "#1A1C18",
     fontFamily: `Mulish_Regular, sans-serif !important`,
     fontSize: "16px !important",
     fontWeight: "600 !important",

     "&:focus": {
      height: "auto",
     },

     "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #C6D1B8 !important",
      borderRadius: "8px",
     },

     "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      color: "red !important",
      border: "1px solid red !important",
     },
    },
   }}
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
