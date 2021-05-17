import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setSelectedDateToState} from '../../../redux/hostel-data-reducer';
import style from './data_picker.module.scss';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

const DataPicker = (props) => {
  //Запрещаем переходить к бронированию если даты не выбраны(datesIsSelected = false)
  const [datesIsSelected, setDatesIsSelected] = useState(false);
  //Для валидации инпутов
  const [startIsValue, setStartValueValidate] = useState(false);
  const [endisValue, setEndValueValidate] = useState(false);
  //Стэйты для стартовой и конечной дат
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  const setValidateInpust = () => {
    if(!startValue) setStartValueValidate(true)
    if(!endisValue) setEndValueValidate(true)
  }

  function getDateRange() {  
      const dateRange = [startValue, endValue]
      //Если в массиве есть обе даты, то разрешаем перейти к бронированию 
      //и диспатчим массив с датами в стэйт
      if(dateRange.every((date) => date !== '')) {
          setDatesIsSelected(true);
          props.setSelectedDateToState(dateRange);
      } else {setDatesIsSelected(false)}
  }

  return (
    <div className={ style.datePicker }>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {/* For Start value */}
          <DateTimePicker
            ampm={false} label="Дата заезда" value={startValue} minDateTime={new Date()}
            inputFormat="dd/MM/yyyy HH:mm"
            renderInput={(props) => <TextField {...props} error={startIsValue} size='small' />}
            onChange={(newValue) => {
              setStartValue(newValue);
              getDateRange();
              setStartValueValidate(false)
            }} />
          {/* For End value */}
          <DateTimePicker 
            ampm={false} label={"Дата выезда"} value={endValue} 
            minDateTime={startValue ? new Date(startValue) : new Date()}
            inputFormat="dd/MM/yyyy HH:mm" disabled={!startValue}
            renderInput={(props) => {
              return <TextField {...props} error={endisValue} size='small' />
            }}
            onChange={(newValue) => {
              setEndValue(newValue);
              getDateRange();
              setEndValueValidate(false)
            }} />
        </LocalizationProvider>
      </div>
        {/* Запрещаем переходить к бронированию если даты не выбраны(datesIsSelected = false) */}
        <NavLink to={ datesIsSelected ? '/booking' : '/home' } className={style.bookingButton} 
            onClick={ setValidateInpust } >
            Забронировать место
        </NavLink>  
    </div>
  )
}

let mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { setSelectedDateToState })(DataPicker);



