import { ButtonBack } from "../../ui-elements/button/ButtonBack";
import { InButton } from "../../ui-elements/button/InButton";
import s from "./btnInFormSaveCancel.module.scss";

interface BtnInFormSaveCancelType {
  textCancelButton: string;
  typeButton?: "button" | "reset" | "submit";
  textButton: string;
  isValidButtonBack?: boolean;
  isValidInButton?: boolean;
  onClickBack?: () => void;
  onClick?: () => void;
}

export const BtnInFormSaveCancel = ({
  textCancelButton,
  typeButton,
  textButton,
  isValidButtonBack,
  isValidInButton,
  onClickBack,
  onClick,
}: BtnInFormSaveCancelType) => {
  console.log("111");

  return (
    <div className={s.sendDataForm}>
      <div className={s.btnWrapper}>
        <ButtonBack
          textCancelButton={textCancelButton}
          isValidButtonBack={isValidButtonBack}
          onClick={onClickBack}
        />
      </div>
      <div className={s.btnWrapper}>
        <InButton
          typeButton={typeButton}
          textButton={textButton}
          isValidInButton={isValidInButton}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
