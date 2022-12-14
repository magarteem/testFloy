import { Outlet } from "react-router-dom";
import filterIcons from "../assets/icons/filterIcons.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { TabsComponent } from "../common/components/notification/tabsComponent/TabsComponent";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { useAppSelector } from "../core/redux/app/hooks";
import s from "./styles/notification.module.scss";

export const Notification = () => {
 const adsData = useAppSelector(
  (state) => state.adsSliceReducer
 );

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <div className={s.wrappHeader}>
    <HeaderStylesWrapper
     textLabel="Запросы"
     anyIconsFirst={{ img: searchIcon, action: "" }}
     anyIconsSecond={{ img: filterIcons, action: "" }}
    />
   </div>
   <TabsComponent />

   <StylesFullScreen>
    <RibbonLayout>
     <Outlet />

     <p>d</p>
     <p>d</p>
     <p>d</p>
     <p>d</p>
    </RibbonLayout>
   </StylesFullScreen>
   <PopUpNavigateGradient />
  </>
 );
};
