export interface InstrumentType {
  id: string;
  name: string;
  icon: string;
  subInstruments: string[];
}

export type InstrumentGlobalType = InstrumentType[];

// EXAMPLE: Инструменты  GET  >>>  /api/v1/instrument
// [
//   {
//     "id": "0055c3ad-ffec-4f55-9ce4-912fea66aaff",
//     "name": "Литавры",
//     "icon": "timpani",
//     "subInstruments": []
//   },
//   {
//     "id": "07a72c56-680e-4750-9792-6700cc1e676a",
//     "name": "Фагот",
//     "icon": "bassoon",
//     "subInstruments": []
//   },
//   {
//     "id": "0b3dfb48-108b-47e9-91f0-0d009ee23cfb",
//     "name": "Контрабас",
//     "icon": "double_bass",
//     "subInstruments": []
//   },
// ]
