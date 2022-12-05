import {
 FormControl,
 FormHelperText,
 InputLabel,
 MenuItem,
 OutlinedInput,
 Select,
} from "@mui/material";
import { OptionSelectType } from "../../modules/authorization/types/authType";
import { GroupOptionsType } from "../../modules/authorization/types/selectOptionsType";

interface SelectElementMuiType {
 placeholder: string;
 value?: OptionSelectType | any;
 options: OptionSelectType[] | GroupOptionsType[];
 onChange: () => void;
 isMulti?: boolean;
 errors?: any;
 ItemRef: any;
 required?: boolean;
}

export const SelectElementMui = ({
 placeholder,
 value,
 options,
 isMulti = false,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: SelectElementMuiType) => {
 return (
  <FormControl
   error={errors}
   fullWidth
   sx={{
    height: "100%",
    "& .MuiFormLabel-root": {
     lineHeight: "inherit",
     color: "#1A1C18",

     "& .MuiFormLabel-asterisk": {
      color: "red",
     },
    },
    "& .Mui-focused": {
     color: "#1A1C18 !important",
    },
   }}
  >
   <InputLabel
    required={required}
    id="demo-simple-select-error-label"
   >
    {placeholder}
   </InputLabel>

   <Select
    labelId="demo-simple-select-error-label"
    id="demo-simple-select-error"
    error={errors}
    value={value && value?.label}
    //label={"Ag111e"}
    onChange={onChange}
    input={<OutlinedInput label={placeholder} />}
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
      //height: "48px !important",
      color: "#1A1C18",
      padding: "0 14px",
      fontFamily: `Mulish_Regular, sans-serif !important`,
      fontSize: "16px !important",
      fontWeight: "600 !important",
     },
     fieldset: {
      //border: "1px solid #C6D1B8 !important",
      borderRadius: "8px",
     },
    }}
    {...props}
   >
    {options.map((x: any) => (
     <MenuItem key={x.label} value={x.label}>
      {x.label}
     </MenuItem>
    ))}
   </Select>

   {errors && (
    <FormHelperText
     error={errors}
     sx={{
      position: "absolute",
      bottom: "-18px",
      color: "#ff0000 !important",
     }}
    >
     {errors.message}
    </FormHelperText>
   )}
  </FormControl>
 );
};
