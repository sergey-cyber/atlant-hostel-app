import React from 'react';
import style from './earth.module.scss';
import {Link} from 'react-scroll';

const Earth = () => {

    return (
        <section className={style.earth}>
            <h1>Любите путешевствовать?</h1>
            <div className={style.earthWrapper}>
                <div className={style.eartContent}>
                    <p>Мы рады помочь Вам, мы единственный Хостел в области, который предоставляет бесплатные услуги трансфера до хостела и обратно.
                    С нами Вам не нужно думать о такси или другом средстве передвижения. </p>
                    <Link to="toHeaderScroll" spy={true} smooth={true} duration={500}
                         className={style.eartContentBtn} >
                        Забронировать
                    </Link>
                </div>
                <div className={style.sketchfabEmbedWrapper}>
                    <iframe title="Cartoon Lowpoly Earth Planet 2 UVW textured" frameborder="0" 
                        allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" 
                        allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
                        src="https://sketchfab.com/models/73dd3283bf6d45a3a62d4806f3044633/embed?autostart=1"> 
                    </iframe> 
                </div>
            </div>
        </section>
    )
}

export default Earth;