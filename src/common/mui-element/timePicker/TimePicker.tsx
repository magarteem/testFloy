import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface TimePickerType {
 onChange: (data: any) => any;
 placeholder: string;
 value?: any;
 errors: any;
 minTime?: any;
 maxTime?: any;
 watch?: any;
 shouldDisableTime?: any;
}

export const TimePickerMui = ({
 errors,
 onChange,
 value,
 placeholder,
 minTime,
 maxTime = null,
 watch,
 shouldDisableTime,
}: TimePickerType) => {
 return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
   <TimePicker
    ampm={false}
    views={["hours"]}
    minTime={false}
    label={placeholder}
    value={value}
    onChange={onChange}
    //minTime={minTime}
    //maxTime={maxTime}
    shouldDisableTime={(timeValue, clockType) => {
     // console.log(timeValue);
     console.log(watch?.$H);
     console.log("--");

     if (
      watch &&
      clockType === "hours" &&
      timeValue < watch?.$H
     ) {
      return true;
     }

     return false;
    }}
    renderInput={(params: any) => (
     <TextField
      helperText={null}
      fullWidth
      {...params}
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

       "& .MuiInputBase-root": {
        height: "100%",
        borderRadius: "8px",

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
         border: "1px solid #C6D1B8 !important",
        },
       },
       "& .MuiFormHelperText-root": {
        position: "absolute",
        bottom: "-18px",
        color: "#ff0000 !important",
       },
       "& .MuiInputBase-input": {
        height: "auto",
        padding: "0 14px ",
        fontWeight: "700  !important",
        fontSize: "16px",
        "&:focus": {
         height: "auto",
        },
       },

       "& .MuiOutlinedInput-notchedOutline": {
        border: errors
         ? "1px solid #ff0000 !important"
         : "1px solid #C6D1B8",
        "&:focus": {
         border: "1px solid #C6D1B8 !important",
        },
       },
      }}
     />
    )}
   />
  </LocalizationProvider>
 );
};
