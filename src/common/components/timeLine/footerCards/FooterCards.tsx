import { Link } from "react-router-dom";
import s from "./footerCards.module.scss";

export const FooterCards = () => {
 return (
  <div className={s.footerCards}>
   <Link to="">Показать полностью</Link>
   <p className={s.theme}>Журнал Тритон</p>
  </div>
 );
};
