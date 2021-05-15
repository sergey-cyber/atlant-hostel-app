import React from 'react';
import style from './about_hostel.module.scss';
import img1 from '../../../public/images/home_page/9.jpg';
import img2 from '../../../public/images/home_page/hole.jpg';
import CreateCarousel from '../../general/Create_carousel';
import {Link} from 'react-scroll';

const AboutHostel = (props) => {
    return (
        <section className={style.aboutHostel} id='toAboutUsScroll'>
            <h1>О Хостеле</h1>
            <CreateCarousel styleClassName={style.slideImg} src={[img1, img2]} />
            <div className={style.aboutHostelDescription}>
                <p>Мы рады помочь Вам, мы единственный Хостел в области, который предоставляет бесплатные услуги трансфера до хостела и обратно.
                С нами Вам не нужно думать о такси или другом средстве передвижения. </p>
                <Link to="toHeaderScroll" spy={true} smooth={true} duration={500}
                        className={style.eartContentBtn} >
                    Забронировать
                </Link>
                <p>Есть вопросы? Звоните:<br></br><b>8(999) 999 99 99</b></p>
            </div>
        </section>
    )
}

export default AboutHostel;