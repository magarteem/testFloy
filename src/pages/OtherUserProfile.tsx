import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderProfile } from "../common/components/profile/cardsProfile/HeaderProfile";
import { NameProfile } from "../common/components/profile/nameProfile/NameProfile";
import { HeaderWrapper } from "../common/layout/header/HeaderWrapper";
import {
  BtnUser,
  InspirationUser,
  SkillsLayout,
} from "../common/layout/skills/SkillsLayout";
import { WorkEducationeCards } from "../common/layout/skills/WorkEducationeCards";
import { ButtonBack } from "../common/ui-elements/button/ButtonBack";
import { ContactButton } from "../common/ui-elements/button/ContactButton";
import { tempDataOtherUserProfile } from "../modules/user/service/tempDataOtherUserProfile";
import { OneUserProfileType } from "../modules/user/types/typeTempDataOtherUserProfile";
import s from "./styles/otherUserProfile.module.scss";

const dataNull: OneUserProfileType = {
  id_user: "",
  name: "",
  email: "",
  sity: "",
  age: "",
  img_upload: "",
  gender: "",
  type_account: "",
  skills: {
    tool: [],
    genre: [],
    workExperience: [],
    education: [],
    master: "",
    inspiration: [],
  },
  private_settings: "",
};

export const OtherUserProfile = () => {
  const { id_user } = useParams();
  const [user, setUser] = useState<OneUserProfileType>(dataNull);

  useEffect(() => {
    // fetch(`..../user/${id_user}`).then(res => res.json()).then(data => setUser(data))
    const dataOneUser = tempDataOtherUserProfile.find(
      (x) => x.id_user === id_user
    );
    return dataOneUser && setUser(dataOneUser);
  }, [id_user]);

  const { tool, genre, workExperience, education, master, inspiration } =
    user.skills;
  return (
    <>
      <HeaderWrapper>
        <HeaderProfile />
      </HeaderWrapper>

      <section className={s.main}>
        <NameProfile age={user.age} name={user.name} sity={user.sity} />

        <BtnUser>
          <div className={s.btnUserContact}>
            <ContactButton textButton="Связаться" />
          </div>

          <div className={s.btnUserContact}>
            <ButtonBack textButton="Связаться" />
          </div>
        </BtnUser>

        <SkillsLayout skillsDataItem={tool} skillsCategoryTitle="Инструменты" />
        <SkillsLayout skillsDataItem={genre} skillsCategoryTitle="Жанр" />

        <WorkEducationeCards
          workEducationeData={workExperience}
          skillsCategoryTitle="Опыт работы"
        />
        <WorkEducationeCards
          workEducationeData={education}
          skillsCategoryTitle="Образование"
        />
        {master && (
          <SkillsLayout
            skillsDataItem={master}
            skillsCategoryTitle="Мастерство"
          />
        )}
        {inspiration.length > 0 && (
          <InspirationUser
            inspiration={inspiration}
            skillsCategoryTitle="Портфолио"
          />
        )}
      </section>
    </>
  );
};
