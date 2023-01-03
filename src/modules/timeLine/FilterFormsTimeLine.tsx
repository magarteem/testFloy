import { useForm } from "react-hook-form";
import { ButtonSubmitMui } from "../../common/mui-element/ButtonSubmitMui";
import { IconButton } from "@mui/material";
import s from "./style/filterFormsTimline.module.scss";
import { TimeLinePostType } from "./types/timlineSliceType";
import { InputFormCity } from "./formFields/InputFormCity";
import { InputFormSearchText } from "./formFields/InputFormSearchText";
import { InputFormCategoryNews } from "./formFields/InputFormCategoryNews";
import { InputFormTools } from "./formFields/InputFormTools";
import { InputFormGenre } from "./formFields/InputFormGenre";
import { FilterFormsTimeLineFieldsType } from "./types/FilterFormsTimeLineFieldsType";

interface FilterFormsTimeLineType {
 handleClose: () => void;
}

export const FilterFormsTimeLine = ({
 handleClose,
}: FilterFormsTimeLineType) => {
 const { control, handleSubmit, reset } =
  useForm<FilterFormsTimeLineFieldsType>({
   mode: "onBlur",
   defaultValues: {
    search_text: "",
    type_category: null,
    city: null,
    tools: [],
    genre: [],
   },
  });

 const resetFormFields = () => reset();
 const onSubmit = (data: any) => {
  console.log("onSubmitAds = ", data);
  handleClose();
 };

 return (
  <div className={s.filterForAds}>
   <div className={s.toutchLine} />

   <form noValidate onSubmit={handleSubmit(onSubmit)}>
    <div className={s.headerForms}>
     <h1>Фильтр</h1>
     <IconButton
      sx={{
       borderRadius: "10px",
       padding: "13px",
      }}
     >
      <h5 onClick={resetFormFields}>Очистить</h5>
     </IconButton>
    </div>

    <div className={s.gawField}>
     <InputFormSearchText
      control={control}
      name="search_text"
     />

     <InputFormCategoryNews
      control={control}
      name="type_category"
     />
     <InputFormCity control={control} name="city" />
     <InputFormTools control={control} name="tools" />
     <InputFormGenre control={control} name="genre" />
    </div>

    <div className={s.btnWrapper}>
     <ButtonSubmitMui
      isValidInButton={false}
      textButton="Показать результаты"
     />
    </div>
   </form>
  </div>
 );
};
