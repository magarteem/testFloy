import addPlas from "../../../assets/icons/addPlas.webp";
import s from "./contactButton.module.scss";

interface ContactButtonType {
 textButton: string;
 isValid?: boolean;
 onClick?: () => void;
}

export const ContactButton = ({
 textButton,
 isValid,
 onClick,
 ...props
}: ContactButtonType) => {
 return (
  <button
   className={s.contactButton}
   type="submit"
   disabled={isValid}
   onClick={onClick}
   {...props}
  >
   <div className={s.btnImgText}>
    <img src={addPlas} alt={addPlas} />
    <span>{textButton}</span>
   </div>
  </button>
 );
};
