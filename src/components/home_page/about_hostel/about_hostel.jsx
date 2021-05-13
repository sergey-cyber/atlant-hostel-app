import React from 'react';
import style from './about_hostel.module.css';
import img1 from '../../../public/images/home_page/9.jpg';
import img2 from '../../../public/images/home_page/hole.jpg';
import CreateCarousel from '../../general/Create_carousel';

const AboutHostel = (props) => {
    return (
        <section className={style.aboutHostel} id='toAboutUsScroll'>
            <h1>О Хостеле</h1>
            <CreateCarousel styleClassName={style.slideImg} src={[img1, img2]} />
            <div className={style.aboutHostelDescription}>
                <p>
                    Любое описние
                </p>
            </div>
        </section>
    )
}

export default AboutHostel;