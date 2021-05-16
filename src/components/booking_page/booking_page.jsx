import React, { useState } from 'react';
import style from './booking_page.module.css';
import RoomsDiscription from './rooms_discription/rooms_discription';
import RoomsMap from './room_map/rooms_map';
import {getBedsData} from '../../redux/hostel-data-reducer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSelectedDates} from '../../redux/selectors/hostelDataSelectors';
import { Redirect } from 'react-router';
import BookingDiscription from './booking_discription/booking_discription';
import { dateConverter } from '../../helpers/dateConverters';
import { NavLink } from 'react-router-dom';
import ContactsViget from '../general/contacts_vidget/contact_viget';

const BookingPage = (props) => {

    //Включаем прелоадер пока идет запрос на сервак за информацией о занятых и свободных местах
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        props.getBedsData()
            //Отключаем прелоадер если данные пришли с сервера
            .then(() => setPreloader(false)); 
    }, []);

    const startDate = dateConverter(props.selectedDates[0]);
    const endDate = dateConverter(props.selectedDates[1]);

    if(props.selectedDates.every(el => el)) {
        return (
            <div className={style.bookingPage}>
                <h1>Выбор номера</h1>
                <p>В период с <b>{startDate}</b>  по <b>{endDate}</b> свободны следующие места</p>
                <RoomsMap preloader={preloader} />
                <BookingDiscription />
                <RoomsDiscription />
                <ContactsViget />
            </div>
        )
    } else {
        /* если в стэйте нет выбранных дат бронирования, то редирект на главную */
        return (
            <Redirect to='/home' />
        )
    }    
}

let mapStateToProps = (state) => {
    return {
        selectedDates: getSelectedDates(state)
    }
}

export default connect(mapStateToProps, { getBedsData })(BookingPage);
