import { Button } from "@mui/material";

interface ButtonSubmitMuiType {
 textButton: string;
}

export const ButtonSubmitMui = ({
 textButton,
 ...props
}: ButtonSubmitMuiType) => {
 return (
  <Button
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
