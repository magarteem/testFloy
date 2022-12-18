import { Avatar } from "@mui/material";
import { LongMenu } from "../../../mui-element/LongMenu";
import { AuthorType } from "../../../../modules/timeLine/types/timlineSliceType";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import s from "./headerCards.module.scss";
import { dateDeclension } from "../../../../helpers/dateDeclension";

interface HeaderCardsType {
  author: AuthorType;
  date: number;
  menu?: boolean;
}

export const HeaderCards = ({ author, date, menu = true }: HeaderCardsType) => {
  return (
    <div className={s.headerCards}>
      <Link to={`${RouteNames.OTHER_PROFILE_USER}/${author.id_user}`} className={s.author}>
        <div className={s.avatar}>
          <Avatar alt="Remy Sharp" src={author.avatar} />
        </div>
        <div className={s.infoAuthor}>
          <h2 className={s.name}>{author.name}</h2>
          <span className={s.visit}>{`${dateDeclension(date)}, ${author.city}`}</span>
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
