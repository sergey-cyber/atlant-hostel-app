import { Redirect, Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import styles from "./App.module.scss";
import BookingPage from "./components/booking_page/booking_page";
import HomePageContainer from "./components/home_page/home_page_Container";
import RoomDetails from "./components/room_details/room_details";
import "antd/dist/antd.css"; // Ant Design styles
import LoginPage from "./components/loginPage/loginPage";

function App() {
  const globalThemeName = useSelector((state) => state.localizationData.globalTheme);

  return (
    <div className={`theme-${globalThemeName}`}>
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home">
            <HomePageContainer /> {/* Главная страница приложения */}
          </Route>
          <Route path="/booking/:bedNumber/:placeNumber">
            {/* При нажатии на кровать, в адресную строку выводится её номер/номер выбранного места */}
            {/* если они есть, то рендерим RoomDetails */}
            <RoomDetails />
          </Route>
          <Route exact path="/booking">
            <BookingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
