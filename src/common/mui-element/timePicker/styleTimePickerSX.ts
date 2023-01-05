export const styleDatePickerSX = {
 datePicker: {
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
 },
};
