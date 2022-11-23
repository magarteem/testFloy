import { memo } from "react";
import { OptionsTypeTool } from "../../../modules/user/types/userSliceType";
import s from "./skillsLayoutGenre.module.scss";

interface SkillsLayoutType {
 skillsDataItem: string | OptionsTypeTool[];
 skillsCategoryTitle: string;
}

export const SkillsLayoutGenre = memo(
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
          console.log(item);
          return (
           <div
            style={{ backgroundColor: item.hexColor }}
            className={s.item}
            key={item.label}
           >
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
