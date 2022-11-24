import { ISignUpFormValues } from "../../authorization/types/type";

export interface OptionsTypeTools {
 label: string;
 value: string;
 imgIcons: string;
}
export interface OptionsTypeTool {
 label: string;
 value: string;
 hexColor?: string;
}

export interface EducationType {
 img: string;
 institution: string;
 period: string;
}

export interface SkillsType {
 tool: OptionsTypeTools[];
 genre: OptionsTypeTool[];
 workExperience: string | EducationType[];
 master: OptionsTypeTool | null;
 education: string | EducationType[];
 inspiration: string[];
}

export interface InitialStateUserType {
 id_user: string;
 name: string;
 email: string;
 sity: OptionsTypeTool | null;
 age: Date | number | null;
 img_upload: string;
 gender: OptionsTypeTool | null;
 type_account: OptionsTypeTool;
 skills: SkillsType;
 private_settings: OptionsTypeTool | null;
}

//
export type ChangeProfileFormValues = Omit<
 ISignUpFormValues,
 "email" | "password" | "img_upload" | "type_account"
>;
