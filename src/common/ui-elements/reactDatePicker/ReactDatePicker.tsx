import ReactDatePicker, {
 registerLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import "./reactDatePickerElement.scss";
registerLocale("ru", ru);

interface ReactDatePickerType {
 placeholder: string;
 value?: any;
 onChange?: (data: any) => any;
 errors?: any;
}

export const ReactDatePickerElement = ({
 placeholder,
 value,
 onChange,
 ...props
}: ReactDatePickerType) => {
 return (
  <div className="wrapperPicker">
   <ReactDatePicker
    dateFormat="yyyy/MM/dd"
    locale="ru"
    showPopperArrow={false}
    selected={value}
    placeholderText={placeholder}
    //@ts-ignore
    onChange={onChange}
    className="inputDataPicker"
    //customInput={<ExampleCustomInput />}
    autoComplete="off"
    popperPlacement="bottom-start"
    {...props}
   />
  </div>
 );
};
//new Date(t).toLocaleDateString(); => 08.11.2022
