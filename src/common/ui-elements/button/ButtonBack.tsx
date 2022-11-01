import s from "./button.module.scss";

interface ButtonBackType {
  textButton: string;
  isValid?: boolean;
}

export const ButtonBack = ({ textButton, isValid = true }: ButtonBackType) => {
  return (
    <button className={s.buttonBackWrapper} type="submit" disabled={!isValid}>
      {textButton}
    </button>
  );
};
