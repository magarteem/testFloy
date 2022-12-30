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
 who_is_looking_vacancy: OptionSelectType | null;
 who_is_looking_vacancy_partner: OptionSelectType | null;
 who_is_looking_ads: OptionSelectType | null;
 who_is_looking_questionnaire: OptionSelectType | null;
 fromAge: null;
 toAge: null;
 master: null;
}
