import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { ISignUpFormValues } from "../modules/authorization/types/authType";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import { RouteNames } from "../core/router/RouteNames";
import { useAppDispatch } from "../core/redux/app/hooks";
import { authThunkRegister } from "../modules/authorization/authThunkRegister";
import s from "./styles/registrationPage.module.scss";

export const Registration = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const method = useForm<ISignUpFormValues>({
  mode: "onBlur",
  defaultValues: {
   email: "",
   password: "",
   type_account: null,
   type_collective: {},
   typeOfInstitution: [],
   name_field: "",
   img_upload: "",
   city: {},
   gender: null,
   age: null,
   tool: [],
   genre: [],
   master: null,
   work_experience: "",
   portfolio_photo: [],
   education: "",
   private_settings: null,
   about_me: "",
   web_site: "",
   email_contact: "",

   opening_hours_from: null,
   opening_hours_to: null,
   room_area: "",
   establishment_description: "",
  },
 });

 const onSubmit = (data: ISignUpFormValues) => {
  dispatch(authThunkRegister(data));
  console.log("data = ", data);
  navigate(RouteNames.LOGIN, { replace: true });
 };

 return (
  <WrapperFullScreen>
   <FormProvider {...method}>
    <form
     noValidate
     className={s.formRegister}
     onSubmit={method.handleSubmit(onSubmit)}
    >
     <Outlet />
    </form>
   </FormProvider>
  </WrapperFullScreen>
 );
};
