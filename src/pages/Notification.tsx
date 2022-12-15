import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import filterIcons from "../assets/icons/filterIcons.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { TabsComponent } from "../common/components/notification/tabsComponent/TabsComponent";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { useAppDispatch, useAppSelector } from "../core/redux/app/hooks";
import { getDataNotificationThunk } from "../modules/notification/getDataNotificationThunk";
import { OutgoingNotificationData } from "../modules/notification/service/notification_BD";

export const Notification = () => {
  const dispatch = useAppDispatch();
  const adsData = useAppSelector((state) => state.notificationSliceReducer);

  useEffect(() => {
    adsData.adsList.length === 0 &&
      dispatch(getDataNotificationThunk(OutgoingNotificationData));
  }, []);

  if (adsData.isLoading) return <h1>Loading.....</h1>;
  if (adsData.error) return <h1>Error</h1>;

  return (
    <>
      <StylesFullScreen>
        <HeaderStylesWrapper
          textLabel="Запросы"
          anyIconsFirst={{ img: searchIcon, action: "" }}
          anyIconsSecond={{ img: filterIcons, action: "" }}
        />
      </StylesFullScreen>
      <TabsComponent />

      <StylesFullScreen>
        <RibbonLayout>
          <Outlet context={adsData} />
        </RibbonLayout>
      </StylesFullScreen>
      <PopUpNavigateGradient />
    </>
  );
};
