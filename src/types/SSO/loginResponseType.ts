// ======== Запрос к серверу ======== //
// POST: /api/v1/auth/login
export interface LoginReqestType {
  email: string;
  password: string;
}

// {"email": "string3","password": "string3"}

// ======== Ответ от сервера ======== //
export interface LoginResponseType {
  accountId: string
  email: string
  token: {
    value: string
    expiresAt: number
  };
  hasPassword: boolean;
  oAuthTypes: string[];
}

// {
//   "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "email": "string",
//   "token": {
//     "value": "string",
//     "expiresAt": 0
//   },
//   "hasPassword": true,
//   "oAuthTypes": [
//     "None"
//   ]
// }
