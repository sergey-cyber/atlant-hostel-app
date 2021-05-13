import React from 'react';
import closeMenuImg from './images/close_menu.png';
import style from './total_menu.module.css';
import {Link} from 'react-scroll';

const TotalMenu = (props) => {

    const closeMenu = () => {
        props.setMenuCounter(props.menuCounter+1)
    }

    return (
        <div className={props.menuCounter%2===0 ? style.totalmenu+' '+style.active :  style.totalmenu}>
            <img className={style.closeMenuImg} src={closeMenuImg} alt=''
                onClick={closeMenu} />
            <Link className={style.menuItem} to="toAboutUsScroll" 
                spy={true} smooth={true} duration={500} onClick={closeMenu} >О хостеле</Link>  
            <Link className={style.menuItem} to="toReviewsScroll" 
                spy={true} smooth={true} duration={500} onClick={closeMenu} >Отзывы</Link>
            <Link className={style.menuItem} to="toGoogleMapScroll" 
                spy={true} smooth={true} duration={500} onClick={closeMenu} >Как добраться до нас</Link>
            <Link className={style.menuItem} to="toContactsScroll" 
                spy={true} smooth={true} duration={500} onClick={closeMenu} >Наши контакты</Link>
        </div>
    )
}

export default TotalMenu;