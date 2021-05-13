// Импорт картинок для комнат
import room9_1 from '../public/images/room_details/9_1.jpg';
import room9 from '../public/images/room_details/9.jpg';
import room1234 from '../public/images/room_details/1234.jpg';
import room1234_1 from '../public/images/room_details/1234_1.jpg';
import room5678 from '../public/images/room_details/5678.jpg';
import room5678_1 from '../public/images/room_details/5678_1.jpg';
import { hostelDataAPI } from '../api/api';

const SET_SELECTED_DATES = 'atlant-hostel/hostelData/SET_SELECTED_DATES';
const SET_BOOKING_DATES_FOR_BED_IN_STATE = 'atlant-hostel/hostelData/SET_BOOKING_DATES_FOR_BED';
const SET_BEDS_DATA_IN_STATE = 'atlant-hostel/hostelData/SET_BEDS_DATA_IN_STATE';
const SET_PAYMENT_SUCCESSFUL_FLAG = 'atlant-hostel/hostelData/SET_PAYMENT_SUCCESSFUL_FLAG';
const CLEAR_SELECTED_DATES = 'atlant-hostel/hostelData/CLEAR_SELECTED_DATES';

let initialState = {
    beds: [],
    /* beds: [  Примерно в таком виде приходят данные с сервака
        //Имя кровати соответствует местам, которые она в себя включает,  
        //в массиве bookingPeriod должны храниться массивы только с началом и концом бронирования
        //В таком виде данные приходят с БД, это пример, который перезатирается при запросе на сервак
        //Структура именно такая для того чтоб можно было ее мапить в разметку 
        {name: 12, places: [{id: 1, bookingPeriod: [['', ''], ['', '']]}, {id: 2, bookingPeriod: [['', ''], ['', '']]}]},
        {name: 34, places: [{id: 3, bookingPeriod: [['', ''], ['', '']]}, {id: 4, bookingPeriod: [['', ''], ['', '']]}]},
        {name: 56, places: [{id: 5, bookingPeriod: ['2021-4-22 10:30','2021-4-23 10:30']}, {id: 6, bookingPeriod: [['', ''], ['', '']]}]},
        {name: 78, places: [{id: 7, bookingPeriod: [['', ''], ['', '']]}, {id: 8, bookingPeriod: [['', ''], ['', '']]}]},
        {name: 9, places: [{id: 9, bookingPeriod: [['', ''], ['', '']]}]}
    ], */
    roomsImages: [
        //Эти данные статичны и созданы для отображения фотографий отдельных комнат
        {bedsNumbers: 12, images: [room1234, room1234_1]},{bedsNumbers: 34, images: [room1234, room1234_1]},
        {bedsNumbers: 56, images: [room5678, room5678_1]},{bedsNumbers: 78, images: [room5678, room5678_1]},
        {bedsNumbers: 9, images: [room9, room9_1]},
    ],
    selectedDates: ['',''], //Здесь сохраняем выбранные даты для бронирования(либо массив пустых строк, либо массив с двумя датами)
    paymentIsSuccessful: false 
};

const hostelDataReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_DATES:
            return {
                ...state,
                selectedDates: action.selectedDates
            }    
        case SET_BOOKING_DATES_FOR_BED_IN_STATE:
            return {
                ...state,
                beds: action.beds   //С сервера приходит уже обновленный массив
            }
        case SET_BEDS_DATA_IN_STATE: {
            let updetesBeds = action.beds;
            return {
                ...state,
                beds: updetesBeds
            } 
        }
        case SET_PAYMENT_SUCCESSFUL_FLAG: {
            return {
                ...state,
                paymentIsSuccessful: action.isSuccessful
            } 
        }
        case CLEAR_SELECTED_DATES: {
            return {
                ...state,
                selectedDates: ['','']
            } 
        }
                    
        default:
            return state;
    }
}

//Action creators

export const setSelectedDateToState = (selectedDates) => ({ type: SET_SELECTED_DATES, selectedDates });     //Lesson 80
const setBookingDatesForBedInState = (beds) => ({ type: SET_BOOKING_DATES_FOR_BED_IN_STATE, beds }); 
const setBedsDataIsState = (beds) => ({ type: SET_BEDS_DATA_IN_STATE, beds }); 
export const setPaymantSuccessfulFlag = (isSuccessful) => ({ type: SET_PAYMENT_SUCCESSFUL_FLAG, isSuccessful })
export const clearSelectedDates = () => ({ type: CLEAR_SELECTED_DATES })

//Thunks creators

//Запрашиваем данные по занятым и свободным местам
export const getBedsData = () => {
    return async (dispatch) => { 
        const response = await hostelDataAPI.getBedsData();
        if(response.data.resultCode === 0) {
            dispatch(setBedsDataIsState(response.data.beds));
        } else {(console.log(response.data.message))} //Если на серваке будет ошибка то прийдет текс ошибки
        //Нужно ее обработать на клиенте, например вставлять вместо карты помещения 
    }
}

export const setBookingDatesForBed = (placeNumber, selectedDates) => {
    return async (dispatch) => { 
        const response = await hostelDataAPI.setBookingDatesForBed(placeNumber, selectedDates);
        if(response.data.resultCode === 0) {
            dispatch(setBookingDatesForBedInState(response.data.beds));
            //Переключаем флаг paymentIsSuccessful на true для отображения модалки об успешной оплате
            dispatch(setPaymantSuccessfulFlag(true));
        } else {(console.log(response.data.message))} //Если на серваке будет ошибка то прийдет текс ошибки
        //Нужно ее обработать на клиенте, например вставлять вместо карты помещения 
    }
}

export default hostelDataReduser;