import {
 GenreType,
 OptionSelectType,
 ToolsType,
} from "../../authorization/types/authType";

export interface AuthorType {
 id_user: string;
 name: string;
 city: OptionSelectType;
 avatar: string;
 type_account: OptionSelectType;
 private_settings: OptionSelectType;
}

interface WorkExperienceType {
 img: string;
 institution: string;
 period: string;
}

//ожидание отклика других пользователей
export interface WaitingForResponseType {
 userId: string;
 status: number; // 0 - pending, 1 - принято, 2 - отклонено
}

export interface TimelineCards {
 id: number;
 typeVacancyOrAds: "vacancy" | "ads";
 author: AuthorType;
 publicationDate: number;
 required: OptionSelectType;
 typeOfInstitution: OptionSelectType[];
 tool: ToolsType[];
 genre: GenreType[];
 city: OptionSelectType;
 gender: OptionSelectType;
 fromAge: number;
 toAge: number;
 work_experience: string | WorkExperienceType[];
 master: OptionSelectType;
 commit: string;
 payment: string;
 workingConditions: OptionSelectType;
 commitAbout: string;
 phone: string;
 email: string;
 web_site: string;
 waitingForResponse: WaitingForResponseType;
}

export interface InitialStateAdsType {
 adsList: TimelineCards[];
 isLoading: boolean;
 error: Error | null;
}
