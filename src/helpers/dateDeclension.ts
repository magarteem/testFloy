import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";

Dayjs.locale("ru");
Dayjs.extend(relativeTIme);
Dayjs.extend(isToday);

//export const dateDeclension = (date: number) =>
// Dayjs(date).fromNow();

export const dateDeclension = (date: number): string => {
 let newDate = new Date();
 let datePublicationMS = new Date(date).getTime();
 newDate.setDate(newDate.getDate() - 2);
 newDate.setHours(0, 0, 0, 0);

 const renderDate =
  newDate.getTime() > datePublicationMS
   ? `${Dayjs(datePublicationMS).format(
      "D MMMM YYYY в hh:mm"
     )}`
   : `${
      Dayjs(date).isToday() ? "сегодня" : "вчера"
     } в ${Dayjs(date).format("h:m")}`;

 return renderDate;
};
