import { useParams } from "react-router-dom";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { BtnUserContact } from "./skills/BtnUserContact";
import { InspirationUser } from "./skills/InspirationUser";
import { SkillsLayoutMaster } from "./skills/SkillsLayoutMaster";
import { SkillsLayoutGenre } from "./skills/SkillsLayoutGenre";
import { SkillsLayoutTools } from "./skills/SkillsLayoutTools";
import { ContactButton } from "../../../ui-elements/button/ContactButton";
import { NameProfile } from "../nameProfile/NameProfile";
import { WorkExperienceCard } from "./skills/WorkExperienceCards";
import { EducationeCards } from "./skills/EducationeCards";
import s from "./aboutProfile.module.scss";

interface AboutProfileType {
 userDataProfile: InitialStateUserType;
}

export const AboutProfile = ({
 userDataProfile,
}: AboutProfileType) => {
 const { id_user } = useParams();

 return (
  <>
   <section className={s.main}>
    <NameProfile
     age={userDataProfile.age || 0}
     name={userDataProfile.name}
     city={
      userDataProfile.city ? userDataProfile.city.label : ""
     }
    />

    {id_user && (
     <BtnUserContact>
      <div className={s.btnUserContact}>
       <ContactButton textButton="Подписаться" />
      </div>

      <div className={s.btnUserContact}>
       <button className={s.buttonContactWrapper}>
        Связаться
       </button>
      </div>
     </BtnUserContact>
    )}

    <SkillsLayoutTools
     skillsDataItem={userDataProfile.skills.tool}
     skillsCategoryTitle="Инструменты"
    />
    <SkillsLayoutGenre
     skillsDataItem={userDataProfile.skills.genre}
     skillsCategoryTitle="Жанр"
    />

    {userDataProfile.skills.master && (
     <SkillsLayoutMaster
      skillsDataItem={userDataProfile.skills.master.label}
      skillsCategoryTitle="Мастерство"
     />
    )}

    <WorkExperienceCard
     workEducationeData={
      userDataProfile.skills.workExperience
     }
     skillsCategoryTitle="Опыт работы"
    />
    <EducationeCards
     workEducationeData={userDataProfile.skills.education}
     skillsCategoryTitle="Образование"
    />

    {userDataProfile.skills.inspiration.length > 0 && (
     <InspirationUser
      inspiration={userDataProfile.skills.inspiration}
      skillsCategoryTitle="Портфолио"
     />
    )}
   </section>
  </>
 );
};
