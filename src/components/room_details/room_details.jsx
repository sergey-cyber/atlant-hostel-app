import { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import CreateCarousel from "../general/Create_carousel";
import style from "./room_details.module.css";
import { setBookingDatesForBed, setPaymantSuccessfulFlag } from "../../redux/hostel-data-reducer";
import { getSelectedDates } from "../../redux/selectors/hostelDataSelectors";
import PaymantSuccessful from "./payment_successful/payment_successful";
import { dateConverter } from "../../helpers/dateConverters";
import Preloader from "../general/preloader/preloader";
import { calcPrice } from "../../helpers/calcPrice";
import ContactsViget from "../general/contacts_vidget/contact_viget";

const RoomDetails = (props) => {
  const { img, selectedDates, paymentIsSuccessful, setPaymantSuccessfulFlag } = props;
  const { bedNumber } =
    useParams(); /* Считываем номер кровати с урла для выбора картинок для комнаты */
  const { placeNumber } = useParams(); // Считываем номер выбранного места
  const selectedBed = img.find(
    (bed) => String(bed.bedsNumbers) === bedNumber
  ); /* Ищем кровати(12, 34, 56, 78 или 9) по совпадению с урлом */
  /* Картинки отсортированы по комнатам и захардокжены в стэйте */

  const [preloader, setPreloader] = useState(false);

  const setBookingDateByPlace = () => {
    setPreloader(true);
    props
      .setBookingDatesForBed(placeNumber, props.selectedDates)
      // Выкл прелоадер на кнопе после того, как пришел ответ с сервака
      .then(() => setPreloader(false));
  };

  const startDate = dateConverter(selectedDates[0]);
  const endDate = dateConverter(selectedDates[1]);

  const price = calcPrice(selectedDates, bedNumber);

  // Если даты бронирования не выбраны, то редирект на главную
  if (!selectedDates.every((el) => el)) return <Redirect to="/home" />;

  return (
    <>
      <section className={style.roomDetails}>
        <h1>Подробнее о номере</h1>
        {/* Передаем массив с картинками в src для карусели */}
        <CreateCarousel styleClassName={style.cauruselItem} src={selectedBed.images} />
        <p>
          Вы выбрали место №{placeNumber} на период с <b>{startDate}</b> по <b>{endDate}</b>
        </p>
        <p className={style.priceInfo}>
          К оплате <b>{price}</b> рублей
        </p>
        <div className={style.proceedToCheckout}>
          <button type="button" onClick={setBookingDateByPlace} disabled={preloader}>
            {preloader ? (
              <Preloader message="Загрузка" stylePosition="preloaderFlex" />
            ) : (
              "Перейти к оплате"
            )}
          </button>
        </div>
        <ContactsViget />
      </section>
      <PaymantSuccessful
        paymentIsSuccessful={paymentIsSuccessful}
        setPaymantSuccessfulFlag={setPaymantSuccessfulFlag}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    img: state.hostelData
      .roomsImages /* захардкодженные картинки для свайпера на странице детали бронироания */,
    selectedDates: getSelectedDates(state),
    paymentIsSuccessful: state.hostelData.paymentIsSuccessful,
  };
};

export default connect(mapStateToProps, { setBookingDatesForBed, setPaymantSuccessfulFlag })(
  RoomDetails
);
