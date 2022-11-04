export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface ISignUpFormValues {
  email: string;
  password: string;
  type_account: string;
  name_field: string;
  img_upload: any;
  sity: string;
  gender: string;
  age: string;
  tool: OptionSelectType[];
  genre: string;
  work_experience: string;
  master: string;
  education: string;
  private_settings: string;
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

// RecoveryPassGetInstructionsForm
export interface RecoveryPassGetInstructionsFormType {
  email: string;
}

// RecoveryCreateNewPassForm
export interface RecoveryCreateNewPassFormType {
  password: string;
  repeat_password: string;
}
