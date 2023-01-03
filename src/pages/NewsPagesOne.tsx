import {
 useOutletContext,
 useParams,
} from "react-router-dom";
import moreButtonCircle from "../assets/icons/more-button-circle.svg";
import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import {
 InitialStateType,
 OptionLongMenuType,
} from "../modules/timeLine/types/timlineSliceType";
import { LongMenu } from "../common/mui-element/LongMenu";
import { HeaderCardsNews } from "../common/components/timeLine/headerCards/HeaderCardsNews";
import { RouteNames } from "../core/router/RouteNames";
import { useAppDispatch } from "../core/redux/app/hooks";
import { deleteNewsTimeLineThunk } from "../modules/timeLine/deleteNewsTimeLineThunk";
import { ChipsGenreItem } from "../common/ui-elements/chips/ChipsGenreItem";
import { ChipsToolItem } from "../common/ui-elements/chips/ChipsToolItem";
import { getThisPageURL } from "../helpers/getThisPageURL";
import s from "./styles/newsPagesOne.module.scss";

export const NewsPagesOne = () => {
 const dispatch = useAppDispatch();
 const data: InitialStateType = useOutletContext();

 const { id_news } = useParams();
 const dataOneNews = data.timeLineData?.find(
  (x) => `${x.id}` === id_news
 );
 if (!dataOneNews) return <h1>Loading ...</h1>;

 const deleteThisNews = () => {
  dispatch(deleteNewsTimeLineThunk(dataOneNews.id));
 };

 // вынести в useOptionsLongMenu
 const options: OptionLongMenuType[] = [
  {
   label: "Редактировать",
   link: `${RouteNames.CHANGE_THIS_NEWS}/${dataOneNews.id}`,
   action: () => {},
  },
  { label: "Архивировать", link: "", action: () => {} },
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

 const objectSkills = [
  ...dataOneNews.timeLinePost.genre,
  ...dataOneNews.timeLinePost.tools,
 ];

 return (
  <StylesFullScreen>
   <HeaderStylesWrapper
    cancelImgIcon={arrow_back}
    textLabel="Новость"
    share={shareIcons}
    tsxElement={
     <LongMenu
      moreButtonCircle={moreButtonCircle}
      options={options}
     />
    }
   />

   <section className={s.timeline}>
    {
     <HeaderCardsNews
      author={dataOneNews.author}
      date={dataOneNews.date}
      menu={false}
      timeLinePost={dataOneNews.timeLinePost}
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
      {dataOneNews.timeLinePost.typeCategory?.label}
     </span>

     {objectSkills.map((x: any) => {
      if (x.imgIcons) {
       return <ChipsToolItem itemLabel={x} key={x.value} />;
      } else {
       return (
        <ChipsGenreItem itemLabel={x} key={x.value} />
       );
      }
     })}
    </div>

    {/*<div className={s.footerNews}>
     <span className={s.theme}>
      {dataOneNews.timeLinePost.typeCategory?.label}
     </span>

     {dataOneNews.timeLinePost.genre.map((elem) => (
      <span
       className={s.genre}
       style={{ backgroundColor: elem.hexColor }}
      >
       {elem.label}
      </span>
     ))}
    </div>*/}
   </section>
  </StylesFullScreen>
 );
};
