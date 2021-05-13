import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import {clearSelectedDates} from '../../redux/hostel-data-reducer';
import { getSelectedDates } from '../../redux/selectors/hostelDataSelectors';

const HomePageContainer = (props) => {

    useEffect(() => {
        //Очищаем выбранные даты в стэйте
        props.clearSelectedDates();
    }, [])

    return (
        <HomePage />
    )
}

const mapStateToProps = (state) => {
    return {
        selectedDates: getSelectedDates(state)
    }
}

export default connect(mapStateToProps, { clearSelectedDates })(HomePageContainer);