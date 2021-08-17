import Image from 'next/image';
import Card from '../../UI/Card/Card';
import classes from './Partners.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
// SwiperCore.use([Pagination]);

const Partners = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className={classes.headline}>Partners</h1>

      <Card>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <div className={classes.partners}>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  width="100%"
                  height="120px"
                  src={`/partners/partner-${item}.png`}
                  alt="partner"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </Card>
    </div>
  );
};

export default Partners;
