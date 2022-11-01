export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignUpFormValues {
  email: string;
  password: string;
  typeAccount: string;
}

//  data Base
export interface OptionSelectType {
  value: string | number;
  label: string | number;
}

//  AgeNumberType
export interface AgeNumberType {
  value: number;
  label: number;
}

//  GroupOptions
interface OptionsType {
  label: string;
  value: string;
}

export interface GroupOptionsType {
  label: string;
  options: OptionsType[];
}
