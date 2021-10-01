import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"; /* 
import { reducer as formReducer } from 'redux-form' */
import { reducer as formReducer } from "redux-form";
import hostelDataReduser from "./hostel-data-reducer";
import reviewsDataReduser from "./reviews-data-reducer";
import localizationReduser from "./localizations-reduser";
import authReduser from "./auth-reduser";

const redusers = combineReducers({
  hostelData: hostelDataReduser,
  reviewsData: reviewsDataReduser,
  localizationData: localizationReduser,
  authData: authReduser,
  form: formReducer, // redux-form Lesson 75
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
