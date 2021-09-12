import React from 'react';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import TotalMenu from '../../total_menu/total_menu';
import style from './header.module.scss';
import burgerMenuImg from './images/burger_menu.png';
import loginImg from './images/login_icon.png';
import {Link} from 'react-scroll';
import { ThemeSwitcher } from './theme_switcher/theme_switcher';

const Header = () => {

    const [menuCounter, setMenuCounter] = useState(1);  //Активирует и деактивирует меню

    return (
    <header className={style.header} >
        <TotalMenu menuCounter={menuCounter} setMenuCounter={setMenuCounter} />  {/*Основное меню, открывается при нажатии на бургер*/}
        <div onClick={()=> setMenuCounter(menuCounter+1)} className={style.burgerMenu}>
            <img src={burgerMenuImg} alt='' />
        </div> 
        <div className={style.headerLabel}>
            Atlant Hostel
        </div>
        <nav className={style.headerNav}>
            <Link className={style.headerNavItem} to="toAboutUsScroll" 
                spy={true} smooth={true} duration={500} >О хостеле</Link>
            <Link className={style.headerNavItem} to="toReviewsScroll" 
                spy={true} smooth={true} duration={500} >Отзывы</Link>
            <Link className={style.headerNavItem} to="toGoogleMapScroll" 
                spy={true} smooth={true} duration={500} >Как добраться до нас</Link>    
            <Link className={style.headerNavItem} to="toContactsScroll" 
                spy={true} smooth={true} duration={500} >Наши контакты</Link>            
        </nav>
        <div className={style.loginBlock}>
            <ThemeSwitcher />
            <NavLink to='/login'>Вход/Регистрация</NavLink>
            <img alt='' src={loginImg} />
        </div>
    </header>
    )
}

export default Header;