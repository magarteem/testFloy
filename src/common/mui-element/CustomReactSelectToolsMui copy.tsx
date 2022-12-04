import {
 FormControl,
 InputLabel,
 ListSubheader,
 MenuItem,
 Select,
} from "@mui/material";
import React from "react";
import { GroupOptionsType } from "../../modules/authorization/types/selectOptionsType";

interface CustomReactSelectToolsMuiType {
 placeholder: string;
 value?: any;
 options: GroupOptionsType[];
 onChange: () => void;
 errors: any;
 ItemRef: any;
}

export const CustomReactSelectToolsMui = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomReactSelectToolsMuiType) => {
 return (
  <FormControl sx={{ minWidth: "100%" }} error={errors}>
   <InputLabel htmlFor="grouped-select">
    Grouping
   </InputLabel>
   <Select
    defaultValue=""
    id="grouped-select"
    label="Grouping"
    {...props}
    fullWidth
    MenuProps={{
     sx: {
      ".MuiList-root li": {
       height: "37px !important",
       fontWeight: "700  !important",
       fontSize: "14px",
       color: "#242424 ",
       fontFamily: `Mulish_Regular, sans-serif !important`,
       padding: "0 14px",
       minHeight: "auto !important",

       "& .MuiButtonBase-root": {
        minHeight: "auto !important",
       },
      },
     },
    }}
    sx={{
     height: "100%",
     color: "#1A1C18",
     borderRadius: "8px",
     "& .MuiSvgIcon-root": {
      color: "#000000",
     },

     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #C6D1B8",
      color: "red",
     },

     "& .MuiSelect-select": {
      //color: "#1A1C18",
      //padding: "0 14px",
      //fontFamily: `Mulish_Regular, sans-serif !important`,
      //fontSize: "16px !important",
      //fontWeight: "600 !important",
      height: "100% !important",
      padding: "8px 24px 8px 14px !important",

      "&  div": {
       display: "flew",
       flexWrap: "wrap",
       gap: "4px",
      },
     },

     fieldset: {
      borderRadius: "8px",
     },
    }}
   >
    {}
    <ListSubheader>Category 1</ListSubheader>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <ListSubheader>Category 2</ListSubheader>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
   </Select>
  </FormControl>
 );
};
