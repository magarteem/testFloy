import { useFormContext } from "react-hook-form";

import s from "./style/createFormADS.module.scss";
import { InputFormRequiredAds } from "./formFieldsVacancy/InputFormRequiredAds";
import { InputFormTypeOfInstitution } from "./formFieldsVacancy/InputFormTypeOfInstitution";
import { InputFormFromAndToAge } from "./formFieldsVacancy/InputFormFromAge";
import { InputFormWorkExperience } from "./formFieldsVacancy/InputFormWorkExperience";
import { InputFormMaster } from "./formFieldsVacancy/InputFormMaster";
import { InputFormCommit } from "./formFieldsVacancy/InputFormCommit";
import { InputFormPayment } from "./formFieldsVacancy/InputFormPayment";
import { InputFormWorkingConditions } from "./formFieldsVacancy/InputFormWorkingConditions";
import { InputFormCommitAbout } from "./formFieldsVacancy/InputFormCommitAbout";
import { InputFormPhone } from "./formFieldsVacancy/InputFormPhone";
import { InputFormEmail } from "./formFieldsVacancy/InputFormEmail";
import { InputFormWebSite } from "./formFieldsVacancy/InputFormWebSite";
import { InputFormGenre } from "./formFieldsVacancy/InputFormGenre";
import { InputFormGender } from "./formFieldsVacancy/InputFormGender";
import { InputFormCity } from "./formFieldsVacancy/InputFormCity";
import { InputFormTools } from "./formFieldsVacancy/InputFormTools";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";

export const CreateFormADS = () => {
 const { control, watch } = useFormContext();
 const typeAds = watch("required")?.value;

 return (
  <>
   <InputFormRequiredAds control={control} />
   {!!typeAds && (
    <>
     {typeAds === "Работу" && (
      <InputFormTypeOfInstitution control={control} />
     )}
     <InputFormTools
      control={control}
      typeVacancy={typeAds}
     />
     <InputFormGenre control={control} />
     <InputFormCity control={control} />
     {typeAds === "Музыканта" && (
      <>
       <InputFormGender control={control} />
       <InputFormFromAndToAge
        control={control}
        watch={watch}
       />
      </>
     )}

     <div className={s.requirements}>
      {typeAds === "Работу" ? (
       <h2>О себе</h2>
      ) : (
       <h2>Требования</h2>
      )}
     </div>

     <InputFormWorkExperience control={control} />
     {typeAds !== "Коллектив" && (
      <InputFormMaster control={control} />
     )}
     <InputFormCommit control={control} typeAds={typeAds} />

     <div className={s.requirements}>
      {typeAds === "Работу" ? (
       <h2>О работе</h2>
      ) : (
       <h2>О сотрудничестве</h2>
      )}
     </div>

     {typeAds === "Работу" && (
      <InputFormPayment control={control} />
     )}
     <InputFormWorkingConditions control={control} />
     {typeAds === "Работу" && (
      <InputFormCommitAbout control={control} />
     )}

     <div className={s.requirements}>
      <h2>Контакты</h2>
     </div>

     <InputFormPhone control={control} />
     <InputFormEmail control={control} />
     <InputFormWebSite control={control} />

     <div className={s.btnFormWrapper}>
      <BtnInGroupeSaveCancelMui
       textCancelButton="Назад"
       textButton="Создать обявление"
      />
     </div>
    </>
   )}
  </>
 );
};

//{/*<div className={s.selectField}>
//    <Controller
//     name="required"
//     control={control}
//     rules={{
//      required: "Обязательное поле",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <SelectElementMui
//       ItemRef={ref}
//       value={value}
//       placeholder="Ищу \ Ищем"
//       required={true}
//       options={requiredADS}
//       //@ts-ignore
//       onChange={(e) =>
//        onChange({
//         value: e.target.value,
//         label: e.target.value,
//        })
//       }
//       errors={errors.required}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*{typeAds === "Работу" && (
//    <div className={s.selectFieldCustomHeight}>
//     <Controller
//      name="typeOfInstitution"
//      control={control}
//      rules={{
//       required: "Обязательное поле",
//      }}
//      render={({
//       field: { onChange, value, ref, ...field },
//      }) => (
//       <SelectGenreElementMui
//        ItemRef={ref}
//        value={value}
//        placeholder="Место работы"
//        required={true}
//        options={typeOfInstitution}
//        onChange={onChange}
//        errors={errors.typeOfInstitution}
//        {...field}
//       />
//      )}
//     />
//    </div>
//   )}*/}

//   {/*<div className={s.selectFieldCustomHeight}>
//    <Controller
//     name="tool"
//     control={control}
//     rules={{
//      required:
//       typeAds === "Коллектив"
//        ? false
//        : "Обязательное поле",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      //<CustomReactSelectToolsMui
//      <SelectToolsElementMui
//       ItemRef={ref}
//       value={value}
//       placeholder="Инструмент (род деятельности)"
//       required={typeAds !== "Коллектив" && true}
//       options={groupeOptions}
//       onChange={onChange}
//       errors={errors.tool}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.selectFieldCustomHeight}>
//    <Controller
//     name="genre"
//     control={control}
//     rules={{
//      required: "Обязательное поле",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//     }) => (
//      <SelectGenreElementMui
//       ItemRef={ref}
//       value={value}
//       placeholder="Жанр"
//       required={true}
//       options={genreBD}
//       onChange={onChange}
//       errors={errors.genre}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.selectField}>
//    <Controller
//     name="city"
//     control={control}
//     rules={{
//      required: "Обязательное поле",
//     }}
//     render={({
//      field: { onChange, value, ref, ...field },
//      fieldState: { error },
//     }) => (
//      <SelectElementMui
//       ItemRef={ref}
//       value={value}
//       placeholder="Город"
//       required={true}
//       options={cityBD}
//       //onChange={onChange}
//       //@ts-ignore
//       onChange={(e) =>
//        onChange({
//         value: e.target.value,
//         label: e.target.value,
//        })
//       }
//       errors={errors.city}
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*{typeAds === "Музыканта" && (
//    <div className={s.selectField}>
//     <Controller
//      name="gender"
//      control={control}
//      render={({
//       field: { onChange, value, ref, ...field },
//      }) => (
//       <SelectElementMui
//        ItemRef={ref}
//        value={value}
//        placeholder="Пол"
//        options={genderBD}
//        //@ts-ignore
//        onChange={(e) =>
//         onChange({
//          value: e.target.value,
//          label: e.target.value,
//         })
//        }
//        errors={errors.gender}
//        {...field}
//       />
//      )}
//     />
//    </div>
//   )}*/}

//   {/*{typeAds === "Музыканта" && (
//    <div className={s.ageRange}>
//     <div className={s.styleInput}>
//      <Controller
//       name="fromAge"
//       control={control}
//       rules={{
//        required: "Обязательное поле",
//       }}
//       render={({
//        field: { onChange, value, ref, ...field },
//       }) => (
//        <div className={s.sizeInput}>
//         <DatePickerMui
//          views={["year"]}
//          placeholder="Возраст от"
//          required={true}
//          value={value}
//          onChange={(date) =>
//           onChange(new Date(date).getTime())
//          }
//          errors={errors.fromAge}
//          helperText="Обязательное поле"
//          {...field}
//         />
//        </div>
//       )}
//      />
//     </div>

//     <div className={s.styleInput}>
//      <Controller
//       name="toAge"
//       control={control}
//       rules={{
//        required: "Обязательное поле",
//       }}
//       render={({
//        field: { onChange, value, ref, ...field },
//       }) => (
//        <div className={s.sizeInput}>
//         <DatePickerMui
//          views={["year"]}
//          minDate={watch("fromAge")}
//          placeholder="До"
//          required={true}
//          value={value}
//          onChange={(date) =>
//           onChange(new Date(date).getTime())
//          }
//          errors={errors.toAge}
//          helperText="Обязательное поле"
//          {...field}
//         />
//        </div>
//       )}
//      />
//     </div>
//    </div>
//   )}*/}

//   {/*<div className={s.requirements}>
//    {typeAds === "Работу" ? (
//     <h2>О себе</h2>
//    ) : (
//     <h2>Требования</h2>
//    )}
//   </div>*/}

//   {/*<div className={s.styleInput}>
//    <Controller
//     name="work_experience"
//     control={control}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <div className={s.sizeInput}>
//       <TextFieldTextareaElementMui
//        ItemRef={ref}
//        placeholder="Опыт работы/выступлений"
//        onChange={onChange}
//        multiline={true}
//        helperText="Опишите требуемый опыт"
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

//   {/*{typeAds !== "Коллектив" && (
//    <div className={s.selectField}>
//     <Controller
//      name="master"
//      control={control}
//      render={({ field: { onChange, ref, ...field } }) => (
//       <SelectElementMui
//        ItemRef={ref}
//        placeholder="Мастерство"
//        options={skillBD}
//        //@ts-ignore
//        onChange={(e) =>
//         onChange({
//          value: e.target.value,
//          label: e.target.value,
//         })
//        }
//        {...field}
//       />
//      )}
//     />
//    </div>
//   )}*/}

//   {/*<div className={s.styleInput}>
//    <Controller
//     name="commit"
//     control={control}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <div className={s.sizeInput}>
//       <TextFieldTextareaElementMui
//        ItemRef={ref}
//        placeholder={
//         typeAds === "Работу" ? "О себе" : "Комментарий"
//        }
//        onChange={onChange}
//        multiline={true}
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.requirements}>
//    {typeAds === "Работу" ? (
//     <h2>О работе</h2>
//    ) : (
//     <h2>О сотрудничестве</h2>
//    )}
//   </div>*/}

//   {/*{typeAds === "Работу" && (
//    <div className={s.styleInput}>
//     <Controller
//      name="payment"
//      control={control}
//      rules={{
//       required: "Обязательное поле",
//       minLength: {
//        value: 3,
//        message: "Не менее 3х символов",
//       },
//      }}
//      render={({ field: { onChange, ref, ...field } }) => (
//       <div className={s.sizeInput}>
//        <TextFieldElementMui
//         ItemRef={ref}
//         placeholder="Оплата"
//         required={true}
//         onChange={onChange}
//         errors={errors.payment}
//         {...field}
//        />
//       </div>
//      )}
//     />
//    </div>
//   )}*/}

//   {/*<div className={s.selectField}>
//    <Controller
//     name="workingConditions"
//     control={control}
//     render={({
//      field: { onChange, value, ref, ...field },
//      fieldState: { error },
//     }) => (
//      <SelectElementMui
//       ItemRef={ref}
//       value={value}
//       placeholder="Условия работы"
//       options={workingConditionsBD}
//       //@ts-ignore
//       onChange={(e) =>
//        onChange({
//         value: e.target.value,
//         label: e.target.value,
//        })
//       }
//       {...field}
//      />
//     )}
//    />
//   </div>*/}

//   {/*{typeAds === "Работу" && (
//    <div className={s.styleInput}>
//     <Controller
//      name="commitAbout"
//      control={control}
//      render={({ field: { onChange, ref, ...field } }) => (
//       <div className={s.sizeInput}>
//        <TextFieldTextareaElementMui
//         ItemRef={ref}
//         placeholder="Комментарий"
//         onChange={onChange}
//         multiline={true}
//         {...field}
//        />
//       </div>
//      )}
//     />
//    </div>
//   )}*/}

//   {/*<div className={s.requirements}>
//    <h2>Контакты</h2>
//   </div>*/}

//   {/*<div className={s.styleInput}>
//    <Controller
//     name="phone"
//     control={control}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <div className={s.sizeInput}>
//       <TextFieldPhoneElementMui
//        ItemRef={ref}
//        placeholder="Телефон"
//        onChange={onChange}
//        type="phone"
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.styleInput}>
//    <Controller
//     name="email"
//     control={control}
//     rules={{
//      minLength: {
//       value: 3,
//       message: "Не менее 3х символов",
//      },
//      pattern: {
//       value: /\S+@\S+\.\S+/,
//       message: "Это не Email",
//      },
//     }}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <div className={s.sizeInput}>
//       <TextFieldElementMui
//        ItemRef={ref}
//        placeholder="E-mail"
//        onChange={onChange}
//        helperText="Обязательное поле"
//        errors={errors.email && errors.email.message}
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}

//   {/*<div className={s.styleInput}>
//    <Controller
//     name="web_site"
//     control={control}
//     rules={{
//      minLength: {
//       value: 3,
//       message: "Не менее 3х символов",
//      },
//     }}
//     render={({ field: { onChange, ref, ...field } }) => (
//      <div className={s.sizeInput}>
//       <TextFieldElementMui
//        ItemRef={ref}
//        placeholder="Веб сайт"
//        onChange={onChange}
//        helperText="Обязательное поле"
//        errors={errors.web_site && errors.web_site.message}
//        {...field}
//       />
//      </div>
//     )}
//    />
//   </div>*/}
