import s from "./button.module.scss";

interface ButtonBackType {
  textButton: string;
  isValid?: boolean;
  onClick?: () => void;
}

export const ButtonBack = ({
  textButton,
  isValid,
  onClick,
}: ButtonBackType) => {
  return (
    <button
      className={s.buttonBackWrapper}
      type="submit"
      disabled={isValid}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};
