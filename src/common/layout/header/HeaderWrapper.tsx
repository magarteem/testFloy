import { ReactNode } from "react";
import s from "./headerWrapper.module.scss";

interface HeaderWrapperType {
  children: ReactNode;
  srcPhoto?: string | undefined;
}

export const HeaderWrapper = ({ children, srcPhoto }: HeaderWrapperType) => {
  const dynamicBackgroundHeader = {
    backgroundImage: `url(${srcPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  return (
    <section className={s.headerWrapper}>
      <div className={s.positionImg}>
        <div
          className={s.backgroundImg}
          style={srcPhoto ? dynamicBackgroundHeader : { background: "" }}
        ></div>
      </div>
      {children}
    </section>
  );
};
