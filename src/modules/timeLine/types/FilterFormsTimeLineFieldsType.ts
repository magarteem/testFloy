import {
 GenreType,
 OptionSelectType,
 ToolsType,
} from "../../authorization/types/authType";

export interface FilterFormsTimeLineFieldsType {
 search_text: string;
 type_category: OptionSelectType | null;
 city: OptionSelectType | null;
 tools: ToolsType[];
 genre: GenreType[];
}
