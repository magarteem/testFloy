import { Controller } from "react-hook-form";
import { SelectGenreElementMui } from "../../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { genreBD } from "../../authorization/service/BD";
import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormGenreType {
 control: any;
}

export const InputFormGenre = ({
 control,
}: InputFormGenreType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name="genre"
    control={control}
    //rules={{
    // required: "Обязательное поле",
    //}}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectGenreElementMui
      ItemRef={ref}
      value={value}
      placeholder="Жанр"
      //required={true}
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
