import {
 GenreType,
 ToolsType,
} from "../../authorization/types/authType";
import { DataSelectType } from "../../user/types/userSliceType";

export interface OptionLongMenuType {
 label: string;
 link: string;
 action: () => void;
}

// Лента новостей (кнопка домик)
export interface AuthorType {
 id_user: string;
 name: string;
 city: DataSelectType;
 avatar: string;
}
export interface TimeLinePostType {
 photo: string[];
 text: string;
 typeCategory: DataSelectType | null;
 genre: GenreType[];
 tools: ToolsType[];
 city: DataSelectType;
}
export interface InitialStateTeamLineType {
 id: number;
 author: AuthorType;
 date: number;
 timeLinePost: TimeLinePostType;
}

export interface InitialStateType {
 timeLineData: InitialStateTeamLineType[];
 error: Error | null;
 isLoading: boolean;
}
