import { Pending } from "./action/Pending";
import { Received } from "./action/Received";
import { Rejected } from "./action/Rejected";
import s from "./waitingActionButton.module.scss";

interface WaitingActionButtonType {
 status: { userId: string; status: number };
}

export const WaitingActionButton = ({
 status,
}: WaitingActionButtonType) => {
 return (
  <div className={s.pending}>
   {status.status === 0 && <Pending />}
   {status.status === 1 && <Received status={status} />}
   {status.status === 2 && <Rejected />}
  </div>
 );
};
