import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import BookingPage from './components/booking_page/booking_page';
import HomePageContainer from './components/home_page/home_page_Container';
import RoomDetails from './components/room_details/room_details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=> <Redirect to='/home' />} ></Route>
        <Route path='/home' >
          <HomePageContainer />   {/* Главная страница приложения */} 
        </Route>
        <Route path='/booking/:bedNumber/:placeNumber'>  
        {/* При нажатии на кровать, в адресную строку выводится её номер/номер выбранного места */}
        {/*если они есть, то рендерим RoomDetails */}
          <RoomDetails />
        </Route>
        <Route exact path='/booking'>
          <BookingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
