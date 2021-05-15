import React from 'react';
import style from './about_hostel.module.scss';
import img1 from '../../../public/images/home_page/9.jpg';
import img2 from '../../../public/images/home_page/hole.jpg';
import CreateCarousel from '../../general/Create_carousel';
import {Link} from 'react-scroll';
import { ContactsIcons } from '../contacts/contacts';

const AboutHostel = (props) => {
    return (
        <section className={style.aboutHostel} id='toAboutUsScroll'>
            <h1>О Хостеле</h1>
            <CreateCarousel styleClassName={style.slideImg} src={[img1, img2]} />
            <div className={style.aboutHostelDescription}>
                <h1>Любите путешествовать?</h1>
                <p>Мы рады помочь Вам, мы единственный Хостел в области, который предоставляет бесплатные услуги трансфера до хостела и обратно.
                С нами Вам не нужно думать о такси или другом средстве передвижения. </p>
                <Link to="toHeaderScroll" spy={true} smooth={true} duration={500}
                        className={style.eartContentBtn} >
                    Забронировать
                </Link>
                <p>Есть вопросы? Звоните или пишите нам в соц. сети:<br></br>
                    <ContactsIcons phone='phone' whatsapp='whatsapp' telegram='telegram'
                        instagram='instagram' vk='vk' />
                </p>
            </div>
        </section>
    )
}

export default AboutHostel;