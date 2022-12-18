import { useOutletContext, useParams } from "react-router-dom";
import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { LongMenu } from "../common/mui-element/LongMenu";
import { HeaderCards } from "../common/components/timeLine/headerCards/HeaderCards";
import s from "./styles/newsPagesOne.module.scss";

const share = { img: shareIcons, action: "" };

export const NewsPagesOne = () => {
  const data: InitialStateType = useOutletContext();

  const { id_news } = useParams();
  const dataOneNews = data.timeLineData?.find((x) => `${x.id}` === id_news);

  if (!dataOneNews) return <h1>Loading ...</h1>;

  return (
    <StylesFullScreen>
      <HeaderStylesWrapper cancelImgIcon={arrow_back} textLabel="Новость" anyIconsFirst={share} tsxElement={<LongMenu />} />

      <section className={s.timeline}>
        {<HeaderCards author={dataOneNews.author} date={dataOneNews.date} menu={false} />}

        <div className={s.bodyNews}>
          {dataOneNews.timeLinePost.photo.map((elem, index) => (
            <img key={index} src={elem} alt={elem} />
          ))}

          <div className={s.textInfo}>{dataOneNews.timeLinePost.text}</div>
        </div>

        <div className={s.footerNews}>
          <span className={s.theme}>{dataOneNews.timeLinePost.theme}</span>
          {dataOneNews.timeLinePost.genre.map((elem) => (
            <span className={s.genre} style={{ backgroundColor: elem.hexColor }}>
              {elem.label}
            </span>
          ))}
        </div>
      </section>
    </StylesFullScreen>
  );
};
