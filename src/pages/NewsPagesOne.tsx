import {
 useOutletContext,
 useParams,
} from "react-router-dom";
import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { LongMenu } from "../common/mui-element/LongMenu";
import s from "./styles/newsPagesOne.module.scss";
import { HeaderCardsNews } from "../common/components/timeLine/headerCards/HeaderCardsNews";
import { dateDeclension } from "../helpers/dateDeclension";

import dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
dayjs.locale("ru");
//dayjs.extend(relativeTIme);
dayjs.extend(isToday);

export const NewsPagesOne = () => {
 const data: InitialStateType = useOutletContext();

 const { id_news } = useParams();
 const dataOneNews = data.timeLineData?.find(
  (x) => `${x.id}` === id_news
 );

 if (!dataOneNews) return <h1>Loading ...</h1>;

 const datePub = (date: number): string => {
  let newDate = new Date();
  let datePublicationMS = new Date(date).getTime();
  newDate.setDate(newDate.getDate() - 2);
  newDate.setHours(0, 0, 0, 0);

  const renderDate =
   newDate.getTime() > datePublicationMS
    ? `${dayjs(datePublicationMS).format(
       "D.MM.YYYY в HH:MM"
      )}`
    : `${
       dayjs(date).isToday() ? "сегодня" : "вчера"
      } в ${dayjs(date).format("H:M")}`;

  return renderDate;
 };

 return (
  <StylesFullScreen>
   <HeaderStylesWrapper
    cancelImgIcon={arrow_back}
    textLabel="Новость"
    share={shareIcons}
    tsxElement={<LongMenu />}
   />

   <section className={s.timeline}>
    {
     <HeaderCardsNews
      author={dataOneNews.author}
      date={dataOneNews.date}
      menu={false}
      theme={dataOneNews.timeLinePost.theme}
     />
    }

    <div className={s.bodyNews}>
     {dataOneNews.timeLinePost.photo.map((elem, index) => (
      <img key={index} src={elem} alt={elem} />
     ))}

     <div className={s.textInfo}>
      {dataOneNews.timeLinePost.text}
     </div>
    </div>

    <div className={s.footerNews}>
     <span className={s.theme}>
      {dataOneNews.timeLinePost.theme}
     </span>

     {dataOneNews.timeLinePost.genre.map((elem) => (
      <span
       className={s.genre}
       style={{ backgroundColor: elem.hexColor }}
      >
       {elem.label}
      </span>
     ))}
    </div>
   </section>
  </StylesFullScreen>
 );
};
