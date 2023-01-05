import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import { getThisPageURL } from "../../../../helpers/getThisPageURL";
import { deleteNewsTimeLineThunk } from "../../../../modules/timeLine/deleteNewsTimeLineThunk";
import {
 InitialStateTeamLineType,
 OptionLongMenuType,
} from "../../../../modules/timeLine/types/timlineSliceType";
import { BodyCards } from "../bodyCards/BodyCards";
import { HeaderCardsNews } from "../headerCards/HeaderCardsNews";
import s from "./cardsNewsItemPreview.module.scss";

export interface CardsNewsItemPreviewType {
 itemDataNews: InitialStateTeamLineType;
}

export const CardsNewsItemPreview = ({
 itemDataNews,
}: CardsNewsItemPreviewType) => {
 const dispatch = useAppDispatch();
 const changeThisNews = () => (
  <Navigate to={RouteNames.CHANGE_THIS_NEWS} />
 );

 const deleteThisNews = () => {
  dispatch(deleteNewsTimeLineThunk(itemDataNews.id));
 };

 // вынести в useOptionsLongMenu
 const options: OptionLongMenuType[] = [
  {
   label: "Редактировать",
   link: `${RouteNames.CHANGE_THIS_NEWS}/${itemDataNews.id}`,
   action: changeThisNews,
  },
  {
   label: "Скопировать ссылку",
   link: "",
   action: () => getThisPageURL(),
  },
  {
   label: "Удалить",
   link: RouteNames.HOME,
   action: deleteThisNews,
  },
 ];

 return (
  <div className={s.cardsItemWrapp} key={itemDataNews.id}>
   <div className={s.customStyleA}>
    <HeaderCardsNews
     author={itemDataNews.author}
     date={itemDataNews.date}
     timeLinePost={itemDataNews.timeLinePost}
     options={options}
    />
   </div>
   <BodyCards
    timeLinePost={itemDataNews.timeLinePost}
    id_news={itemDataNews.id}
    date={itemDataNews.date}
   />
  </div>
 );
};
