// Шмпорт src для картинок нужно делать в родительском компоненте
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CreateCarousel = ({ styleClassName, src }) => {
  // Функция принимает имя css класса и список src в виде массива
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {src.map((src) => {
        return (
          <SwiperSlide key={src}>
            <img alt="Atlant Hostel" src={src} className={styleClassName} />
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <img alt='Atlant Hostel' src={img1} className={style.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt='Atlant Hostel' src={img2} className={style.slideImg} />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default CreateCarousel;
