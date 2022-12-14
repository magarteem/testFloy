import {
 GenreType,
 OptionSelectType,
 ToolsType,
} from "../../authorization/types/authType";

interface WorkExperience {
 img: string;
 institution: string;
 period: string;
}

export interface TimelineCards {
 id: number;
 publicationDate: number;
 required: OptionSelectType;
 typeOfInstitution: OptionSelectType[];
 tool: ToolsType[];
 genre: GenreType[];
 city: OptionSelectType;
 gender: OptionSelectType;
 fromAge: number;
 toAge: number;
 work_experience: string | WorkExperience[];
 master: OptionSelectType;
 commit: string;
 payment: string;
 workingConditions: OptionSelectType;
 commitAbout: string;
 phone: string;
 email: string;
 web_site: string;
}

export interface InitialStateAdsType {
 adsList: TimelineCards[];
 isLoading: boolean;
 error: Error | null;
}
