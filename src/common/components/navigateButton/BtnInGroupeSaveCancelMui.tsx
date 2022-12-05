import { Button } from "@mui/material";
import { ButtonBackMui } from "../../mui-element/ButtonBackMui";
import { ButtonSubmitMui } from "../../mui-element/ButtonSubmitMui";
import { ButtonBack } from "../../ui-elements/button/ButtonBack";
import { InButton } from "../../ui-elements/button/InButton";
import s from "./btnInGroupeSaveCancelMui.module.scss";

interface BtnInGroupeSaveCancelMuiType {
 textCancelButton: string;
 textButton: string;
 isValidButtonBack?: boolean;
 isValidInButton?: boolean;
 onClick?: () => void;
}

export const BtnInGroupeSaveCancelMui = ({
 textCancelButton,
 textButton,
 isValidButtonBack,
 isValidInButton = false,
 onClick,
}: BtnInGroupeSaveCancelMuiType) => {
 return (
  <div className={s.sendDataForm}>
   <div className={s.btnWrapper}>
    <ButtonBackMui textCancelButton={textCancelButton} />
   </div>
   <div className={s.btnWrapper}>
    <ButtonSubmitMui
     textButton={textButton}
     isValidInButton={isValidInButton}
    />
   </div>
  </div>
 );
};
