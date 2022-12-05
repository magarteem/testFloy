import { ChangeEvent, ReactNode } from "react";
import { TextField } from "@mui/material";

const useStyles = {
 inputLabel: {
  height: "100% !important",
  color: "#1A1C18 !important",

  "&.focused": {
   color: "#242424 !important",
  },
 },

 error: {
  // color: "#ff0000 !important",
 },

 asterisk: {
  color: "red",
 },

 cssOutlinedInput: {
  // border: "1px solid #C6D1B8 !important",
  borderRadius: "8px !important",
  height: "100%",
  padding: 0,

  "&$cssFocused $notchedOutline": {
   //обводка легенд
   border: "1px solid #C6D1B8 !important",
  },
 },

 notchedOutline: {
  "&$cssFocused $notchedOutline": {
   border: "1px solid #d2e407 !important",
  },
 },

 //текст в инпуте
 input: {
  fontFamily: `Mulish_Regular, sans-serif !important`,
  fontSize: "16px !important",
  color: "##1A1C18 !important",
  fontWeight: "600 !important",
  padding: "0 14px !important",
 },
};

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
   helperText={errors && helperText}
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
    height: "100% !important",

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
     height: "100%",
     borderRadius: "8px",

     "& input": {
      color: "#1A1C18",
      padding: "0 14px  !important",
      fontFamily: `Mulish_Regular, sans-serif !important`,
      fontSize: "16px !important",
      fontWeight: "600 !important",
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

    "& .MuiFormHelperText-root": {
     position: "absolute",
     bottom: "-18px",
     color: "#ff0000 !important",
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
