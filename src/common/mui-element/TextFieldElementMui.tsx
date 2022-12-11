import React, {
 ChangeEvent,
 ReactNode,
 useRef,
} from "react";
import { TextField } from "@mui/material";

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
 const PATTERN = /\D/g;
 const getInputNumberValue = (value: string) => {
  return value.replace(PATTERN, "");
 };

 const handlePhoneInput = (
  e: React.ChangeEvent<HTMLInputElement>
 ) => {
  const input = e.target;
  let inputNumberValue = getInputNumberValue(input.value);
  let formattedInputValue = "";
  const selectionStart = input.selectionStart;

  if (!inputNumberValue) {
   return (input.value = "");
  }

  if (input.value.length !== selectionStart) {
   return;
  }

  if (["7", "8", "9"].indexOf(inputNumberValue[0]) > -1) {
   if (inputNumberValue[0] === "9") {
    inputNumberValue = "7" + inputNumberValue;
   }

   const firstSumbol =
    inputNumberValue[0] === "8" ? "8" : "+7";
   formattedInputValue = firstSumbol + " ";

   if (inputNumberValue.length > 1) {
    formattedInputValue +=
     "(" + inputNumberValue.substring(1, 4);
   }

   if (inputNumberValue.length >= 5) {
    formattedInputValue +=
     ") " + inputNumberValue.substring(4, 7);
   }

   if (inputNumberValue.length >= 8) {
    formattedInputValue +=
     "-" + inputNumberValue.substring(7, 9);
   }
   if (inputNumberValue.length >= 10) {
    formattedInputValue +=
     "-" + inputNumberValue.substring(9, 11);
   }
  } else {
   formattedInputValue =
    "+" + inputNumberValue.substring(0, 16);
  }

  input.value = formattedInputValue;
 };

 const handlePhoneKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>
 ) => {
  const input = e.target as HTMLInputElement;
  if (
   e.key === "Backspace" &&
   getInputNumberValue(input.value).length === 1
  ) {
   input.value = "";
  }
 };

 const handlePhonePaste = (
  e: React.ClipboardEvent<HTMLInputElement>
 ) => {
  //@ts-ignore
  const pasted = e.clipboardData ?? window["clipboardData"];
  const input = e.target as HTMLInputElement;
  const inputNumberValue = getInputNumberValue(input.value);

  if (pasted) {
   const pastedText = pasted.getData("Text");

   if (PATTERN.test(pastedText)) {
    input.value = inputNumberValue;
   }
  }
 };

 return (
  <TextField
   helperText={errors && errors.message}
   multiline={multiline}
   maxRows={4}
   error={errors}
   type={type}
   value={inputValue}
   onInput={handlePhoneInput}
   onKeyDown={handlePhoneKeyDown}
   onPaste={handlePhonePaste}
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
     color: "#1A1C18 !important",

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

//const handleInput = (
//  e: React.ChangeEvent<HTMLInputElement>
// ) => {
//  if (type === "phone") {
//   console.log(e.target.dataset.phoneClear);
//   let el = e.target,
//    clearVal = el.dataset.phoneClear,
//    pattern = el.dataset.phonePattern,
//    matrix_def = "+7(___) ___-__-__",
//    matrix = pattern ? pattern : matrix_def,
//    i = 0,
//    def = matrix.replace(/\D/g, ""),
//    val = e.target.value.replace(/\D/g, "");

//   if (clearVal !== "false" && e.type === "blur") {
//    //@ts-ignore
//    if (val.length < matrix.match(/([\_\d])/g).length) {
//     e.target.value = "";
//     return;
//    }
//   }
//   if (def.length >= val.length) val = def;
//   e.target.value = matrix.replace(/./g, function (a) {
//    return /[_\d]/.test(a) && i < val.length
//     ? val.charAt(i++)
//     : i >= val.length
//     ? ""
//     : a;
//   });
//   //@ts-ignore
//   for (let elem of inpRef) {
//    for (let ev of ["input", "blur", "focus"]) {
//     elem.addEventListener(ev, handleInput);
//    }
//   }
//  }
// };
