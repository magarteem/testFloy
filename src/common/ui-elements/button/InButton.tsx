import s from "./button.module.scss";

interface PropsButton {
  textButton: string;
  isValidInButton?: boolean;
  typeButton?: "button" | "reset" | "submit";
  onClick?: () => void;
}

export const InButton = ({
  textButton,
  isValidInButton,
  typeButton = "button",
  onClick,
}: PropsButton) => {
  return (
    <button
      className={s.buttonWrapper}
      type={typeButton}
      disabled={isValidInButton}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};
