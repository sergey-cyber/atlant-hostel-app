import React from 'react';
import style from './booking_discription.module.scss';

const BookingDiscription = () => {
    return (
        <div className={style.bookingDiscription} >
            Примечания:
            <div className={style.bookingDiscriptionItem}>
                <span className={style.redRect}></span>
                <span>- Занятое место</span>
            </div>
            <div className={style.bookingDiscriptionItem}>
                <span>Нечетные номера - нижнее место, четное - верхнее</span>
            </div>
        </div>
    )
}

export default BookingDiscription;
