import { Outlet } from "react-router-dom";
import { RecoveryInformation } from "../common/components/signIn/recoveryInformation/RecoveryInformation";
import { CommonLoginLayout } from "../common/layout/commonLogin/CommonLoginLayout";
import { RecoveryPassGetInstructionsForm } from "../modules/authorization/RecoveryPassGetInstructionsForm";
import s from "./styles/recoveryPassword.module.scss";

export const RecoveryPassword = () => {
  return (
    <CommonLoginLayout>
      <div className={s.fieldLogin}>
        <Outlet />
      </div>
    </CommonLoginLayout>
  );
};
