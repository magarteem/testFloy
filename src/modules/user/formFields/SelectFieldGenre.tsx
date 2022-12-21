import { Controller } from "react-hook-form";
import { SelectGenreElementMui } from "../../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { genreBD } from "../../authorization/service/BD";
import s from "./formFields.module.scss";

export interface SelectFieldGenreType {
 control: any;
}

export const SelectFieldGenre = ({
 control,
}: SelectFieldGenreType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="genre"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectGenreElementMui
      ItemRef={ref}
      value={value}
      placeholder="Жанр"
      required={true}
      options={genreBD}
      onChange={onChange}
      errors={errors.genre}
      {...field}
     />
    )}
   />
  </div>
 );
};
