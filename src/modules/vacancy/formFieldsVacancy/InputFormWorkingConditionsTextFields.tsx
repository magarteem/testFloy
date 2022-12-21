import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormWorkingConditionsTextFieldsType {
 control: any;
}

export const InputFormWorkingConditionsTextFields = ({
 control,
}: InputFormWorkingConditionsTextFieldsType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="workingConditions"
    control={control}
    render={({
     field: { onChange, ref, value, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Условия"
       inputValue={value?.label}
       onChange={(e) =>
        onChange({
         value: e.target.value,
         label: e.target.value,
        })
       }
       multiline={true}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
