import s from "./button.module.scss";

interface PropsButton {
  textButton: string;
  isValid?: boolean;
  onClick?: () => void;
}

export const InButton = ({ textButton, isValid, onClick }: PropsButton) => {
  return (
    <button
      className={s.buttonWrapper}
      type="submit"
      disabled={isValid}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};
