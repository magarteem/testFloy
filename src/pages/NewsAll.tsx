import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import addIcons from "../assets/icons/addIcons.svg";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { useOutletContext } from "react-router-dom";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { CardsLayoutItem } from "../common/layout/cardsLayoutItem/CardsLayoutItem";
import { HeaderCards } from "../common/components/timeLine/headerCards/HeaderCards";
import { BodyCards } from "../common/components/timeLine/bodyCards/BodyCards";

export const NewsAll = () => {
  const data: InitialStateType = useOutletContext();

  return (
    <>
      <StylesFullScreen>
        <HeaderStylesWrapper
          textLabel="Лента"
          addIcons={addIcons}
          filterIcons={filterIconsNew}
        />

        {data.isLoading ? (
          <h1>Loading....</h1>
        ) : (
          // <TimeLine timeLineData={data.timeLineData} />
          <RibbonLayout>
            {data.timeLineData?.map((x) => (
              <CardsLayoutItem key={x.id}>
                <HeaderCards author={x.author} date={x.date} />
                <BodyCards timeLinePost={x.timeLinePost} id_news={x.id} />
              </CardsLayoutItem>
            ))}
          </RibbonLayout>
        )}
      </StylesFullScreen>

      <PopUpNavigateGradient />
    </>
  );
};
