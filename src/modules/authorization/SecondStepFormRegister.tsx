import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ReactSelect } from "../../common/components/signIn/reactSelect/ReactSelect";
import s from "./style/secondStepFormRegister.module.scss";
import { RouteNames } from "../../common/variables/RouteNames";
import { ButtonBack } from "../../common/ui-elements/button/ButtonBack";
import { InButton } from "../../common/ui-elements/button/InButton";

interface SecondStepFormRegisterType {
  next?: any;
  prev?: any;
}

export const SecondStepFormRegister = ({
  next,
  prev,
}: SecondStepFormRegisterType) => {
  const navigate = useNavigate();

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const nextStepRegister = () => {
    navigate(`${RouteNames.REGISTER}/${RouteNames.REG_CREATE_ACCOUNT}`);
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
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            valueData={value}
            errors={errors.typeAccount && errors.typeAccount.message}
            onChange={onChange}
          />
        )}
      />

      <div className={s.btnFormWrapper}>
        <div className={s.sendDataForm}>
          <div className={s.btnWrapper}>
            <ButtonBack textCancelButton="Назад" onClick={prev} />
          </div>
          <div className={s.btnWrapper}>
            <InButton
              textButton="Далее"
              isValidInButton={!!!watch("type_account")}
              onClick={() => next(["type_account"])}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
