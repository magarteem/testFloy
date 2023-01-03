export interface GenreType {
  id: string;
  name: string;
  color: string;
  subGenres: string[];
}
export type GenreGlobalType = GenreType[];

// EXAMPLE: Жанры  GET  >>>  /api/v1/genre
// [
//   {
//     "id": "003b6d2c-106e-45ad-b2f2-c65cb7224ff6",
//     "name": "Рокабилли",
//     "color": "#FF6A6A",
//     "subGenres": []
//   },
//   {
//     "id": "15b56d6b-5ad1-42c7-bdff-e15be9be2f37",
//     "name": "Пост",
//     "color": "#E7685F",
//     "subGenres": []
//   },
//   {
//     "id": "18be9a87-a77b-43fd-8b92-3481e0545206",
//     "name": "Рэпкор",
//     "color": "#E7685F",
//     "subGenres": []
//   },
//   {
//     "id": "1be29ac0-94af-4283-97e2-6c949520a539",
//     "name": "НЮ",
//     "color": "#E7685F",
//     "subGenres": []
//   },
//   {
//     "id": "1f32b316-dfc7-42b7-a9db-5ec90ffd2c42",
//     "name": "Хардкор",
//     "color": "#E7685F",
//     "subGenres": []
//   },
// ]
