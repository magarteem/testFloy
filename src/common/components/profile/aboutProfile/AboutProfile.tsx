import { useParams } from "react-router-dom";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import {
  BtnUser,
  InspirationUser,
  SkillsLayout,
} from "../../../layout/skills/SkillsLayout";
import { WorkEducationeCards } from "../../../layout/skills/WorkEducationeCards";
import { ButtonBack } from "../../../ui-elements/button/ButtonBack";
import { ContactButton } from "../../../ui-elements/button/ContactButton";
import { NavigateButtonWidthAddBtn } from "../../navigateButton/NavigateButtonWidthAddBtn";
import { NameProfile } from "../nameProfile/NameProfile";
import s from "./aboutProfile.module.scss";

interface AboutProfileType {
  userDataProfile: InitialStateUserType;
}

export const AboutProfile = ({ userDataProfile }: AboutProfileType) => {
  const { id_user } = useParams();
  const sendMessageFu = () => {
    console.log("пока ничего не происходит");
  };

  return (
    <>
      <section className={s.main}>
        <NameProfile
          age={userDataProfile.age}
          name={userDataProfile.name}
          sity={userDataProfile.sity ? userDataProfile.sity.label : ""}
        />

        {id_user && (
          <BtnUser>
            <div className={s.btnUserContact}>
              <ContactButton onClick={sendMessageFu} textButton="Связаться" />
            </div>

            <div className={s.btnUserContact}>
              <ButtonBack
                onClick={sendMessageFu}
                textCancelButton="Связаться"
              />
            </div>
          </BtnUser>
        )}

        <SkillsLayout
          skillsDataItem={userDataProfile.skills.tool}
          skillsCategoryTitle="Инструменты"
        />
        <SkillsLayout
          skillsDataItem={userDataProfile.skills.genre}
          skillsCategoryTitle="Жанр"
        />

        <WorkEducationeCards
          workEducationeData={userDataProfile.skills.workExperience}
          skillsCategoryTitle="Опыт работы"
        />
        <WorkEducationeCards
          workEducationeData={userDataProfile.skills.education}
          skillsCategoryTitle="Образование"
        />
        {userDataProfile.skills.master && (
          <SkillsLayout
            skillsDataItem={userDataProfile.skills.master.label}
            skillsCategoryTitle="Мастерство"
          />
        )}
        {userDataProfile.skills.inspiration.length > 0 && (
          <InspirationUser
            inspiration={userDataProfile.skills.inspiration}
            skillsCategoryTitle="Портфолио"
          />
        )}
      </section>

      <NavigateButtonWidthAddBtn />
    </>
  );
};
