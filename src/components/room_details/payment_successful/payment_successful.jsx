import React from 'react';
import style from './payment_successful.module.css';
import {NavLink, useParams} from 'react-router-dom';

const PaymantSuccessful = (props) => {

    const {placeNumber} = useParams();

    const setPaymentIsSuccessful = () => {
        props.setPaymantSuccessfulFlag(false);
    }

    if(!props.paymentIsSuccessful) return null 

    return (
        <div className={style.paymentSuccessful}>
            <div className={style.successfulModal}>
                <h1>Оплата успешно завершена.</h1>
                <p>Вы выбрали место <b>№{placeNumber}</b> на период с  
                    <b>{props.startDate}</b>  по <b>{props.endDate}</b></p>
                <NavLink to='/' onClick={setPaymentIsSuccessful} >OK</NavLink>
            </div>
        </div>
    )
}

export default PaymantSuccessful;