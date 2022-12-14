import { Tab, Tabs } from "@mui/material";
import React from "react";
import { TabMui } from "../../../mui-element/TabMui";

export const TabsComponent = () => {
 const [value, setValue] = React.useState("one");
 const handleChange = (
  event: React.SyntheticEvent,
  newValue: string
 ) => {
  setValue(newValue);
 };

 return (
  <Tabs
   value={value}
   onChange={handleChange}
   textColor="primary"
   indicatorColor="secondary"
   aria-label="secondary tabs example"
   sx={{
    width: "100%",
    borderBottom: "1px solid #E9F0DA;",

    "& .MuiTabs-flexContainer": {
     display: "flex",
     justifyContent: "space-around",

     "& .MuiButtonBase-root": {
      padding: 0,
      fontWeight: 600,
      fontSize: " 14px",
     },
     "& .MuiButtonBase-root.Mui-selected": {
      color: "#2B6C00",
     },
    },

    "& .MuiTabs-indicator": {
     height: "3px",
     background: "#2B6C00",
     borderRadius: "100px 100px 0px 0px",
    },
   }}
  >
   <Tab
    value="one"
    label="Отправленные"
    sx={{
     textTransform: "none",
    }}
   />
   <Tab
    value="three"
    label="Входящие"
    sx={{
     textTransform: "none",
    }}
   />
  </Tabs>
 );
};
