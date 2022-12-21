import { ISignUpFormValues } from "../../authorization/types/authType";

export interface DataSelectType {
 label: string;
 value: string;
}

export interface ToolsSliceType extends DataSelectType {
 imgIcons: string;
}
export interface GenreSliceType extends DataSelectType {
 hexColor: string;
}

export interface SkillsType {
 tool: ToolsSliceType[];
 genre: GenreSliceType[];
 workExperience: string;
 master: DataSelectType | null;
 education: string;
 inspiration: string[] | string;
}

export interface InitialStateUserType {
 id_user: string;
 name: string;
 email: string;
 phone: string;
 webSite: string;
 city: DataSelectType | null;
 age: number | null;
 avatar: string;
 //img_upload: string;
 gender: DataSelectType | null;
 type_account: DataSelectType;
 skills: SkillsType;
 private_settings: DataSelectType | null;
}

export interface InitialStateType {
 profileData: InitialStateUserType | null;
 error: string;
 isLoading: boolean;
}

// ===========
export type ChangeProfileFormValues = Omit<
 ISignUpFormValues,
 "emailNew" | "password" | "img_upload" | "type_account"
>;
