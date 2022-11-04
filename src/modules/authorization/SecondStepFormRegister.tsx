import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InButton } from "../../common/ui-elements/button/InButton";
import { ReactSelect } from "../../common/components/signIn/reactSelect/ReactSelect";
import s from "./style/secondStepFormRegister.module.scss";
import { ButtonBack } from "../../common/ui-elements/button/ButtonBack";
import { RouteNames } from "../../common/variables/RouteNames";

export const SecondStepFormRegister = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors, isValid },
  } = useFormContext();

  const nextStepRegister = () =>
    navigate(`${RouteNames.REGISTER}/${RouteNames.REG_CREATE_ACCOUNT}`);
  const returnStepRegister = () => navigate(`${RouteNames.REGISTER}`);

  return (
    <div className={s.secondStepFormRegister}>
      <h2>Тип аккаунта</h2>
      <Controller
        name="type_account"
        control={control}
        rules={{
          required: "тип обязателен",
        }}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            valueData={value}
            errors={errors.typeAccount && errors.typeAccount.message}
            onChange={onChange}
          />
        )}
      />

      <div className={s.bntNavigate}>
        <div className={s.styleBtn}>
          <ButtonBack textButton="Назад" onClick={returnStepRegister} />
        </div>
        <div className={s.styleBtn} onClick={nextStepRegister}>
          <InButton textButton="Далее" isValid={!isValid} />
        </div>
      </div>
    </div>
  );
};
