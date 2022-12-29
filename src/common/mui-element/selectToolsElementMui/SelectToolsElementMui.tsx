import arrowSelect from "../../../assets/icons/arrowSelect.webp";
import { ReactComponent as ClearIcon } from "../../../assets/icons/clearIcon.svg";
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
} from "@mui/material";
import s from "../optionCustom.module.scss";
import cn from "classnames";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { GroupOptionsType } from "../../../modules/authorization/types/selectOptionsType";
import { styleSxTool } from "./styleSxTool";

interface SelectToolsElementMuiType {
 placeholder: string;
 value?: any;
 options: GroupOptionsType[];
 onChange: (personName: any) => void;
 errors: any;
 ItemRef: any;
 required?: boolean;
}

export const SelectToolsElementMui = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 required = false,
 ...props
}: SelectToolsElementMuiType) => {
 const [classesHiddenCount, setClassesHiddenCount] =
  useState(0);
 const [personName, setPersonName] = useState<string[]>(
  value.map((x: any) => x.label)
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

 const handleDelete = (e: any, value: any) => {
  setPersonName(personName.filter((x) => x !== value));
 };

 useEffect(() => {
  let i: any = [];

  options.forEach((x) => {
   const t = x.options.forEach((m) => {
    if (personName.includes(m.label)) {
     i.push(m);
    }
   });
   return t;
  });
  onChange(i);
 }, [onChange, options, personName]);

 useEffect(() => {
  !!!value.length &&
   !!personName.length &&
   setPersonName([]);
 }, [value]);

 return (
  <FormControl
   fullWidth
   sx={styleSxTool.formcontrol}
   error={errors}
  >
   <InputLabel
    required={required}
    id="demo-multiple-checkbox-label"
    sx={styleSxTool.inputLabel}
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
    MenuProps={{ sx: styleSxTool.MenuProps }}
    sx={styleSxTool.select}
    renderValue={(selected) => {
     return (
      <Stack
       direction="row"
       spacing={1}
       sx={styleSxTool.stack}
      >
       {selected.map((values: any) => {
        let iconTools = options.map((op: any) => {
         const temp = op.options.find(
          (x: any) => x.label === values
         );

         return temp;
        });

        return (
         <Chip
          deleteIcon={
           <span
            onMouseDown={(event) => {
             event.stopPropagation();
            }}
           >
            <ClearIcon />
           </span>
          }
          onDelete={(e) => handleDelete(e, values)}
          key={values}
          label={values}
          avatar={
           <img
            alt="values"
            src={
             iconTools.filter((y) => y !== undefined)[0]
              .imgIcons
            }
           />
          }
          sx={styleSxTool.chip}
         />
        );
       })}
      </Stack>
     );
    }}
    {...props}
   >
    {/*  */}
    {options.map((x: any, index: any) => {
     let t = 0;
     return x.options.map((p: any) => {
      if (t === 0) {
       t++;
       return (
        <div
         className={s.openMenu}
         onClick={() => setClassesHiddenCount(index)}
        >
         <img
          className={cn({
           [s.iconArrow]: index !== classesHiddenCount,
          })}
          src={arrowSelect}
          alt="arrow"
          style={{ marginRight: "10px" }}
         />
         <ListItemText
          sx={styleSxTool.listItem}
          primary={x.label}
         />
        </div>
       );
      } else {
       let iconTools = options.map((op: any) => {
        const temp = op.options.find(
         (x: any) => x.label === p.label
        );
        return temp;
       });

       return (
        <MenuItem
         className={cn({
          [s.optionCustom]: index !== classesHiddenCount,
         })}
         sx={styleSxTool.menuItem}
         key={p.label}
         value={p.label}
        >
         <Checkbox
          style={{ width: "15px", height: "15px" }}
          sx={styleSxTool.checkbox}
          checked={personName.indexOf(p.label) > -1}
         />
         <img
          alt="values"
          src={
           iconTools.filter((y) => y !== undefined)[0]
            .imgIcons
          }
         />
         <ListItemText primary={p.label} />
        </MenuItem>
       );
      }
     });
    })}
   </Select>
   {errors && (
    <FormHelperText error={errors} sx={styleSxTool.helper}>
     {errors.message}
    </FormHelperText>
   )}
  </FormControl>
 );
};

//useEffect(() => {
//  //@ts-ignore
//  let u = options.map((x) => {
//   return {
//    ...x,
//    options: x.options.filter((m) =>
//     personName.includes(m.label)
//    ),
//   };
//  });
//  console.log(" v = u ", u);
//  onChange(u);
// }, [personName]);
