import { NavLink } from "react-router-dom";
import style from "./rooms_discription.module.scss";

const RoomsDiscription = () => {
  return (
    <section className={style.roomsDiscription}>
      <h1>Основные услуги и удобства</h1>
      <ul className={style.basicServices}>
        {" "}
        {/* Список основных услуг */}
        <li>Расчетный час с 12-00</li>
        <li>Стоимость мест №1-8 500 р</li>
        <li>Стоимость места №9 1000 р</li>
        <li>Закрытая парковка</li>
        <li>Wi-Fi</li>
      </ul>
      <h1>Дополнительные услуги</h1>
      <ul className={style.additionalServices}>
        {" "}
        {/* Список дополнительных услуг */}
        <li>Трансфер от/до вокзала бесплатно</li>
        <li>Трансфер с/до других мест за дополнительную плату</li>
        <li>Завтрак</li>
        <li>Баня/Сауна</li>
      </ul>
      <div className={style.returnHomeBtnWrapper}>
        <NavLink to="/home" className={style.returnHomeBtn}>
          Вернуться на главную
        </NavLink>
      </div>
    </section>
  );
};

export default RoomsDiscription;
