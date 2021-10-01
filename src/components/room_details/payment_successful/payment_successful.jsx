import { NavLink, useParams } from "react-router-dom";
import style from "./payment_successful.module.css";

const PaymantSuccessful = (props) => {
  const { paymentIsSuccessful, endDate, startDate } = props;
  const { placeNumber } = useParams();

  const setPaymentIsSuccessful = () => {
    props.setPaymantSuccessfulFlag(false);
  };

  if (!paymentIsSuccessful) return null;

  return (
    <div className={style.paymentSuccessful}>
      <div className={style.successfulModal}>
        <h1>Оплата успешно завершена.</h1>
        <p>
          Вы выбрали место <b>№{placeNumber}</b> на период с<b>{startDate}</b> по <b>{endDate}</b>
        </p>
        <NavLink to="/" onClick={setPaymentIsSuccessful}>
          OK
        </NavLink>
      </div>
    </div>
  );
};

export default PaymantSuccessful;
