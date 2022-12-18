import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
Dayjs.locale("ru");
Dayjs.extend(relativeTIme);

export const dateDeclension = (date: number) => Dayjs(date).fromNow()
