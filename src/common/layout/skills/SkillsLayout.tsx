import { memo } from "react";
import { OptionsTypeTool } from "../../../modules/user/types/userSliceType";
import s from "./skillsLayout.module.scss";

interface SkillsLayoutType {
 skillsDataItem: string | OptionsTypeTool[];
 skillsCategoryTitle: string;
}

export const SkillsLayout = memo(
 ({
  skillsDataItem,
  skillsCategoryTitle,
 }: SkillsLayoutType) => {
  return (
   <div className={s.skills}>
    <div className={s.profileDataFields}>
     {skillsDataItem !== "" && (
      <h2>{skillsCategoryTitle}</h2>
     )}

     <div className={s.skills_item}>
      {Array.isArray(skillsDataItem)
       ? skillsDataItem.map((item) => {
          return (
           <div className={s.item} key={item.label}>
            {item.label}
           </div>
          );
         })
       : skillsDataItem !== "" && (
          <span className={s.textNotes}>
           {skillsDataItem}
          </span>
         )}
     </div>
    </div>
   </div>
  );
 }
);
