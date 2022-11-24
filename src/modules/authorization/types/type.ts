// store type
export interface InitialStateType {
 isAuth: boolean;
 error: Error | null;
}

//
export interface ISignInFormValues {
 email: string;
 password: string;
}

//  data Base
export interface OptionSelectTypeTools {
 value: string;
 label: string;
 imgIcons: string;
}
export interface OptionSelectType {
 value: string;
 label: string;
 hexColor?: string;
}
interface WorkExperience {
 img: string;
 institution: string;
 period: string;
}

//  GroupOptions
export interface OptionsType {
 label: string;
 value: string;
 imgIcons: string;
}

export interface GroupOptionsType {
 label: string;
 imgIcons?: string;
 hexColor?: string;
 options: OptionsType[];
}

export interface ISignUpFormValues {
 email: string;
 password: string;
 type_account: OptionSelectType | null;
 name_field: string;
 img_upload: any;
 sity: OptionSelectType | null;
 gender: OptionSelectType | null;
 age: Date | number | null;
 tool: OptionSelectTypeTools[];
 genre: OptionSelectType[];
 work_experience: string | WorkExperience[];
 master: OptionSelectType | null;
 education: string | WorkExperience[];
 private_settings: OptionSelectType | null;
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
