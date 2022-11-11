import { ISignUpFormValues } from "../../authorization/types/type";

export interface OptionsTypeTool {
 label: string;
 value: string;
}

export interface EducationType {
 img: string;
 institution: string;
 period: string;
}

export interface SkillsType {
 tool: OptionsTypeTool[];
 genre: OptionsTypeTool[];
 workExperience: string | EducationType[];
 master: OptionsTypeTool;
 education: string | EducationType[];
 inspiration: string[];
}

export interface InitialStateUserType {
 id_user: string;
 name: string;
 email: string;
 sity: OptionsTypeTool;
 age: string;
 img_upload: string;
 gender: OptionsTypeTool;
 type_account: OptionsTypeTool;
 skills: SkillsType;
 private_settings: OptionsTypeTool;
}

//
export type ChangeProfileFormValues = Omit<
 ISignUpFormValues,
 "email" | "password" | "img_upload" | "type_account"
>;
