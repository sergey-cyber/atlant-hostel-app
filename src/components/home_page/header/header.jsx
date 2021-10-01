import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LoginOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import TotalMenu from "../../total_menu/total_menu";
import style from "./header.module.scss";
import { ThemeSwitcher } from "./theme_switcher/theme_switcher";

const Header = () => {
  const [menuCounter, setMenuCounter] = useState(1); // Активирует и деактивирует меню

  return (
    <header className={style.header}>
      <TotalMenu menuCounter={menuCounter} setMenuCounter={setMenuCounter} />{" "}
      {/* Основное меню, открывается при нажатии на бургер */}
      <div onClick={() => setMenuCounter(menuCounter + 1)} className={style.burgerMenu}>
        <MenuUnfoldOutlined className={style.burgerMenuIcon} />
      </div>
      <div className={style.headerLabel}>Atlant Hostel</div>
      <nav className={style.headerNav}>
        <Link className={style.headerNavItem} to="toAboutUsScroll" spy smooth duration={500}>
          О хостеле
        </Link>
        <Link className={style.headerNavItem} to="toReviewsScroll" spy smooth duration={500}>
          Отзывы
        </Link>
        <Link className={style.headerNavItem} to="toGoogleMapScroll" spy smooth duration={500}>
          Как добраться до нас
        </Link>
        <Link className={style.headerNavItem} to="toContactsScroll" spy smooth duration={500}>
          Наши контакты
        </Link>
      </nav>
      <div className={style.loginBlock}>
        <ThemeSwitcher />
        <NavLink to="/login">Вход/Регистрация</NavLink>
        <LoginOutlined className={style.loginIcon} />
      </div>
    </header>
  );
};

export default Header;
