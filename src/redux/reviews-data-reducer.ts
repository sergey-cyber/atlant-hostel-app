import { homePageDataAPI } from "../api/api";

const SET_REVIEWS_FORM = "atlant-hostel/reviewsData/SET_REVIEWS_FORM";
const GET_ALL_REVIEWS_IN_STATE = "atlant-hostel/reviewsData/GET_ALL_REVIEWS_IN_STATE";

type review = {
  _id: string,
  rate: number | undefined,
  name: string | undefined,
  content: string | undefined,
  publicationDate: string,
};

type initialStateType = {
  reviews: Array<review>,
  averageRating: number | null,
  totalReviewsCount: number | null,
  revPartSize: number,
  showReviewsForm: boolean,
};

const initialState: initialStateType = {
  reviews: [],
  averageRating: null, // Средняя оценка, расчитывается на сервере
  totalReviewsCount: null,
  revPartSize: 5, // Количество приходящих отзывов с сервера в одной части
  showReviewsForm: false,
};

const reviewsDataReduser = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_REVIEWS_FORM: {
      return {
        ...state,
        showReviewsForm: action.formIsShow,
      };
    }
    case GET_ALL_REVIEWS_IN_STATE: {
      return {
        ...state,
        reviews: action.currentReviewsPart,
        averageRating: action.averageRating,
        totalReviewsCount: action.totalReviewsCount,
      };
    }
    default:
      return state;
  }
};

// Action creators

// Показать/скрыть модальное окно отзывов
type setReviewsFormAction = {
  type: typeof SET_REVIEWS_FORM,
  formIsShow: boolean,
};
export const setReviewsForm = (formIsShow: boolean): setReviewsFormAction => {
  return { type: SET_REVIEWS_FORM, formIsShow };
};

// Get all reviews and average raiting
type getReviewsPartAction = {
  type: typeof GET_ALL_REVIEWS_IN_STATE,
  currentReviewsPart: Array<review>,
  totalReviewsCount: number,
  averageRating: number,
};
const getAllReviewsInState = (
  currentReviewsPart: any,
  totalReviewsCount: number,
  averageRating: number
): getReviewsPartAction => ({
  type: GET_ALL_REVIEWS_IN_STATE,
  currentReviewsPart,
  totalReviewsCount,
  averageRating,
});

// Thunks creators

// Get current reviews part
export const getReviewsPart = (currentRevPart: number, revPartSize: number) => {
  return async (dispatch: any) => {
    const response = await homePageDataAPI.getReviewsPart(currentRevPart, revPartSize);
    if (response.resultCode === 0) {
      dispatch(
        getAllReviewsInState(
          response.currentReviewsPart,
          response.totalReviewsCount,
          response.averageRating
        )
      );
    } else {
      console.log(response.message);
    } // Если на серваке будет ошибка то прийдет текс ошибки
    // Нужно ее обработать на клиенте, например вставлять вместо карты помещения
  };
};

// Post new review
type reviewFormDataType = {
  rate: number | undefined,
  name: string | undefined,
  content: string | undefined,
  publicationDate: string,
};
export const postNewReview = (reviewFormData: reviewFormDataType) => {
  return async (dispatch: any) => {
    const response = await homePageDataAPI.postNewReview(reviewFormData);
    if (response.resultCode === 0) {
      dispatch(getReviewsPart(1, initialState.revPartSize));
    } else {
      console.log(response.message);
    } // Если на серваке будет ошибка то прийдет текс ошибки
    // Нужно ее обработать на клиенте, например вставлять вместо карты помещения
  };
};

export default reviewsDataReduser;
