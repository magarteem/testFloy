export interface EducationType {
 img: string;
 institution: string;
 period: string;
}

export interface SkillsType {
 tool: string[];
 genre: string[];
 workExperience: string | EducationType[];
 master: string;
 education: string | EducationType[];
 inspiration: string[];
}

export interface InitialStateUserType {
 id_user: string;
 name: string;
 email: string;
 sity: string;
 age: string;
 img_upload: string;
 gender: string;
 type_account: string;
 skills: SkillsType;
 private_settings: string;
}

export type TempDataOtherUserProfileType =
 InitialStateUserType[];
