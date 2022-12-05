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
    background: "#5B9232",
    borderRadius: "100px",
    width: "100%",
    textTransform: "none",

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
