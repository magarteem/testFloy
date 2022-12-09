import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { AuthorType } from "../../../../modules/timeLine/types/timlineSliceType";
import s from "./headerCards.module.scss";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
Dayjs.locale("ru");
Dayjs.extend(relativeTIme);

interface HeaderCardsType {
 author: AuthorType;
 date: number;
 menu?: boolean;
}

const calculateDatePublicher = (date: any) => {
 return Dayjs(date).fromNow();
};
//1670235280000 2
//921838480000 9м
export const HeaderCards = ({
 author,
 date,
 menu = true,
}: HeaderCardsType) => {
 return (
  <div className={s.headerCards}>
   <Link
    to={`${RouteNames.OTHER_PROFILE_USER}/${author.id_user}`}
    className={s.author}
   >
    <div className={s.avatar}>
     <Avatar alt="Remy Sharp" src={author.avatar} />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>{author.name}</h2>
     <span className={s.visit}>
      {`${calculateDatePublicher(date)}, ${author.city}`}
     </span>
    </div>
   </Link>

   {menu && (
    <div className={s.buttonAction}>
     <LongMenu />
    </div>
   )}
  </div>
 );
};
