import { sideBarData } from '../sidebardata';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import Image from 'next/image';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Hero = () => {
  return (
    <div className="container flex max-h-screen mx-auto text-black shadow-md slider-section bg-gray-50">
      {/* <!-- *************************** Side Menu **************** --> */}

      <div className="hidden min-h-full bg-gradient-to-br from-akij-blue to-akij-lblue side-bar md:block md:w-1/5">
        <ul className="overflow-hidden text-xs">
          {sideBarData.map((item, idx) => {
            return (
              <li
                key={idx}
                className="relative flex items-center justify-between px-2 py-1 tracking-wide text-gray-100 border-b border-gray-400 cursor-pointer group menu-item hover:bg-gray-100 hover:font-semibold hover:text-akij-red"
              >
                <p>{item.name}</p>{' '}
                <i>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    size="18"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                  </svg>
                </i>
                <div className="absolute top-0 z-50 hidden w-full bg-gray-200 group-hover:block sub-menu-item left-full">
                  <ul className="text-left">
                    <li className="px-2 py-1 tracking-wide uppercase border-b hover:bg-gray-100 hover:border-gray-100">
                      <a href="#" className="">
                        Durjoy 775 KG Diesel
                      </a>
                    </li>
                    <li className="px-2 py-1 tracking-wide uppercase border-b hover:bg-gray-100 hover:border-gray-100">
                      <a href="#" className="">
                        Durjoy 775 KG Diesel
                      </a>
                    </li>
                    <li className="px-2 py-1 tracking-wide uppercase border-b hover:bg-gray-100 hover:border-gray-100">
                      <a href="#" className="">
                        Ponkhiraj 1000 KG Diesel
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full md:w-4/5">
        <Swiper autoplay loop effect="fade">
          {[1, 2, 3, 4, 5].map((item, el) => {
            return (
              <SwiperSlide key={el} className="w-full h-full">
                <img
                  width="100%"
                  height="100%"
                  src={`/slider/slide-${item}.jpg`}
                  alt="Slider"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
