import React from 'react';
import FeatureVehicleCard from '../../UI/FeatureVehicleCard/FeatureVehicleCard';
import classes from './Featured.module.css';
import Slider from '../../UI/Slider/Slider';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

import features from '../../DUMYY_DATA/featured';

const Featured = () => {
  return (
    <div className={`w-full container mx-auto`}>
      <div className={classes.Featured__elements}>
        <h3 className={`${classes.headline} text-3xl font-medium text-center`}>
          Featured Vehicles
        </h3>

        <Slider perPreview={1}>
          {features &&
            features.map((feature) => {
              return (
                <SwiperSlide key={feature.id}>
                  <FeatureVehicleCard
                    title={feature.title}
                    img={feature.img}
                    url={feature.url}
                  />
                </SwiperSlide>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
