import { TextField } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ChangeEvent, ReactNode } from "react";

const useStyles = makeStyles((theme) =>
 createStyles({
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

  cssFocused: {},
 })
);

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
 const classes = useStyles();

 return (
  <TextField
   helperText={errors && helperText}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   sx={{
    "& .MuiFormLabel-root": {
     lineHeight: "inherit",
    },
    "& .MuiInputBase-root": {
     height: "100%",
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
   InputLabelProps={{
    classes: {
     root: classes.inputLabel,
     focused: "focused",
     asterisk: classes.asterisk,
     error: classes.error,
    },
   }}
   onChange={onChange}
   onClick={onClick}
   InputProps={{
    classes: {
     root: classes.cssOutlinedInput,
     focused: classes.cssFocused,
     notchedOutline: classes.notchedOutline,
     input: classes.input,
    },
    inputMode: "numeric",
   }}
   {...props}
  />
 );
}

//================

//"&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//  borderColor: "green"
//},
//"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
//  borderColor: "red"
//},
//"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//  borderColor: "purple"
//},

//===============

//const useStyles = makeStyles((theme) =>
// createStyles({
//  asterisk: {
//   color: "red",
//  },

//  cssLabel: {
//   color: "##1A1C18 !important",

//   "& $cssFocused $notchedOutline": {
//    color: "##79e70b !important",
//   },
//  },

//  cssFocused: { color: "##79e70b !important" },

//  cssOutlinedInput: {
//   borderRadius: "8px",
//   height: "48px !important",

//   "&$cssFocused $notchedOutline": {
//    border: "1px solid #C6D1B8 !important",
//   },
//  },

//  notchedOutline: {
//   border: "1px solid #C6D1B8",
//  },

//  input: {
//   fontSize: "16px !important",
//   color: "green !important",
//  },
// })
//);

//export default function TextFieldElement() {
// const classes = useStyles();
// return (
//  <TextField
//   fullWidth
//   label="Имя"
//   variant="outlined"
//   required
//   InputLabelProps={{
//    classes: {
//     root: classes.cssLabel,
//     focused: classes.cssFocused,
//     asterisk: classes.asterisk,
//    },
//   }}
//   InputProps={{
//    classes: {
//     root: classes.cssOutlinedInput,
//     focused: classes.cssFocused,
//     notchedOutline: classes.notchedOutline,
//     input: classes.input,
//    },
//    inputMode: "numeric",
//   }}
//  />
// );
//}

//======================

//import { TextField } from "@mui/material";
//import { createStyles, makeStyles } from "@mui/styles";

//const sxStyle = {
// ".MuiFormControl-root": {
//  backgroundColor: "#bd0f0f !important",
//  height: "30px",

//  root: {
//   backgroundColor: "#bd0f0f !important",
//   color: "#242424",
//  },
//  "& .MuiInputBase-root": {
//   "& .MuiInputBase-input": {
//    //color: "#1A1C18",
//    color: "#f21c00",
//    height: "48px",
//    padding: "0 10px",
//    fontSize: "16px",
//   },
//  },
// },

// "& .MuiInputLabel-outlined": {
//  color: "#f80000",
// },

// "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
//  {
//   border: "1px solid #C6D1B8",
//  },
// "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
//  {
//   border: "1px solid #52c966",
//  },
// fieldset: {
//  borderRadius: "8px",
//  borderolor: "1px solid #C6D1B8",
//  //MuiOutlinedInput-notchedOutline
// },
//};

//export default function TextFieldElement() {
// return (
//  <TextField
//   fullWidth
//   label="Имя"
//   variant="outlined"
//   required
//   sx={sxStyle}
//  />
// );
//}
