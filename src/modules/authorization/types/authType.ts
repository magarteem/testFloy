export interface ISignInFormValues {
 email: string;
 emailNew: string;
 password: string;
}

//  data Base
export interface OptionSelectType {
 value: string;
 label: string;
}

export interface ToolsType extends OptionSelectType {
 imgIcons: string;
}
export interface GenreType extends OptionSelectType {
 hexColor: string;
}

export interface ISignUpFormValues
 extends ISignInFormValues {
 type_account: OptionSelectType | null;
 name_field: string;
 img_upload: string;
 city: OptionSelectType | null;
 phone: string;
 webSite: string;
 gender: OptionSelectType | null;
 age: number | null;
 tool: ToolsType[];
 genre: GenreType[];
 work_experience: string;
 master: OptionSelectType | null;
 education: string;
 private_settings: OptionSelectType | null;
 inspiration: string | string[];
}
