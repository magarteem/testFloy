import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InButton } from "../../common/ui-elements/button/InButton";
import { ReactSelect } from "../../common/components/signIn/reactSelect/ReactSelect";
import s from "./style/secondStepFormRegister.module.scss";
import { ButtonBack } from "../../common/ui-elements/button/ButtonBack";

export const SecondStepFormRegister = () => {
  const navigate = useNavigate();
  const [selectData, setSelectData] = useState();

  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext();

  console.log("ewew");
  console.log(errors.typeAccount);
  console.log(isValid);

  const nextStepRegister = () =>
    navigate("/register/create-questionnaire", { replace: true });
  const returnStepRegister = () => navigate("/register", { replace: true });

  return (
    <div className={s.secondStepFormRegister}>
      <h2>Тип аккаунта</h2>
      <Controller
        name="typeAccount"
        control={control}
        rules={{
          required: "тип обязателен",
        }}
        render={({ field: { onChange } }) => (
          <ReactSelect
            errors={errors.typeAccount && errors.typeAccount.message}
            onChange={onChange}
          />
        )}
      />

      <div className={s.bntNavigate}>
        <div className={s.styleBtn} onClick={returnStepRegister}>
          <ButtonBack textButton="Назад" />
        </div>
        <div className={s.styleBtn} onClick={nextStepRegister}>
          <InButton textButton="Далее" isValid={!false} />
        </div>
      </div>
    </div>
  );
};
