import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setSelectedDateToState} from '../../../redux/hostel-data-reducer';
import style from './data_picker.module.scss';

const { RangePicker } = DatePicker;

/* function onOk(value) {
  console.log('onOk: ', value); //Callback на кнопку окей
} */

const DataPicker = (props) => {
    //Запрещаем переходить к бронированию если даты не выбраны(datesIsSelected = false)
    const [datesIsSelected, setDatesIsSelected] = useState(false);
    //Отображаем текст о выборе даты при нажати на кнопку "Забронировать" если даты не выбраны
    const [denyBooking, setDenyBooking] = useState(false);

    function getDateRange(value, dateString) {  
        //Если в массиве есть обе даты, то разрешаем перейти к бронированию 
        //и диспатчим массив с датами в стэйт
        if(dateString.every((date) => date !== '')) {
            setDatesIsSelected(true);
            props.setSelectedDateToState(dateString);
            setDenyBooking(false);
        } else {setDatesIsSelected(false);}
    }

    return (
        <div className={ style.datePicker }>
            <div>
                <Space direction="vertical" size={12}>
                    {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
                    <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Дата и время заезда','Дата и время выезда']}
                    onChange={getDateRange} 
                    /* onOk={onOk} */
                    />
                </Space>
                {/* Запрещаем переходить к бронированию если даты не выбраны(datesIsSelected = false) */}
                <NavLink to={ datesIsSelected ? '/booking' : '/home' } className={style.bookingButton} 
                    onClick = { () => !datesIsSelected && setDenyBooking(true) } >
                    Забронировать место
                </NavLink>
            </div>
            { denyBooking && <p className={style.denyBooking}>Введите пожалуйста период бронирования</p> }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { setSelectedDateToState })(DataPicker);