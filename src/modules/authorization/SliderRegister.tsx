import { FormProvider, useForm } from "react-hook-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISignUpFormValues } from "./types/type";
import { CommonLoginLayout } from "../../common/layout/commonLogin/CommonLoginLayout";
import { useState } from "react";
import { EffectFade } from "swiper";
import { FirstStepFormRegister } from "./FirstStepFormRegister";
import { SecondStepFormRegister } from "./SecondStepFormRegister";
import { ThreeStepFormRegister } from "./ThreeStepFormRegister";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../common/variables/RouteNames";
import "swiper/css";

//import "swiper/css/effect-fade";
import "./style/sliderRegister.scss";
import s from "./style/sliderRegister.module.scss";
import { RegistrationQuestionLink } from "../../common/components/signIn/registrationQuestion/RegistrationQuestionLink";

export const SliderRegister = () => {
 const navigate = useNavigate();
 const [mySlides, setMySlides] = useState<any>(null);

 const method = useForm<ISignUpFormValues>({
  mode: "onBlur",
  defaultValues: {
   email: "",
   password: "",
   type_account: "",
   name_field: "",
   img_upload: "",
   sity: null,
   gender: null,
   age: "",
   tool: [],
   genre: [],
   work_experience: "",
   master: null,
   education: "",
   private_settings: null,
  },
 });

 const { handleSubmit, trigger } = method;

 const next = async (fields: any) => {
  console.log(fields);

  const result = await trigger(fields);
  if (!result) return;
  await mySlides?.slideNext();
 };

 const prev = async () => {
  await mySlides?.slidePrev();
 };

 const onSubmit = (data: ISignUpFormValues) => {
  console.log("===");
  console.log(data);
  navigate(RouteNames.LOGIN, { replace: true });
  console.log("===");
 };

 return (
  <FormProvider {...method}>
   <form className={s.fr} onSubmit={handleSubmit(onSubmit)}>
    <Swiper
     // modules={[EffectFade]}
     // effect="fade"
     autoHeight={true}
     slidesPerView={1}
     noSwiping={true}
     className={s.swp}
     // noSwipingClass="noSwipingClass"
     onSwiper={(swiper) => setMySlides(swiper)}
    >
     <SwiperSlide className="noSwipingClass noSwipingClass1">
      <CommonLoginLayout>
       <FirstStepFormRegister next={next} />

       <RegistrationQuestionLink
        linkTo={RouteNames.LOGIN}
        lintText="ВОЙТИ"
        questionText="Уже есть аккаунт?"
       />
      </CommonLoginLayout>
     </SwiperSlide>

     <SwiperSlide className="noSwipingClass">
      <CommonLoginLayout>
       <SecondStepFormRegister next={next} prev={prev} />
      </CommonLoginLayout>
     </SwiperSlide>

     <SwiperSlide className="noSwipingClass">
      <ThreeStepFormRegister prev={prev} />
     </SwiperSlide>
    </Swiper>
   </form>
  </FormProvider>
 );
};
