import {
 FormControl,
 InputLabel,
 MenuItem,
 Select,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { sityBD } from "../../modules/authorization/service/BD";
import { OptionSelectType } from "../../modules/authorization/types/authType";
import { GroupOptionsType } from "../../modules/authorization/types/selectOptionsType";
import TextFieldElementMui from "./TextFieldElementMui";

interface SelectElementMuiType {
 placeholder: string;
 value?: any;
 options: OptionSelectType[] | GroupOptionsType[];
 onChange: () => void;
 isMulti?: boolean;
 errors?: any;
 ItemRef: any;
}

export const SelectElementMui = ({
 placeholder,
 value,
 options,
 isMulti = false,
 onChange,
 errors,
 ItemRef,
 ...props
}: SelectElementMuiType) => {
 const classes = useStyles();

 return (
  <FormControl fullWidth>
   <InputLabel id="demo-simple-select-label">
    Age
   </InputLabel>
   <Select
    //value={age}
    label="Age"
    input={<input placeholder="dddddddd" {...props} />}
    {...props}
   >
    {sityBD.map((x) => (
     <MenuItem key={x.value} value={x.value}>
      {x.label}
     </MenuItem>
    ))}
   </Select>
  </FormControl>
 );
};

const useStyles = makeStyles((theme) =>
 createStyles({
  //inputRoot: {
  // borderRadius: "inherit",
  // "&:hover": {
  //  background: "#0e0e0e !important",
  // },
  // "&:focus": {
  //  border: "1px solid #ffffff",
  //  boxShadow: "0 0 3pt 2pt rgba(242,43,17,.60)",
  //  background: "#24c90e !important",
  //  borderRadius: "inherit",
  // },
  // "&$focused": {
  //  backgroundColor: "#220de0 !important",

  //  borderColor: "#e00d0d !important",
  // },
  //},

  inputLabel: {
   height: "100% !important",
   color: "#1A1C18 !important",

   "&.focused": {
    color: "#242424 !important",
   },
  },

  error: {
   color: "#ff0000 !important",
  },

  outlined: {
   // border: "1px solid #d2e407 !important",
   "&.focused": {
    //width: "150px !important",
   },
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
