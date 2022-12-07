import { GenreType } from "../../authorization/types/authType";

// Лента новостей (кнопка домик)
export interface AuthorType {
 id_user: string;
 name: string;
 sity: string;
 avatar: string;
}
export interface TimeLinePostType {
 photo: string[];
 text: string;
 theme: string;
 genre: GenreType[];
}
export interface InitialStateTeamLineType {
 id: number;
 author: AuthorType;
 date: number;
 timeLinePost: TimeLinePostType;
}

export interface InitialStateType {
 timeLineData: InitialStateTeamLineType[] | null;
 error: Error | null;
 isLoading: boolean;
}
