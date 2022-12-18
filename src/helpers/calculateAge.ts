export const calculateAge = (value: number) =>
  `${new Date().getFullYear() - new Date(value).getFullYear()}`;
