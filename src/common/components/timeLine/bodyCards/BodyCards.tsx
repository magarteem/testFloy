import { TimeLinePostType } from "../../../../modules/timeLine/types/timlineSliceType";
import s from "./bodyCards.module.scss";
import cn from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";

interface BodyCardsType {
 timeLinePost: TimeLinePostType;
 id_news: number;
}

export const BodyCards = ({
 timeLinePost,
 id_news,
}: BodyCardsType) => {
 const [hidden, setHidden] = useState(true);

 const toggleShowMore = () => setHidden((prev) => !prev);
 return (
  <div className={s.bodyCards}>
   <Link
    to={`${RouteNames.NEWS}/${id_news}`}
    className={s.openFullNews}
   >
    {timeLinePost.photo.map((elem, index) => (
     <img key={index} src={elem} alt={elem} />
    ))}

    <div
     className={cn(s.textInfo, { [s.textHidden]: hidden })}
    >
     {timeLinePost.text}
    </div>
   </Link>

   <div className={s.footer}>
    <p onClick={toggleShowMore} className={s.showMore}>
     {hidden ? "Показать полностью" : "Скрыть"}
    </p>
    <p className={s.theme}>{timeLinePost.theme}</p>
   </div>
  </div>
 );
};
