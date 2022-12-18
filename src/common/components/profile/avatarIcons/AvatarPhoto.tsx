import backgroundProfileHeader from "../../../../assets/images/backgroundProfileHeader.webp";
import noAvatar from "../../../../assets/icons/noAvatar.svg";

import s from "./avatarPhoto.module.scss";

interface AvatarIconsType {
 avatarPhoto?: string;
}

export const AvatarPhoto = ({
 avatarPhoto,
}: AvatarIconsType) => {
 return (
  <div className={s.infoAccount}>
   <div className={s.photo}>
    <div className={s.wrapperPhoto}>
     {avatarPhoto ? (
      <img src={avatarPhoto} alt="avatar" />
     ) : (
      <img src={noAvatar} alt="avatar" />
     )}
    </div>
   </div>
  </div>
 );
};
