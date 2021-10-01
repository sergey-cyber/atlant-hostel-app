import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import style from "./rooms_map.module.scss";
import roomsMapImg from "../../../public/images/booking_page/rooms_map.jpg";
import { getBeds, getSelectedDates } from "../../../redux/selectors/hostelDataSelectors";
import { checkBookingPeriods } from "../../../helpers/checkDates";

import Preloader from "../../general/preloader/preloader";
import { dateConverter } from "../../../helpers/dateConverters";

const RoomsMap = (props: any) => {
  const { preloader, beds } = props;

  return (
    <section className={style.roomsMap}>
      <div className={style.roomsMapWrapper}>
        <img alt="Atlanta Hostel" src={roomsMapImg} />
        {preloader ? (
          <Preloader message="Загрузка..." stylePosition="preloaderAbsolut" />
        ) : (
          beds.map((bed: any) => {
            /* Отрисовка кроватей */
            return (
              <div
                key={bed.name}
                className={bed.name !== 9 ? style.smallBed : undefined}
                id={style[`bed${bed.name}`]}
              >
                {bed.places.map((place: any) => {
                  // Если место свободно показываем ссылку, если нет то всплывашку
                  if (!checkBookingPeriods(place.bookingPeriod, props.selectedDates)) {
                    return (
                      <NavLink
                        key={place.id}
                        to={`/booking/${bed.name}/${place.id}`}
                        className={style.free}
                      >
                        {place.id}
                      </NavLink>
                    );
                  }
                  const text = (
                    <span>
                      {" "}
                      Место занято
                      <br />{" "}
                      {place.bookingPeriod.map((per: Array<string>) => {
                        return (
                          <>
                            <span>{`С ${dateConverter(per[0])} по ${dateConverter(per[1])}`} </span>
                            <br />
                          </>
                        );
                      })}{" "}
                    </span>
                  );
                  return (
                    <Tooltip
                      placement="topRight"
                      title={text}
                      key={place.id}
                      color="black"
                      overlayClassName={style.occupatedInfo}
                      trigger={["hover", "click"]}
                    >
                      {" "}
                      {/* Класс всплывашки */}
                      {place.id}
                    </Tooltip>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    beds: getBeds(state), // Массив с кроватями
    selectedDates: getSelectedDates(state),
  };
};

export default connect(mapStateToProps, {})(RoomsMap);
