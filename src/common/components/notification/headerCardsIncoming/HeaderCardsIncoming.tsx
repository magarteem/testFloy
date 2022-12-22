import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { AuthorType } from "../../../../modules/timeLine/types/timlineSliceType";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import s from "./headerCardsIncoming.module.scss";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import noAvatar from "../../../../assets/icons/noAvatar.svg";

interface HeaderCardsType {
 author: AuthorType | undefined;
 date: number;
 menu?: boolean;
}

export const HeaderCardsIncoming = ({
 author,
 date,
 menu = true,
}: HeaderCardsType) => {
 return (
  <div className={s.headerCardsIncoming}>
   <Link
    to={`${RouteNames.OTHER_PROFILE_USER}/${author?.id_user}`}
    className={s.author}
   >
    <div className={s.avatar}>
     <Avatar
      alt="Remy Sharp"
      src={author?.avatar ? author.avatar : noAvatar}
     />
    </div>
    <div className={s.infoAuthor}>
     <h2 className={s.name}>{author?.name}</h2>
     <span className={s.visit}>{`${dateDeclension(date)}, ${
      author?.city
     }`}</span>
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
