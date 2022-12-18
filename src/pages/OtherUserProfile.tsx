import arrowReturnWhite from "../assets/icons/arrowReturnWhite.webp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavigateButtonWidthAddBtn } from "../common/components/navigateButton/NavigateButtonWidthAddBtn";
import { AboutProfile } from "../common/components/profile/aboutProfile/AboutProfile";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { tempDataOtherUserProfile } from "../modules/user/service/tempDataOtherUserProfile";
import { InitialStateUserType } from "../modules/user/types/userSliceType";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";

const dataNull: InitialStateUserType = {
 id_user: "",
 name: "",
 email: "",
 city: { value: "", label: "" },
 age: 0,
 avatar: "",
 gender: { value: "", label: "" },
 type_account: { value: "", label: "" },
 skills: {
  tool: [],
  genre: [],
  workExperience: [],
  education: [],
  master: { value: "", label: "" },
  inspiration: [],
 },
 private_settings: { value: "", label: "" },
};

export const OtherUserProfile = () => {
 const { id_user } = useParams();
 const [user, setUser] =
  useState<InitialStateUserType>(dataNull);

 useEffect(() => {
  // fetch(`..../user/${id_user}`).then(res => res.json()).then(data => setUser(data))
  const dataOneUser = tempDataOtherUserProfile.find(
   (x) => x.id_user === id_user
  );
  return dataOneUser && setUser(dataOneUser);
 }, [id_user]);

 console.log(user);
 return (
  <>
   <HeaderWrapper>
    <HeaderProfile
     avatar={user.avatar}
     textLabel={user.email}
     cancelImgIcon={arrowReturnWhite}
    />
   </HeaderWrapper>

   <AboutProfile userDataProfile={user} />

   {/*<NavigateButtonWidthAddBtn />*/}
   <PopUpNavigateGradient />
  </>
 );
};
