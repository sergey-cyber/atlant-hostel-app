import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"; /* 
import { reducer as formReducer } from 'redux-form' */
import hostelDataReduser from "./hostel-data-reducer";
import reviewsDataReduser from "./reviews-data-reducer";
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
    hostelData: hostelDataReduser,
    reviewsData: reviewsDataReduser,
    form: formReducer    //redux-form Lesson 75
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
