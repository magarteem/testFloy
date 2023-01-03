import { useAppDispatch } from "../../../core/redux/app/hooks";
import { RouteNames } from "../../../core/router/RouteNames";
import { getThisPageURL } from "../../../helpers/getThisPageURL";
import { OptionLongMenuType } from "../../timeLine/types/timlineSliceType";
import { deleteAdsThunk } from "../deleteAdsThunk";

export const useOptionsLongMenu = (id: number) => {
 const dispatch = useAppDispatch();
 const deleteThisAds = () => dispatch(deleteAdsThunk(id));

 const options: OptionLongMenuType[] = [
  {
   label: "Редактировать",
   link: `${RouteNames.ADS}/${RouteNames.ADS_CHANGE_THIS_ADS}/${id}`,
   action: () => {},
  },
  { label: "Архивировать", link: "", action: () => {} },
  {
   label: "Скопировать ссылку",
   link: "",
   action: () => getThisPageURL(),
  },
  {
   label: "Удалить",
   link: RouteNames.ADS,
   action: deleteThisAds,
  },
 ];

 return options;
};
