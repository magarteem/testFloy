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
import { AboutProfileSkillsLayout } from "../../../layout/aboutProfileSkillsLayout/AboutProfileSkillsLayout";

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
     <div className={s.noBorder}>
      <BtnUserContact>
       <div className={s.btnUserContact}>
        <button className={s.buttonContactWrapper}>
         Запросить контакты
        </button>
       </div>
      </BtnUserContact>
     </div>
    )}

    {/*{id_user && (
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
    )}*/}

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

    {Array.isArray(userDataProfile.skills.inspiration) ? (
     <InspirationUser
      inspiration={userDataProfile.skills.inspiration}
      skillsCategoryTitle="Портфолио"
     />
    ) : (
     <AboutProfileSkillsLayout skillsCategoryTitle="Портфолио">
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>О себе:</span>
       {userDataProfile.skills.inspiration}
      </div>
     </AboutProfileSkillsLayout>
    )}

    <AboutProfileSkillsLayout skillsCategoryTitle="Контакты">
     <div className={s.styleAbout}>
      <span className={s.titleSpan}>Телефон:</span>
      {userDataProfile.phone}
     </div>

     <div className={s.styleAbout}>
      <span className={s.titleSpan}>E-mail:</span>
      {userDataProfile.email}
     </div>
    </AboutProfileSkillsLayout>
   </section>
  </>
 );
};
