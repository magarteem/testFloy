import { Button } from "@mui/material";

interface ButtonSubmitMuiType {
 textButton: string;
 isValidInButton: boolean;
}

export const ButtonSubmitMui = ({
 textButton,
 isValidInButton,
 ...props
}: ButtonSubmitMuiType) => {
 return (
  <Button
   disabled={isValidInButton}
   variant="contained"
   type="submit"
   sx={{
    background:
     "linear-gradient(270.95deg, #79AF33 0%, #448016 100%)",
    borderRadius: "100px",
    width: "100%",
    textTransform: "none",

    "&:disabled": {
     color: "rgba(0, 0, 0, 0.26)",
     boxShadow: "none",
     background: "rgba(0, 0, 0, 0.12)",
    },

    "&:hover": {
     backgroundColor: "#395920",
     borderColor: "#3d5b26",
     boxShadow: "none",
    },

    "&:active": {
     boxShadow: "none",
     backgroundColor: "#2a5708",
     borderColor: "#2a5708",
    },
   }}
   {...props}
  >
   {textButton}
  </Button>
 );
};
