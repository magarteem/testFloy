import {
 Controller,
 useFormContext,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import s from "./style/secondStepFormRegister.module.scss";
import { RouteNames } from "../../common/variables/RouteNames";
import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import { optionsTypeAccount } from "./service/BD";

export const SecondStepFormRegister = () => {
 const navigate = useNavigate();

 const {
  control,
  watch,
  formState: { errors },
 } = useFormContext();

 const nextStepRegister = () => {
  navigate(
   `${RouteNames.REGISTER}/${RouteNames.REG_CREATE_ACCOUNT}`
  );
 };

 const customStyles = {
  singleValue: (provided: any) => ({
   ...provided,
   fontSize: `14px !important`,
  }),
 };

 return (
  <div className={s.secondStepFormRegister}>
   <h2>Тип аккаунта</h2>
   <Controller
    name="type_account"
    control={control}
    rules={{
     required: "тип обязателен",
    }}
    render={({ field: { onChange, ref, ...field } }) => (
     <ReactSelectElement
      ItemRef={ref}
      placeholder="Выбрать"
      options={optionsTypeAccount}
      onChange={onChange}
      errors={errors.type_account}
      customStyles={customStyles}
      {...field}
     />
    )}
   />

   <div className={s.btnFormWrapper}>
    <BtnInFormSaveCancel
     textCancelButton="Назад"
     textButton="Далее"
     isValidInButton={!!!watch("type_account")}
     onClick={nextStepRegister}
    />
   </div>
  </div>
 );
};
