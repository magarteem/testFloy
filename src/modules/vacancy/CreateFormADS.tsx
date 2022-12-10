import { Controller, useFormContext } from "react-hook-form";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { CustomReactSelectToolsMui } from "../../common/mui-element/CustomReactSelectToolsMui";
import { DatePickerMui } from "../../common/mui-element/DatePickerMui";
import { SelectElementMui } from "../../common/mui-element/SelectElementMui";
import { SelectGenreElementMui } from "../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { SelectToolsElementMui } from "../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import TextFieldElementMui from "../../common/mui-element/TextFieldElementMui";
import TextFieldTextareaElementMui from "../../common/mui-element/TextFieldTextareaElementMui";
import { cityBD, genderBD, genreBD, groupeOptions, skillBD } from "../authorization/service/BD";
import { requiredADS, typeOfInstitution, workingConditionsBD } from "./service/createVacancuBD";
import s from "./style/createFormADS.module.scss";

export const CreateFormADS = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const work = watch("required")?.value === "Работу";

  return (
    <>
      <div className={s.selectField}>
        <Controller
          name="required"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value, ref, ...field }, fieldState: { error } }) => (
            <SelectElementMui
              ItemRef={ref}
              value={value}
              placeholder="Ищу \ Ищем"
              required={true}
              options={requiredADS}
              //@ts-ignore
              onChange={(e) =>
                onChange({
                  value: e.target.value,
                  label: e.target.value,
                })
              }
              errors={errors.city}
              {...field}
            />
          )}
        />
      </div>

      {work && (
        <div className={s.selectFieldCustomHeight}>
          <Controller
            name="typeOfInstitution"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, value, ref, ...field } }) => (
              <SelectGenreElementMui
                ItemRef={ref}
                value={value}
                placeholder="Тип заведения"
                required={true}
                options={typeOfInstitution}
                onChange={onChange}
                errors={errors.genre}
                {...field}
              />
            )}
          />
        </div>
      )}

      <div className={s.selectFieldCustomHeight}>
        <Controller
          name="tool"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value, ref, ...field } }) => (
            //<CustomReactSelectToolsMui
            <SelectToolsElementMui
              ItemRef={ref}
              value={value}
              placeholder="Инструмент (род деятельности)"
              required={true}
              options={groupeOptions}
              onChange={onChange}
              errors={errors.tool}
              {...field}
            />
          )}
        />
      </div>

      <div className={s.selectFieldCustomHeight}>
        <Controller
          name="genre"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value, ref, ...field } }) => (
            <SelectGenreElementMui
              ItemRef={ref}
              value={value}
              placeholder="Жанр"
              required={true}
              options={genreBD}
              onChange={onChange}
              errors={errors.genre}
              {...field}
            />
          )}
        />
      </div>

      <div className={s.selectField}>
        <Controller
          name="city"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field: { onChange, value, ref, ...field }, fieldState: { error } }) => (
            <SelectElementMui
              ItemRef={ref}
              value={value}
              placeholder="Город"
              required={true}
              options={cityBD}
              //onChange={onChange}
              //@ts-ignore
              onChange={(e) =>
                onChange({
                  value: e.target.value,
                  label: e.target.value,
                })
              }
              errors={errors.city}
              {...field}
            />
          )}
        />
      </div>

      <div className={s.selectField}>
        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, value, ref, ...field } }) => (
            <SelectElementMui
              ItemRef={ref}
              value={value}
              placeholder="Пол"
              options={genderBD}
              //@ts-ignore
              onChange={(e) =>
                onChange({
                  value: e.target.value,
                  label: e.target.value,
                })
              }
              errors={errors.gender}
              {...field}
            />
          )}
        />
      </div>

      <div className={s.ageRange}>
        <div className={s.styleInput}>
          <Controller
            name="fromAge"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, value, ref, ...field } }) => (
              <div className={s.sizeInput}>
                <DatePickerMui
                  views={["year"]}
                  placeholder="Возраст от"
                  required={true}
                  value={value}
                  onChange={(date) => onChange(new Date(date).getTime())}
                  errors={errors.fromAge}
                  helperText="Обязательное поле"
                  {...field}
                />
              </div>
            )}
          />
        </div>

        <div className={s.styleInput}>
          <Controller
            name="toAge"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, value, ref, ...field } }) => (
              <div className={s.sizeInput}>
                <DatePickerMui
                  views={["year"]}
                  minDate={watch("fromAge")}
                  placeholder="До"
                  required={true}
                  value={value}
                  onChange={(date) => onChange(new Date(date).getTime())}
                  errors={errors.toAge}
                  helperText="Обязательное поле"
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>

      <div className={s.requirements}>{work ? <h2>О себе</h2> : <h2>Требования</h2>}</div>

      <div className={s.styleInput}>
        <Controller
          name="work_experience"
          control={control}
          render={({ field: { onChange, ref, ...field } }) => (
            <div className={s.sizeInput}>
              <TextFieldTextareaElementMui
                ItemRef={ref}
                placeholder="Опыт работы/выступлений"
                onChange={onChange}
                multiline={true}
                helperText="Опишите ваш опыт"
                {...field}
              />
            </div>
          )}
        />
      </div>

      <div className={s.selectField}>
        <Controller
          name="master"
          control={control}
          render={({ field: { onChange, ref, ...field } }) => (
            <SelectElementMui
              ItemRef={ref}
              placeholder="Мастерство"
              options={skillBD}
              //@ts-ignore
              onChange={(e) =>
                onChange({
                  value: e.target.value,
                  label: e.target.value,
                })
              }
              {...field}
            />
          )}
        />
      </div>

      <div className={s.styleInput}>
        <Controller
          name="commit"
          control={control}
          render={({ field: { onChange, ref, ...field } }) => (
            <div className={s.sizeInput}>
              <TextFieldTextareaElementMui
                ItemRef={ref}
                placeholder={work ? "О себе" : "Комментарий"}
                onChange={onChange}
                multiline={true}
                {...field}
              />
            </div>
          )}
        />
      </div>

      <div className={s.requirements}>{work ? <h2>О работе</h2> : <h2>О сотрудничестве</h2>}</div>

      {work && (
        <div className={s.styleInput}>
          <Controller
            name="payment"
            control={control}
            rules={{
              required: "Обязательное поле",
            }}
            render={({ field: { onChange, ref, ...field } }) => (
              <div className={s.sizeInput}>
                <TextFieldElementMui
                  ItemRef={ref}
                  placeholder="Оплата"
                  required={true}
                  onChange={onChange}
                  errors={errors.payment && errors.payment.message}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      )}

      <div className={s.selectField}>
        <Controller
          name="workingConditions"
          control={control}
          render={({ field: { onChange, value, ref, ...field }, fieldState: { error } }) => (
            <SelectElementMui
              ItemRef={ref}
              value={value}
              placeholder="Условия работы"
              options={workingConditionsBD}
              //@ts-ignore
              onChange={(e) =>
                onChange({
                  value: e.target.value,
                  label: e.target.value,
                })
              }
              {...field}
            />
          )}
        />
      </div>

      {work && (
        <div className={s.styleInput}>
          <Controller
            name="commitAbout"
            control={control}
            render={({ field: { onChange, ref, ...field } }) => (
              <div className={s.sizeInput}>
                <TextFieldTextareaElementMui ItemRef={ref} placeholder="Комментарий" onChange={onChange} multiline={true} {...field} />
              </div>
            )}
          />
        </div>
      )}

      <div className={s.requirements}>
        <h2>Контакты</h2>
      </div>

      <div className={s.styleInput}>
        <Controller
          name="phone"
          control={control}
          rules={{
            minLength: {
              value: 3,
              message: "Не менее 3х символов",
            },
          }}
          render={({ field: { onChange, ref, ...field } }) => (
            <div className={s.sizeInput}>
              <TextFieldElementMui
                ItemRef={ref}
                placeholder="Телефон"
                onChange={onChange}
                type="number"
                helperText="Обязательное поле"
                errors={errors.phone && errors.phone.message}
                {...field}
              />
            </div>
          )}
        />
      </div>

      <div className={s.styleInput}>
        <Controller
          name="email"
          control={control}
          rules={{
            minLength: {
              value: 3,
              message: "Не менее 3х символов",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Это не Email",
            },
          }}
          render={({ field: { onChange, ref, ...field } }) => (
            <div className={s.sizeInput}>
              <TextFieldElementMui
                ItemRef={ref}
                placeholder="E-mail"
                onChange={onChange}
                helperText="Обязательное поле"
                errors={errors.email && errors.email.message}
                {...field}
              />
            </div>
          )}
        />
      </div>

      <div className={s.styleInput}>
        <Controller
          name="web_site"
          control={control}
          rules={{
            minLength: {
              value: 3,
              message: "Не менее 3х символов",
            },
          }}
          render={({ field: { onChange, ref, ...field } }) => (
            <div className={s.sizeInput}>
              <TextFieldElementMui
                ItemRef={ref}
                placeholder="Веб сайт"
                onChange={onChange}
                helperText="Обязательное поле"
                errors={errors.web_site && errors.web_site.message}
                {...field}
              />
            </div>
          )}
        />
      </div>
    </>
  );
};
