import { ReactNode } from "react";
import s from "./ribbonLayout.module.scss";

interface RibbonLayoutType {
 children: ReactNode;
}

export const RibbonLayout = ({
 children,
}: RibbonLayoutType) => {
 return (
  <section className={s.ribbonLayout}>{children}</section>
 );
};
