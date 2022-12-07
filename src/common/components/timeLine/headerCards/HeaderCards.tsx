import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { AuthorType } from "../../../../modules/timeLine/types/timlineSliceType";
import s from "./headerCards.module.scss";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";

interface HeaderCardsType {
 author: AuthorType;
 date: number;
 menu?: boolean;
}

export const HeaderCards = ({
 author,
 date,
 menu = true,
}: HeaderCardsType) => {
 return (
  <div className={s.headerCards}>
   {/*<div className={s.author}>*/}
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
      {new Date(date).toLocaleDateString()}, Москва
     </span>
    </div>
   </Link>
   {/*</div>*/}

   {menu && (
    <div className={s.buttonAction}>
     <LongMenu />
    </div>
   )}
  </div>
 );
};

{
 /*<Link to={`${RouteNames.OTHER_PROFILE_USER}/vova`} style={{ margin: "10px" }}>
Вова
</Link>*/
}
