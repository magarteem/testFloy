import backGroundImg from "../assets/images/backgroundProfileHeader.webp";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { NameProfile } from "../common/components/profile/nameProfile/NameProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import { Skills } from "../common/layout/skills/Skills";
import { useAppSelector } from "../core/redux/app/hooks";
import s from "./styles/userPage.module.scss";

export const User = () => {
  const skillsData = useAppSelector(
    (state) => state.userSliceReducer.skillsData
  );

  return (
    <>
      <HeaderWrapper srcPhoto={backGroundImg}>
        <HeaderProfile />
      </HeaderWrapper>

      <section className={s.main}>
        <NameProfile
          age="24"
          name="Александр Ковальчук"
          sity="Москва, Россия"
        />

        {skillsData.map((elem, index) => (
          <Skills skillsDataItem={elem} key={index} />
        ))}
      </section>
    </>
  );
};
