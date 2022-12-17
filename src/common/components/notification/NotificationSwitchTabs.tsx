import filterIcons from "../../../assets/icons/filterIcons.svg";
import searchIcon from "../../../assets/icons/searchIcon.svg";
import { Outlet } from "react-router-dom";
import { PopUpNavigateGradient } from "../navigateButton/PopUpNavigateGradient";
import { TabsComponent } from "./tabsComponent/TabsComponent";
import { HeaderStylesWrapper } from "../../layout/headerStylesWrapper/HeaderStylesWrapper";
import { RibbonLayout } from "../../layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../../layout/stylesFullScreen/StylesFullScreen";
import { useAppDispatch, useAppSelector } from "../../../core/redux/app/hooks";
import { getDataNotificationThunk } from "../../../modules/notification/getDataNotificationThunk";
import { OutgoingNotificationData } from "../../../modules/notification/service/notification_BD";
import { useEffect } from "react";

export const NotificationSwitchTabs = () => {
  const dispatch = useAppDispatch();
  const adsDatamm = useAppSelector((state) => state.notificationSliceReducer);

  useEffect(() => {
    adsDatamm.adsList.length === 0 && dispatch(getDataNotificationThunk(OutgoingNotificationData));
  }, []);

  if (adsDatamm.isLoading) return <h1>Loading.....</h1>;
  if (adsDatamm.error) return <h1>Error</h1>;

  return (
    <>
      <StylesFullScreen>
        <HeaderStylesWrapper textLabel="Запросы" anyIconsFirst={{ img: searchIcon, action: "" }} anyIconsSecond={{ img: filterIcons, action: "" }} />
      </StylesFullScreen>
      <TabsComponent />

      <StylesFullScreen>
        <RibbonLayout>
          <Outlet context={adsDatamm} />
        </RibbonLayout>
      </StylesFullScreen>

      <PopUpNavigateGradient />
    </>
  );
};
