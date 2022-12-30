import cn from "classnames";
import { useState } from "react";
import { ReactComponent as ArrowLeft } from "../../../../../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../../../assets/icons/arrowRight.svg";
import { Gallery } from "../../../../../modules/ads/Gallery";
import { FilterModalLayout } from "../../../../layout/filterModalLayout/FilterModalLayout";
import s from "./skillsLayoutMaster.module.scss";

interface InspirationType {
 inspiration: string[];
 skillsCategoryTitle: string;
}

export const InspirationUser = ({
 skillsCategoryTitle,
 inspiration,
}: InspirationType) => {
 return (
  <Gallery
   inspiration={inspiration}
   skillsCategoryTitle={skillsCategoryTitle}
  />
 );
};
