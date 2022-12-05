import { Avatar } from "@mui/material";
import s from "./headerCards.module.scss";
import avatart_11 from "../../../../assets/images/avatart_11.webp";
import { LongMenu } from "../../../mui-element/LongMenu";

export const HeaderCards = () => {
 return (
  <div className={s.headerCards}>
   <div className={s.author}>
    <div className={s.avatar}>
     <Avatar alt="Remy Sharp" src={avatart_11} />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>Евгения Матвеева</h2>
     <span className={s.visit}>
      сегодня в 12:32, Москва
     </span>
    </div>
   </div>

   <div className={s.buttonAction}>
    <LongMenu />
   </div>
  </div>
 );
};
