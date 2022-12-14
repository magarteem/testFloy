import { Tab } from "@mui/material";

interface TabsMuiType {
 value: string;
 label: string;
}

export const TabMui = ({ label, value }: TabsMuiType) => {
 return (
  <Tab
   value="three"
   label="Входящие"
   sx={{
    textTransform: "none",
   }}
  />
 );
};
