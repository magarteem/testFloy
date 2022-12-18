import backGroundImg from "../assets/images/backgroundProfileHeader.webp";
import { AboutProfile } from "../common/components/profile/aboutProfile/AboutProfile";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { useAppSelector } from "../core/redux/app/hooks";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";

export const ProfileInfo = () => {
 const userDataProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 if (!userDataProfile)
  return (
   <>
    <p>Что то с интернет</p>
    <p>Попробуйте обновить страницу</p>
   </>
  );

 return (
  <>
   <HeaderWrapper srcPhoto={backGroundImg}>
    <HeaderProfile
     textLabel={userDataProfile.email}
     change={true}
     settings={true}
     avatar={userDataProfile.avatar}
    />
   </HeaderWrapper>

   <AboutProfile userDataProfile={userDataProfile} />

   <PopUpNavigateGradient />
  </>
 );
};
