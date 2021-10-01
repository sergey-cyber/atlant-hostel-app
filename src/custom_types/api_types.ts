/* eslint-disable no-unused-vars */
export interface UserData {
  email: string;
  password: string;
  retryPassword: string;
  age: string;
  phone: string;
}

export enum REGISTER_ERROR_CODES {
  INVALID_VALUES = 1,
  SAME_EMAIL = 2,
  UNKNOWN_ERROR = 3,
}

export enum LOGIN_ERROR_CODES {
  INVALID_VALUES = 1,
  USER_UNDEFINED = 2,
  INCORRECT_DATA = 3,
  UNKNOWN_ERROR = 4,
}

export interface RegisterErrorResponse {
  resultCode: REGISTER_ERROR_CODES;
  errors?: string[]; // Может и нет, нужно проверить
  message:
    | "Регистрация успешно завершена"
    | "Некорректные Email или пароль"
    | "Пользоатель с таким Email уже существует"
    | "Что-то пошло не так, попробуте еще раз";
}

export interface LoginErrorResponse {
  resultCode: LOGIN_ERROR_CODES;
  errors?: string[]; // Может и нет, нужно проверить
  message: "Некорректные Email или пароль" | "Пользователь не найден" | "Неверный Email или пароль";
}
