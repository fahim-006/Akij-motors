import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const Slider = ({ children }) => {
  return (
    <Swiper
      breakpoints={{
        220: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay
      navigation={true}
      className="mySwiper"
      effect="fade"
    >
      {children}
    </Swiper>
  );
};

export default Slider;
