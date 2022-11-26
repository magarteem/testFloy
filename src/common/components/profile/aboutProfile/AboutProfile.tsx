import { useParams } from "react-router-dom";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { BtnUserContact } from "../../../layout/skills/BtnUserContact";
import { InspirationUser } from "../../../layout/skills/InspirationUser";
import { SkillsLayoutMaster } from "../../../layout/skills/SkillsLayoutMaster";
import { SkillsLayoutGenre } from "../../../layout/skills/SkillsLayoutGenre";
import { SkillsLayoutTools } from "../../../layout/skills/SkillsLayoutTools";
import { ExperienceCards } from "../../../layout/skills/ExperienceCards";
import { ContactButton } from "../../../ui-elements/button/ContactButton";
import { NameProfile } from "../nameProfile/NameProfile";
import s from "./aboutProfile.module.scss";
import { WorkEducationeCards } from "../../../layout/skills/WorkEducationeCards";

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
     age={userDataProfile.age}
     name={userDataProfile.name}
     sity={
      userDataProfile.sity ? userDataProfile.sity.label : ""
     }
    />

    {id_user && (
     <BtnUserContact>
      <div className={s.btnUserContact}>
       <ContactButton textButton="Связаться" />
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

    <ExperienceCards
     workEducationeData={
      userDataProfile.skills.workExperience
     }
     skillsCategoryTitle="Опыт работы"
    />
    <WorkEducationeCards
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
