import {
 GenreType,
 OptionSelectType,
 ToolsType,
} from "../../authorization/types/authType";

export interface FormsFilterType {
 city: OptionSelectType;
 tool: ToolsType[];
 genre: GenreType[];
 typeOfInstitution: [];
 who_is_looking_vacancy: OptionSelectType; //кого ищет
 who_is_looking_vacancy_partner: OptionSelectType;
 who_is_looking_ads: OptionSelectType; //что\кого ищут в обявлениях
 who_is_looking_qestionnarie: OptionSelectType; //кто ищет
 type_account: OptionSelectType | null;
 fromAge: null;
 toAge: null;

 // name_field: string;
 // img_upload: string;
 // phone: string;
 // webSite: string;
 // gender: OptionSelectType | null;
 // age: number | null;
 // work_experience: string;
 // master: OptionSelectType | null;
 // education: string;
 // private_settings: OptionSelectType | null;
 // inspiration: string | string[];
}
