import { Controller, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import arrow_left from "../../assets/icons/arrow_left.webp";
import { UploadPhoto } from "../../common/components/signIn/uploadPhoto/UploadPhoto";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import {
  ageNumber,
  genderBD,
  genreBD,
  groupOptions,
  profilePrivacySettings,
  sityBD,
  skillBD,
} from "./service/BD";
import s from "./style/threeStepFormRegister.module.scss";
import Select from "react-select";
import { TextAreaElement } from "../../common/ui-elements/textarea/TextAreaElement";
import { InButton } from "../../common/ui-elements/button/InButton";
import { ButtonBack } from "../../common/ui-elements/button/ButtonBack";

export const ThreeStepFormRegister = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useFormContext();
  console.log(errors);

  const selectSity = () => {};

  return (
    <div className={s.threeStepFormRegister}>
      <div className={s.title}>
        <Link to={""}>
          <img src={arrow_left} alt="arrow_left" />
        </Link>

        <h1>Создание анкеты</h1>
      </div>

      <div className={s.main}>
        <div className={s.styleInput}>
          <Controller
            name="name-field"
            control={control}
            rules={{
              required: "Обязательное поле",
              minLength: { value: 3, message: "Не менее 3х символов" },
            }}
            render={({ field: { onChange } }) => (
              <>
                <InputLabel titleSelect="Имя" required />
                <input placeholder="Александр Ковальчук " onChange={onChange} />
              </>
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Фотография" required />
          <UploadPhoto />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Город" required />
          <ReactSelectElement
            placeholder="Выбрать"
            options={sityBD}
            onChange={selectSity}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Пол" required />
          <ReactSelectElement
            placeholder="Выбрать"
            options={genderBD}
            onChange={selectSity}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Возраст" required />
          <ReactSelectElement
            placeholder="Выбрать"
            options={ageNumber}
            onChange={selectSity}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Инструмент (род деятельности)" required />
          {/* <ReactSelectElement
            placeholder="Выбрать"
            options={groupOptions}
            onChange={selectSity}
          /> */}

          <Select
            placeholder="Выбрать"
            isSearchable={false}
            options={groupOptions}
            // isMulti
            // formatOptionLabel={formatOptionLabel}
            // menuIsOpen
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Жанр" required />
          <ReactSelectElement
            placeholder="Выбрать"
            options={genreBD}
            onChange={selectSity}
            isMulti
          />
        </div>

        <div className={s.styleInput}>
          <Controller
            name="work-experience"
            control={control}
            rules={
              {
                // required: "Обязательное поле",
                // minLength: { value: 3, message: "Не менее 3х символов" },
              }
            }
            render={({ field: { onChange } }) => (
              <>
                <InputLabel titleSelect="Опыт работы/выступлений" />
                <div className={s.textarea}>
                  <TextAreaElement
                    onChange={selectSity}
                    placeholderValue="Указать"
                  />
                  <span className={s.notes}>Опишите ваш опыт</span>
                </div>
              </>
            )}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Мастерство" />
          <ReactSelectElement
            placeholder="Выбрать"
            options={skillBD}
            onChange={selectSity}
          />
        </div>

        <div className={s.selectField}>
          <InputLabel titleSelect="Настройки приватности анкеты" required />
          <ReactSelectElement
            placeholder="Выбрать"
            options={profilePrivacySettings}
            onChange={selectSity}
          />
        </div>
      </div>

      <div className={s.sendDataForm}>
        <div className={s.btnWrapper}>
          <ButtonBack textButton="Назад" />
        </div>
        <div className={s.btnWrapper}>
          <InButton textButton="Создать анкету" isValid />
        </div>
      </div>
    </div>
  );
};
