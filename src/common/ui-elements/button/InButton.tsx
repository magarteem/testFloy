import s from "./button.module.scss";

interface PropsButton {
  textButton: string;
  isValid?: boolean;
}

export const InButton = ({ textButton, isValid = true }: PropsButton) => {
  return (
    <button className={s.buttonWrapper} type="submit" disabled={!isValid}>
      {textButton}
    </button>
  );
};
