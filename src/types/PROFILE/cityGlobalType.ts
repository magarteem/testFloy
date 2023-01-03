export interface CiryResultsType {
  id: number;
  title: string;
  countryTitle: string;
  important: boolean;
}

export interface CityGlobalType {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  results: CiryResultsType[];
}

// EXAMPLE: Город  GET  >>>  api/v1/city?page=0&pageSize=50
// {
//   "currentPage": 0,
//   "pageCount": 500,
//   "pageSize": 50,
//   "rowCount": 25000,
//   "results": [
//     {
//       "id": 1,
//       "title": "Москва",
//       "countryTitle": null,
//       "important": false
//     },
//     {
//       "id": 8,
//       "title": "Череповец",
//       "countryTitle": null,
//       "important": false
//     },

//     {
//       "id": 14,
//       "title": "Астана",
//       "countryTitle": null,
//       "important": false
//     },
//   ]
// }
