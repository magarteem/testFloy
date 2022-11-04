import { ReactNode } from "react";
import s from "./headerWrapper.module.scss";

interface HeaderWrapperType {
  children: ReactNode;
}

export const HeaderWrapper = ({ children }: HeaderWrapperType) => {
  return (
    <section className={s.headerWrapper}>
      <div className={s.positionImg}>
        <div className={s.backgroundImg}></div>
      </div>
      {children}
    </section>
  );
};
