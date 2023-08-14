import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);
// import { Autoplay } from "swiper";
import slider1 from "../../assets/HomePages/hero_bg_1.jpg";
import slider2 from "../../assets/HomePages/hero_bg_2.jpg";
import slider3 from "../../assets/HomePages/hero_bg_3.jpg";
const HeroSlider = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: "3000",
        }}
        modules={[]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div class="relative h-screen bg-black">
            <img
              src={slider1}
              alt="Background Image"
              class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div class="absolute inset-0 bg-black opacity-0"></div>
            <div class="absolute inset-0  flex-col flex justify-center items-center">
              <h2 className="text-white lg:text-4xl text-3xl text-center  font-semibold tracking-wider">Easiest way to find your dream home</h2>
             <div className="mt-6 flex gap-3 flex-col md:flex-row">
             <input className=" py-4 ps-6 pe-60 w-full rounded-full outline-none hover:border-none" placeholder="Your ZIP code or City. e.g.New York" type="text" />
              <button className="search_btn">Search</button>
             </div>
            </div>
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="relative h-screen bg-black">
            <img
              src={slider2}
              alt="Background Image"
              class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div class="absolute inset-0 bg-black opacity-0"></div>
            <div class="absolute inset-0  flex-col flex justify-center items-center">
              <h2 className="text-white lg:text-4xl text-3xl text-center  font-semibold tracking-wider">Easiest way to find your dream home</h2>
             <div className="mt-6 flex gap-3 flex-col md:flex-row">
             <input className=" py-4 ps-6 pe-60 w-full rounded-full outline-none hover:border-none" placeholder="Your ZIP code or City. e.g.New York" type="text" />
              <button className="search_btn">Search</button>
             </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="relative h-screen bg-black">
            <img
              src={slider3}
              alt="Background Image"
              class="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div class="absolute inset-0 bg-black opacity-0"></div>
            <div class="absolute inset-0  flex-col flex justify-center items-center">
              <h2 className="text-white lg:text-4xl text-3xl text-center  font-semibold tracking-wider">Easiest way to find your dream home</h2>
             <div className="mt-6 flex gap-3 flex-col md:flex-row">
             <input className=" py-4 ps-6 pe-60 w-full rounded-full outline-none hover:border-none" placeholder="Your ZIP code or City. e.g.New York" type="text" />
              <button className="search_btn">Search</button>
             </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
