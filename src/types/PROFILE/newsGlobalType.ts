import { GenreGlobalType } from "./genreGlobalType";
import { InstrumentGlobalType } from "./InstrumentGlobalType";
import { CiryResultsType } from "./cityGlobalType";

interface FormType {
  formId: string;
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
// {
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "body": "string",
//   "type": "Undefined",
//   "form": {
//     "formId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "name": "string",
//     "avatar": "string"
//   },
//   "city": {
//     "id": 0,
//     "title": "string",
//     "countryTitle": "string",
//     "important": true
//   },
//   "attachments": [
//     {
//       "name": "string",
//       "uri": "string"
//     }
//   ],
//   "genres": [
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "name": "string",
//       "color": "string",
//       "subGenres": [
//         "string"
//       ]
//     }
//   ],
//   "instruments": [
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "name": "string",
//       "icon": "string",
//       "subInstruments": [
//         "string"
//       ]
//     }
//   ]
// }

