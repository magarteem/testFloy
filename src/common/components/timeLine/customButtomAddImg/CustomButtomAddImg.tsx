import { Button } from "@mui/material";
import { ReactNode } from "react";
import { useRef } from "react";
import {
 FieldValues,
 UseFormRegister,
} from "react-hook-form";

interface ButtonSubmitMuiType {
 textButton: string;
 isValidInButton: boolean;
 startIcon?: string | ReactNode;
 register: UseFormRegister<any>;
}

export const CustomButtomAddImg = ({
 textButton,
 isValidInButton,
 startIcon,
 register,
 ...props
}: ButtonSubmitMuiType) => {
 const filePicker = useRef<HTMLInputElement | null>(null);
 const handlePickerRef = () => {
  if (filePicker.current) {
   filePicker.current.click();
  }

  return "testimg";
 };

 const { ref, ...rest } = register("photo");

 return (
  <>
   <Button
    startIcon={startIcon}
    onClick={handlePickerRef}
    disabled={isValidInButton}
    variant="contained"
    type="button"
    sx={{
     lineHeight: 1,
     width: "100%",
     textTransform: "none",
     fontFamily: `Mulish_Regular, sans-serif !important`,
     fontWeight: 600,
     fontSize: "14px",
     color: "#2b6c00",
     background: "none",
     boxShadow: "none",
     justifyContent: "flex-start",

     "&:disabled": {
      color: "rgba(0, 0, 0, 0.26)",
      boxShadow: "none",
      backgroundColor: "inherit",

      "& .MuiButton-startIcon svg path": {
       stroke: "#1A1C18",
       opacity: 0.38,
      },
     },

     "&:hover": {
      backgroundColor: "inherit",
      borderColor: "#3d5b26",
      boxShadow: "none",
     },

     "&:active": {
      boxShadow: "none",
      backgroundColor: "inherit",
     },
    }}
    {...props}
   >
    {textButton}
   </Button>

   <input
    {...rest}
    type="file"
    ref={(e) => {
     ref(e);
     filePicker.current = e;
    }}
   />
  </>
 );
};
