import { ButtonBack } from "../../ui-elements/button/ButtonBack";
import { InButton } from "../../ui-elements/button/InButton";
import s from "./btnInFormSaveCancel.module.scss";

interface BtnInFormSaveCanselType {
  textCancelButton: string;
  textButton: string;
  isValidButtonBack?: boolean;
  isValidInButton?: boolean;
  onClick?: () => void;
}

export const BtnInFormSaveCansel = ({
  textCancelButton,
  textButton,
  isValidButtonBack,
  isValidInButton,
  onClick,
}: BtnInFormSaveCanselType) => {
  return (
    <div className={s.sendDataForm}>
      <div className={s.btnWrapper}>
        <ButtonBack
          textCancelButton={textCancelButton}
          isValidButtonBack={isValidButtonBack}
        />
      </div>
      <div className={s.btnWrapper}>
        <InButton
          textButton={textButton}
          isValidInButton={isValidInButton}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
