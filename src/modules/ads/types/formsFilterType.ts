import {
 GenreType,
 OptionSelectType,
 ToolsType,
} from "../../authorization/types/authType";

export interface FormsFilterType {
 city: OptionSelectType | null;
 tool: ToolsType[];
 genre: GenreType[] | null;
 gender: OptionSelectType | null;
 typeOfInstitution: [];
 who_is_looking_vacancy: OptionSelectType | null; //кого ищет
 who_is_looking_vacancy_partner: OptionSelectType | null;
 who_is_looking_ads: OptionSelectType | null; //что\кого ищут в обявлениях
 who_is_looking_questionnaire: OptionSelectType | null; //кто ищет
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
