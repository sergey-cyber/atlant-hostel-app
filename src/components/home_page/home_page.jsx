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
import Earth from './earth/earth';

const HomePage = () => {

    return (
        <>
        <Header />
        <div className={style.start_page} id='toHeaderScroll' > {/*  Стартовый экран приложения */}
            <h1>Atlant Hostel</h1>
            <div className={style.homePageImg}>
                <img alt='atlant' src={atlantImg} className={style.atlant} />
            </div>
            <DataPicker />
        </div>
        <AboutHostel />
        <Earth />
        <ReviewsAboutUsContainer />
        <ReviewsFormContainer />
        <GoogleMap />
        <Contacts />
        </>
    )
}

export default HomePage;