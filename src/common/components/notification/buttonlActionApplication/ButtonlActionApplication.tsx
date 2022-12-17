import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { updateDataNotificationThunk } from "../../../../modules/notification/updateDataNotificationThunk";
import { BtnInGroupeSaveCancelMui } from "../../navigateButton/BtnInGroupeSaveCancelMui";
import { Received } from "../waitinActionButton/action/Received";
import { Rejected } from "../waitinActionButton/action/Rejected";
import s from "./buttonlActionApplication.module.scss";

interface ButtonlActionApplicationType {
 userId: string;
 id: number;
 status: { userId: string; status: number };
}

export const ButtonlActionApplication = ({
 userId,
 id,
 status,
}: ButtonlActionApplicationType) => {
 const dispatch = useAppDispatch();

 const cancelAds = () => {
  dispatch(
   updateDataNotificationThunk([
    id,
    {
     userId,
     status: 2,
    },
   ])
  );
 };

 const addAds = () => {
  dispatch(
   updateDataNotificationThunk([
    id,
    {
     userId,
     status: 1,
    },
   ])
  );
 };

 return (
  <>
   {status.status === 0 && (
    <BtnInGroupeSaveCancelMui
     cancelClick={cancelAds}
     onClick={addAds}
     textCancelButton="Отклонить"
     textButton="Принять"
     isValidInButton={false}
    />
   )}
   {status.status === 1 && <Received status={status} />}
   {status.status === 2 && <Rejected />}
  </>
 );
};
