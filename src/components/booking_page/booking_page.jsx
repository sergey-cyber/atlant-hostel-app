import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import style from "./booking_page.module.css";
import RoomsDiscription from "./rooms_discription/rooms_discription";
import RoomsMap from "./room_map/rooms_map";
import { getBedsData } from "../../redux/hostel-data-reducer";

import { getSelectedDates } from "../../redux/selectors/hostelDataSelectors";
import BookingDiscription from "./booking_discription/booking_discription";
import { dateConverter } from "../../helpers/dateConverters";
import ContactsViget from "../general/contacts_vidget/contact_viget";

const BookingPage = (props) => {
  const { getBedsData: get_beds_data, selectedDates } = props;
  // Включаем прелоадер пока идет запрос на сервак за информацией о занятых и свободных местах
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    get_beds_data()
      // Отключаем прелоадер если данные пришли с сервера
      .then(() => setPreloader(false));
  }, []);

  const startDate = dateConverter(selectedDates[0]);
  const endDate = dateConverter(selectedDates[1]);

  if (selectedDates.every((el) => el)) {
    return (
      <div className={style.bookingPage}>
        <h1>Выбор номера</h1>
        <p>
          В период с <b>{startDate}</b> по <b>{endDate}</b> свободны следующие места
        </p>
        <RoomsMap preloader={preloader} />
        <BookingDiscription />
        <RoomsDiscription />
        <ContactsViget />
      </div>
    );
  }
  /* если в стэйте нет выбранных дат бронирования, то редирект на главную */
  return <Redirect to="/home" />;
};

const mapStateToProps = (state) => {
  return {
    selectedDates: getSelectedDates(state),
  };
};

export default connect(mapStateToProps, { getBedsData })(BookingPage);
