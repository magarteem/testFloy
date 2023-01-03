import { AccountMainGlobalType } from "./accountMainGlobalType";

export type MusicalWorkshopGlobalType = AccountMainGlobalType;

// EXAMPLE: Музыкальная мастерская,  GET  >>>  /api/v1/form/musicalworkshop/my/{id}
// {
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "isVerified": true,
//   "privateType": "ShowAll",
//   "avatarLink": "string",
//   "portfolios": [
//     {
//       "name": "string",
//       "uri": "string"
//     }
//   ],
//   "document": {
//     "name": "string",
//     "city": {
//       "id": 0,
//       "title": "string",
//       "countryTitle": "string",
//       "important": true
//     },
//     "description": "string",
//     "contacts": [
//       {
//         "contactType": "string",
//         "value": "string"
//       }
//     ],
//     "schedule": {
//       "additionalProp1": [
//         {
//           "start": "13:45:42.0000000",
//           "end": "13:45:42.0000000"
//         }
//       ],
//       "additionalProp2": [
//         {
//           "start": "13:45:42.0000000",
//           "end": "13:45:42.0000000"
//         }
//       ],
//       "additionalProp3": [
//         {
//           "start": "13:45:42.0000000",
//           "end": "13:45:42.0000000"
//         }
//       ]
//     },
//     "geolocations": [
//       {
//         "longitude": 0,
//         "lattitude": 0
//       }
//     ]
//   }
// }
