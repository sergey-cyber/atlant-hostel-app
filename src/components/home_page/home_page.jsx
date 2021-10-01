import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import style from "./home_page.module.scss";
import atlantImg from "../../public/images/home_page/atlant.png";
import AboutHostel from "./about_hostel/about_hostel";
import Contacts from "./contacts/contacts";
import DataPicker from "./data_picker/data_picker";
import GoogleMap from "./google_map/google_map";
import ReviewsAboutUsContainer from "./reviews_about_us/reviews_about_us_Container";
import ReviewsFormContainer from "./reviews_form/reviews_form_Container";
import Header from "./header/header";
import ContactsViget from "../general/contacts_vidget/contact_viget";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={style.start_page} id="toHeaderScroll">
        {" "}
        {/*  Стартовый экран приложения */}
        <div className={style.start_pageTitle}>
          <h1>Atlant Hostel</h1>
          <a href="tel:+79149065741" target="_blank" rel="noreferrer">
            <span className={style.phone}>
              <FontAwesomeIcon icon={faPhone} size="1x" />
            </span>
            Tel. +7(914) 906 57 41
          </a>
        </div>
        <div className={style.homePageImg}>
          <img alt="atlant" src={atlantImg} className={style.atlant} />
        </div>
        <DataPicker />
      </div>
      <AboutHostel />
      <ReviewsAboutUsContainer />
      <ReviewsFormContainer />
      <GoogleMap />
      <Contacts />
      <ContactsViget />
    </>
  );
};

export default HomePage;
