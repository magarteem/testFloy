export interface ISignInFormValues {
 email: string;
 emailNew: string;
 password: string;
}

//  data Base
export interface OptionSelectType {
 value: string;
 label: string;
}

export interface ToolsType extends OptionSelectType {
 imgIcons: string;
}
export interface GenreType extends OptionSelectType {
 hexColor: string;
}

export interface ISignUpFormValues
 extends ISignInFormValues {
 type_account: OptionSelectType | null;
 name_field: string;
 img_upload: string;
 city: OptionSelectType;
 phone: string;
 web_site: string;
 gender: OptionSelectType | null;
 age: number | null;
 tool: ToolsType[];
 genre: GenreType[];
 work_experience: string;
 master: OptionSelectType | null;
 education: string;
 private_settings: OptionSelectType | null;
 inspiration: string | string[];

 type_collective?: {};
 typeOfInstitution?: [];
 portfolio_photo?: [];
 about_me: string;
 email_contact: string;

 opening_hours_from: number | null;
 opening_hours_to: number | null;
 room_area: string;
 establishment_description: string;
}
