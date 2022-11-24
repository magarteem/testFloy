import { memo } from "react";
import { OptionsTypeTools } from "../../../modules/user/types/userSliceType";
import s from "./skillsLayoutTools.module.scss";

interface SkillsLayoutType {
 skillsDataItem: string | OptionsTypeTools[];
 skillsCategoryTitle: string;
}

export const SkillsLayoutTools = memo(
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
            <img src={item.imgIcons} alt={item.label} />
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
