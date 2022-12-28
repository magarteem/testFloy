import React, { ReactNode } from "react";
import {
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogContentText,
 DialogTitle,
 Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
 props: TransitionProps & {
  children: React.ReactElement<any, any>;
 },
 ref: React.Ref<unknown>
) {
 return <Slide direction="up" ref={ref} {...props} />;
});

interface FilterModalLayoutType {
 children: ReactNode;
 madalOpen: boolean;
 handleClose: () => void;
}

export const FilterModalLayout = ({
 children,
 madalOpen,
 handleClose,
}: FilterModalLayoutType) => {
 return (
  <Dialog
   open={madalOpen}
   TransitionComponent={Transition}
   keepMounted
   onClose={handleClose}
   aria-describedby="alert-dialog-slide-description"
   sx={{
    "& .MuiDialog-container": {
     alignItems: "flex-end",

     "& .MuiPaper-root": {
      background: "#FDFDF5",
      borderRadius: "28px 28px 0px 0px",
      width: "100%",
      margin: 0,
      padding: "16px",
     },
    },
   }}
  >
   {children}
   {/*<DialogTitle>
    {"Use Google's location service?"}
   </DialogTitle>
   <DialogContent>
    <DialogContentText id="alert-dialog-slide-description">
     Let Google help apps determine location. This means
    </DialogContentText>
   </DialogContent>
   <DialogActions>
    <Button onClick={handleClose}>Disagree</Button>
    <Button onClick={handleClose}>Agree</Button>
   </DialogActions>*/}
  </Dialog>
 );
};
