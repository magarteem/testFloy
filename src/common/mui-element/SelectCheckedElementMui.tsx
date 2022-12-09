import {
 Checkbox,
 Chip,
 FormControl,
 FormHelperText,
 InputLabel,
 ListItemText,
 MenuItem,
 OutlinedInput,
 Select,
 SelectChangeEvent,
 Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
 GenreType,
 OptionSelectType,
} from "../../modules/authorization/types/authType";
import { GroupOptionsType } from "../../modules/authorization/types/selectOptionsType";

interface SelectCheckedElementMuiType {
 placeholder: string;
 value: GenreType[];
 options: OptionSelectType[] | GroupOptionsType[];
 onChange: (personName: any) => void;
 isMulti?: boolean;
 errors?: any;
 ItemRef: any;
 required?: boolean;
}

export const SelectCheckedElementMui = ({
 placeholder,
 value,
 options,
 isMulti = false,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: SelectCheckedElementMuiType) => {
 const [personName, setPersonName] = useState<string[]>(
  value.map((x) => x.label)
 );

 const handleChange = (
  event: SelectChangeEvent<typeof personName>
 ) => {
  const {
   target: { value },
  } = event;
  setPersonName(
   typeof value === "string" ? value.split(",") : value
  );
 };

 useEffect(() => {
  //@ts-ignore
  let u = options.filter((x) =>
   personName.includes(x.label)
  );
  onChange(u);
 }, [personName]);

 return (
  <FormControl
   fullWidth
   sx={{
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
   error={errors}
  >
   <InputLabel
    required={required}
    id="demo-multiple-checkbox-label"
   >
    {placeholder}
   </InputLabel>
   <Select
    fullWidth
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label={placeholder} />}
    MenuProps={{
     sx: {
      ".MuiList-root li": {
       height: "37px !important",

       padding: "0 14px",
       minHeight: "auto !important",

       "&.Mui-selected": {
        background: "#4dd64d2e",
       },

       "& .MuiListItemText-root .MuiTypography-root": {
        lineHeight: "1 !important",
        paddingLeft: "6px",
        fontWeight: "700  !important",
        fontSize: "14px",
        color: "#242424 ",
        fontFamily: `Mulish_Regular, sans-serif !important`,
       },
      },
     },
    }}
    sx={{
     minHeight: "48px !important",
     borderRadius: "8px",

     "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      color: "red !important",
      border: "1px solid red !important",
     },

     "& .MuiSvgIcon-root": {
      color: "#000000",
     },

     "& .MuiSelect-select": {
      height: "100% !important",
      padding: "8px 24px 8px 14px !important",

      "&  div": {
       display: "flew",
       flexWrap: "wrap",
       gap: "4px",
      },
     },

     fieldset: {
      border: "1px solid #C6D1B8 !important",
      borderRadius: "8px",
     },
     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #C6D1B8 !important",
     },
    }}
    renderValue={(selected) => {
     return (
      <Stack direction="row" spacing={1}>
       {selected.map((values: any) => {
        //@ts-ignore
        let colorsChips = options.filter(
         (color: any) => color.label === values
        );

        return (
         <Chip
          key={values}
          label={values}
          sx={
           colorsChips[0].hexColor
            ? {
               background: colorsChips[0].hexColor,
               boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
               borderRadius: " 30px",
               color: "white !important",

               fontSize: "14px",
               margin: "0 !important",

               "& .MuiChip-deleteIcon": {
                height: "10px !important",
               },
               "& .MuiChip-label": {
                padding: "8px !important",
               },
              }
            : {
               border: " 1px solid #66784E",
               background:
                "linear-gradient(0deg, rgba(43, 108, 0, 0.08), rgba(43, 108, 0, 0.08)), #FDFDF5;",
               boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
               borderRadius: " 30px",
               color: "#1A1C18",
               fontSize: "14px",
               margin: "0 !important",

               "& .MuiChip-deleteIcon": {
                height: "10px !important",
               },
               "& .MuiChip-label": {
                padding: "12px !important",
               },
              }
          }
         />
        );
       })}
      </Stack>
     );
    }}
    {...props}
   >
    {options.map((x: any) => {
     return (
      <MenuItem key={x.label} value={x.label}>
       <Checkbox
        style={{ width: "15px", height: "15px" }}
        sx={{
         padding: "0",
         "& .MuiSvgIcon-root": {
          width: "20px !important",
          height: "20px !important",
          borderRadius: "20px !important",
          color: "#727471",
         },

         "&.Mui-checked": {
          svg: {
           color: "#FF5A13",
          },
         },
        }}
        checked={personName.indexOf(x.label) > -1}
       />
       <ListItemText primary={x.label} />
      </MenuItem>
     );
    })}
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

//export const SelectCheckedElementMui = ({
// placeholder,
// value,
// options,
// isMulti = false,
// onChange,
// errors,
// ItemRef,
// ...props
//}: SelectCheckedElementMuiType) => {
// return (
//  <FormControl
//   fullWidth
//   sx={{
//    "& .MuiFormLabel-root": {
//     lineHeight: "inherit",
//     color: "#1A1C18",
//    },
//    "& .Mui-focused": {
//     color: "#1A1C18 !important",
//    },
//    "& .Mui-error": {
//     // color: "rgb(255, 0, 0) !important",
//    },
//   }}
//   error={errors}
//  >
//   <InputLabel id="demo-multiple-checkbox-label">
//    {placeholder}
//   </InputLabel>
//   <Select
//    fullWidth
//    labelId="demo-multiple-checkbox-label"
//    id="demo-multiple-checkbox"
//    multiple
//    value={value}
//    onChange={onChange}
//    input={<OutlinedInput label={placeholder} />}
//    MenuProps={{
//     sx: {
//      ".MuiList-root li": {
//       height: "37px !important",

//       padding: "0 14px",
//       minHeight: "auto !important",

//       "& .MuiListItemText-root .MuiTypography-root": {
//        lineHeight: "1 !important",
//        paddingLeft: "6px",
//        fontWeight: "700  !important",
//        fontSize: "14px",
//        color: "#242424 ",
//        fontFamily: `Mulish_Regular, sans-serif !important`,
//       },
//      },
//     },
//    }}
//    sx={{
//     minHeight: "48px !important",
//     borderRadius: "8px",

//     "& .MuiSvgIcon-root": {
//      color: "#000000",
//     },

//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//      border: "1px solid #C6D1B8",
//      color: "red",
//     },

//     "& .MuiSelect-select": {
//      height: "100% !important",
//      padding: "8px 24px 8px 14px !important",

//      "&  div": {
//       display: "flew",
//       flexWrap: "wrap",
//       gap: "4px",
//      },
//     },

//     fieldset: {
//      borderRadius: "8px",
//     },
//    }}
//    renderValue={(selected) => {
//     return (
//      <Stack direction="row" spacing={1}>
//       {selected.map((values: any) => {
//        //console.log("values == ", values);
//        //@ts-ignore
//        let colorsChips = options.filter(
//         (color: any) => color.label === values.label
//        );
//        return (
//         <Chip
//          key={values.label}
//          label={values.label}
//          sx={{
//           backgroundColor: colorsChips[0].hexColor,
//           boxShadow:
//            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
//           borderRadius: " 30px",
//           color: "white !important",
//           fontSize: "14px",
//           margin: "0 !important",

//           "& .MuiChip-deleteIcon": {
//            height: "10px !important",
//           },
//           "& .MuiChip-label": {
//            padding: "8px !important",
//           },
//          }}
//         />
//        );
//       })}
//      </Stack>
//     );
//    }}
//    {...props}
//   >
//    {options.map((x: any) => {
//     let checkedItem = value.find((val) => {
//      return val.label === x.label;
//     });
//     return (
//      <MenuItem key={x.toString()} value={x}>
//       <Checkbox
//        style={{ width: "15px", height: "15px" }}
//        sx={{
//         padding: "0",
//         "& .MuiSvgIcon-root": {
//          width: "20px !important",
//          height: "20px !important",
//          borderRadius: "20px !important",
//          color: "#727471",
//         },

//         "&.Mui-checked": {
//          svg: {
//           color: "#FF5A13",
//          },
//         },
//        }}
//        checked={!!checkedItem}
//       />
//       <ListItemText primary={x.label.toString()} />
//      </MenuItem>
//     );
//    })}
//   </Select>
//   {errors && (
//    <FormHelperText
//     error={errors}
//     sx={{
//      position: "absolute",
//      bottom: "-18px",
//      color: "#ff0000 !important",
//     }}
//    >
//     {errors.message}
//    </FormHelperText>
//   )}
//  </FormControl>
// );
//};
