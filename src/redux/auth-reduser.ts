import { authAPI } from "../api/api";
import { LoginErrorResponse } from "../custom_types/api_types";

enum ActionTypes {
  SET_AUTH = "SET_AUTH",
}

type Action = {
  type: ActionTypes.SET_AUTH,
  isAuth: boolean,
};

type State = {
  isAuth: boolean,
};

const initialState = {
  isAuth: false,
};

const authReduser = (state = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export const setAuth = (isAuth: boolean): Action => {
  return { type: ActionTypes.SET_AUTH, isAuth };
};

/* export const registration = (email: string, password: string, userData: UserData) => {
  return async (dispatch: any) => {
    
  };
}; */

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await authAPI.login(email, password);
      if (response.resultCode === 0) {
        dispatch(setAuth(true));
      }
      // В случае успеха с сервера отправиь токен в куках
    } catch (error: any) {
      const errorResponse: LoginErrorResponse | undefined = error.response?.data;
      const errorMessage: string = errorResponse
        ? errorResponse.message
        : "Что-то пошло не так, попробуйте еще раз.";
      console.log(errorMessage);
    }
  };
};

export default authReduser;
