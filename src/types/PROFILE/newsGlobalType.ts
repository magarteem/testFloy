import { GenreGlobalType } from "./genreGlobalType";
import { InstrumentGlobalType } from "./InstrumentGlobalType";
import { CiryResultsType } from "./cityGlobalType";

interface FormType {
  formId: "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  name: string;
  avatar: string;
}
interface AttachmentsType {
  name: string;
  uri: string;
}

export interface NewsGlobalType {
  id: string;
  body: string;
  type: string;
  form: FormType;
  city: CiryResultsType;
  attachments: AttachmentsType[];
  genres: GenreGlobalType;
  instruments: InstrumentGlobalType;
}

// EXAMPLE:  GET  >>>  api/v1/city?page=0&pageSize=50
