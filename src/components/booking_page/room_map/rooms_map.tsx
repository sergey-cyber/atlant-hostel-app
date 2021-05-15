import React, { useState } from 'react';
import style from './rooms_map.module.scss';
import roomsMapImg from '../../../public/images/booking_page/rooms_map.jpg';
import { NavLink } from 'react-router-dom';
import { getBeds } from '../../../redux/selectors/hostelDataSelectors';
import { connect } from 'react-redux';
import { checkBookingPeriods } from '../../../helpers/checkDates';
import { getSelectedDates } from '../../../redux/selectors/hostelDataSelectors';
import Preloader from '../../general/preloader/preloader';
import { Tooltip, Button } from 'antd';
import { dateConverter } from '../../../helpers/dateConverters';

const RoomsMap = (props:any) => {

    return (
        <section className={style.roomsMap}>
            <div className={style.roomsMapWrapper}>
                <img alt='Atlanta Hostel' src={roomsMapImg} />
                {props.preloader ? <Preloader message={'Загрузка...'} stylePosition={'preloaderAbsolut'} /> :
                props.beds.map((bed:any) => { /* Отрисовка кроватей */
                    return (
                    <div key={bed.name} className={ bed.name !== 9 ? style.smallBed : undefined } id={ style[`bed${bed.name}`] } >
                        { bed.places.map((place:any) => {     
                            //Если место свободно показываем ссылку, если нет то всплывашку                      
                            if(!checkBookingPeriods(place.bookingPeriod, props.selectedDates)) {
                                return (
                                    <NavLink key={place.id} to={ `/booking/${bed.name}/${place.id}`} className={style.free}>
                                        { place.id }
                                    </NavLink>
                                )
                            } else {
                                const text = <span> Место занято<br></br> {place.bookingPeriod.map((per:Array<string>) => {
                                    return <><span>{`С ${dateConverter(per[0])} по ${dateConverter(per[1])}`} </span><br></br></>
                                })} </span>
                                return (
                                    <Tooltip placement="topRight" title={text} key={place.id} color='black'
                                        overlayClassName={style.occupatedInfo} trigger={['hover', 'click']} > {/* Класс всплывашки */}
                                        { place.id }
                                    </Tooltip>
                                )
                            }                           
                        }) }
                    </div>
                    )
                }) }
            </div>
        </section>
    )
}

let mapStateToProps = (state:any) => {
    return {
        beds: getBeds(state),   //Массив с кроватями
        selectedDates: getSelectedDates(state)
    }
}

export default connect(mapStateToProps, {  })(RoomsMap);
