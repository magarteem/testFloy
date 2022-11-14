import arrowReturnBlack from "../../assets/icons/arrowReturnBlack.webp";
import { Controller, useFormContext } from "react-hook-form";
import { UploadPhoto } from "../../common/components/signIn/uploadPhoto/UploadPhoto";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import {
  // ageNumber,
  genderBD,
  genreBD,
  groupeOptions,
  profilePrivacySettings,
  sityBD,
  skillBD,
} from "./service/BD";
import { TextAreaElement } from "../../common/ui-elements/textarea/TextAreaElement";
import { CustomSelectCheckboxTools } from "../../common/components/signIn/CustomSelectCheckbox/CustomSelectCheckboxTools";
import { Input } from "../../common/ui-elements/Input/Input";
import s from "./style/threeStepFormRegister.module.scss";
import { CustomSelectCheckboxGenre } from "../../common/components/signIn/CustomSelectCheckbox/CustomSelectCheckboxGenre";
import { ReactDatePickerElement } from "../../common/ui-elements/reactDatePicker/ReactDatePicker";
import { ButtonBack } from "../../common/ui-elements/button/ButtonBack";
import { InButton } from "../../common/ui-elements/button/InButton";

interface ThreeStepFormRegisterType {
  prev?: any;
}

export const ThreeStepFormRegister = ({ prev }: ThreeStepFormRegisterType) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.threeStepFormRegister}>
      <div className={s.title}>
        <div className={s.btnBack} onClick={prev}>
          <img src={arrowReturnBlack} alt="back" />
        </div>
        <h1>Создание анкеты</h1>
      </div>

      <div className={s.main}>
        <div className={s.styleInput}>
          <Controller
            name="name_field"
            control={control}
            rules={{
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Не менее 3х символов",
              },
            }}
            render={({ field: { onChange, ...field } }) => (
              <>
                <InputLabel titleSelect="Имя" required />
                <Input
                  placeholder="Ваше имя"
                  onChange={onChange}
                  errors={errors.name_field && errors.name_field.message}
                  {...field}
                />
              </>
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Фотография" required />
          <Controller
            name="img_upload"
            control={control}
            // rules={{
            //   required: "Обязательное поле",
            // }}
            render={({ field: { onChange, ...field } }) => (
              <UploadPhoto register={register} />
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Город" required />
          <Controller
            name="sity"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({
              field: { onChange, value, ...field },
              fieldState: { error },
            }) => (
              <ReactSelectElement
                value={value}
                placeholder="Выбрать"
                options={sityBD}
                onChange={onChange}
                errors={errors.sity}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Пол" required />
          <Controller
            name="gender"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, ...field } }) => (
              <ReactSelectElement
                placeholder="Выбрать"
                options={genderBD}
                onChange={onChange}
                errors={errors.gender}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Возраст" required />
          <Controller
            name="age"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, value, ...field } }) => (
              // <ReactSelectElement
              //  placeholder="Выбрать"
              //  options={ageNumber}
              //  onChange={onChange}
              //  errors={errors.age}
              //  {...field}
              // />
              <ReactDatePickerElement
                placeholder="Дата рождения"
                value={value}
                onChange={onChange}
                errors={errors.age}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Инструмент (род деятельности)" required />
          <Controller
            name="tool"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, ...field } }) => (
              <CustomSelectCheckboxTools
                placeholder="Выбрать"
                options={groupeOptions}
                onChange={onChange}
                errors={errors.tool}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Жанр" required />
          <Controller
            name="genre"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, ...field } }) => (
              <CustomSelectCheckboxGenre
                placeholder="Выбрать"
                options={genreBD}
                onChange={onChange}
                errors={errors.genre}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.styleInput}>
          <InputLabel titleSelect="Опыт работы/выступлений" />
          <Controller
            name="work_experience"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <div className={s.textarea}>
                <TextAreaElement
                  onChange={onChange}
                  placeholderValue="Указать"
                  {...field}
                />
                <span className={s.notes}>Опишите ваш опыт</span>
              </div>
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Мастерство" />
          <Controller
            name="master"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <ReactSelectElement
                placeholder="Выбрать"
                options={skillBD}
                onChange={onChange}
                {...field}
              />
            )}
          />
        </div>

        <div className={s.styleInput}>
          <InputLabel titleSelect="Образование" />
          <Controller
            name="education"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <div className={s.textarea}>
                <TextAreaElement
                  onChange={onChange}
                  placeholderValue="Указать"
                  {...field}
                />
              </div>
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Настройки приватности анкеты" />
          <Controller
            name="private_settings"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, ...field } }) => (
              <ReactSelectElement
                placeholder="Выбрать"
                options={profilePrivacySettings}
                errors={errors.private_settings}
                onChange={onChange}
                {...field}
              />
            )}
          />
        </div>
      </div>

      <div className={s.btnFormWrapper}>
        {/* <BtnInFormSaveCancel
          textCancelButton="Назад"
          textButton="Создать анкету"
          typeButton="submit"
          onClickBack={() => prev()}
        /> */}

        <div className={s.sendDataForm}>
          <div className={s.btnWrapper}>
            <ButtonBack textCancelButton="Назад" onClick={prev} />
          </div>
          <div className={s.btnWrapper}>
            <InButton textButton="Создать анкету" typeButton="submit" />
          </div>
        </div>
      </div>
    </div>
  );
};
