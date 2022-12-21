import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormPaymentType {
 control: any;
}

export const InputFormPayment = ({
 control,
}: InputFormPaymentType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="payment"
    control={control}
    rules={{
     required: "Обязательное поле",
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
    }}
    render={({
     field: { onChange, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="Оплата"
       required={true}
       onChange={onChange}
       helperText="Обязательное поле"
       errors={errors.payment}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
