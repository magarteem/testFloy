import backGroundImg from "../assets/images/backgroundProfileHeader.webp";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { useAppSelector } from "../core/redux/app/hooks";
import { FormChangeProfile } from "../modules/user/FormChangeProfile";
import s from "./styles/changeProfile.module.scss";

export const ChangeProfile = () => {
 const userDataProfile = useAppSelector(
  (state) => state.userSliceReducer
 );
 return (
  <>
   <HeaderWrapper srcPhoto={backGroundImg}>
    <HeaderProfile emainUsers={userDataProfile.email} />
   </HeaderWrapper>

   <section className={s.main}>
    <div className={s.changeAvatar}>
     <button className={s.styleText}>
      Изменить фото профиля
     </button>
    </div>
    <div className={s.addSecondProfile}>
     <button className={s.styleText}>
      Добавить вторую анкету
     </button>
    </div>

    <div className={s.formChangeProfile}>
     <FormChangeProfile userDataProfile={userDataProfile} />
    </div>
   </section>
  </>
 );
};
