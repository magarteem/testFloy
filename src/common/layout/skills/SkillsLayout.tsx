import { memo, ReactNode } from "react";
import { EducationType } from "../../../modules/user/types/typeTempDataOtherUserProfile";
import s from "./skillsLayout.module.scss";

interface SkillsLayoutType {
  skillsDataItem: string[] | string | EducationType[];
  skillsCategoryTitle: string;
}

export const SkillsLayout = memo(
  ({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
    return (
      <div className={s.skills}>
        <div className={s.profileData}>
          {skillsDataItem !== "" && <h2>{skillsCategoryTitle}</h2>}

          <div className={s.skills_item}>
            {Array.isArray(skillsDataItem)
              ? skillsDataItem.map((item) => {
                  if (typeof item === "object") {
                    return (
                      <div key={item.period} className={s.workExperience}>
                        <div>
                          <img />
                        </div>
                        <div>
                          {item.institution}
                          {item.period}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className={s.item} key={item}>
                        {item}
                      </div>
                    );
                  }
                })
              : skillsDataItem !== "" && (
                  <span className={s.textNotes}>{skillsDataItem}</span>
                )}
          </div>
        </div>
      </div>
    );
  }
);

interface InspirationType {
  inspiration: string[];
  skillsCategoryTitle: string;
}

export const InspirationUser = ({
  skillsCategoryTitle,
  inspiration,
}: InspirationType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          <div className={s.containerImg}>
            {inspiration.map((x) => (
              <div key={x} className={s.img}>
                <img src={x} alt={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface BtnUserType {
  children: ReactNode;
}

export const BtnUser = ({ children }: BtnUserType) => {
  return <div className={s.btnPosition}>{children}</div>;
};
