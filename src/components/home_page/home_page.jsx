import React, { useEffect } from 'react';
import style from './home_page.module.scss';
import atlantImg from '../../public/images/home_page/atlant.png';
import wingsImg from '../../public/images/home_page/fly.gif';
import AboutHostel from './about_hostel/about_hostel';
import Contacts from './contacts/contacts';
import DataPicker from './data_picker/data_picker';
import GoogleMap from './google_map/google_map';
import ReviewsAboutUsContainer from './reviews_about_us/reviews_about_us_Container';
import ReviewsFormContainer from './reviews_form/reviews_form_Container';
import Header from './header/header';

const HomePage = () => {

    return (
        <>
        <Header />
        <div className={style.start_page} id='toHeaderScroll' > {/*  Стартовый экран приложения */}
            <div className={style.start_pageTitle}>
                <h1>Atlant Hostel</h1>
                <p>Tel.: 8(999) 999 99 99</p>
            </div>
            
            <div className={style.homePageImg}>
                <img alt='atlant' src={atlantImg} className={style.atlant} />
            </div>
            <DataPicker />
        </div>
        <AboutHostel />
        <ReviewsAboutUsContainer />
        <ReviewsFormContainer />
        <GoogleMap />
        <Contacts />
        </>
    )
}

export default HomePage;