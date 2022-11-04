import { CardsProfile } from "../common/components/cardsProfile/CardsProfile";
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
      <HeaderWrapper>
        <CardsProfile />
      </HeaderWrapper>

      <section className={s.main}>
        <div className={s.nameProfile}>
          <h2>Александр Ковальчук</h2>
          <span>24 года, Москва, Россия</span>
        </div>

        {skillsData.map((elem, index) => (
          <Skills skillsDataItem={elem} key={index} />
        ))}
      </section>
    </>
  );
};
