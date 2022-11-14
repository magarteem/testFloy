import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import s from "./button.module.scss";

interface ButtonBackType {
  textCancelButton: string;
  isValidButtonBack?: boolean;
  typeButton?: "button" | "reset" | "submit";
  onClick?: () => void;
}

export const ButtonBack = ({
  textCancelButton,
  isValidButtonBack,
  typeButton = "button",
  onClick,
  ...props
}: ButtonBackType) => {
  const navigate = useNavigate();
  const returnStepRegister = (event: MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    navigate(-1);
  };

  return (
    <button
      className={s.buttonBackWrapper}
      type={typeButton}
      disabled={isValidButtonBack}
      onClick={onClick ? onClick : returnStepRegister}
      {...props}
    >
      {textCancelButton}
    </button>
  );
};
