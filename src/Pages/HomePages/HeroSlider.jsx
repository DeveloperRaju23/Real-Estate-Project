import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Autoplay } from "swiper";
import slider1 from "../../assets/HomePages/hero_bg_1.jpg"
import slider2 from "../../assets/HomePages/hero_bg_2.jpg"
import slider3 from "../../assets/HomePages/hero_bg_3.jpg"
const HeroSlider = () => {
  return (
    <div className=' '>

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
        
            <SwiperSlide >
              {/* <div className="relative ">
                <img
                  
                  className="w-full h-[100vh] absolute inset-0  object-cover opacity-50"
                />
                  <div class="absolute inset-0 bg-black opacity-60"></div>
               {/* <h3 className="font-semibold mb-2  z-40  text-7xl">
                    hello
                  </h3> */}
              {/* </div> */} 
              <div class="relative h-screen bg-black">
             <img  src={slider1} alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-70" />
  <div class="absolute inset-0 bg-black opacity-0"></div>
  <div class="absolute inset-0 flex justify-center items-center">
                  <h2 className='text-white text-3xl'>Hello world</h2>
  </div>
</div>
            </SwiperSlide>
            
            <SwiperSlide >
            <div class="relative h-screen bg-black">
             <img  src={slider2} alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-70" />
  <div class="absolute inset-0 bg-black opacity-0"></div>
  <div class="absolute inset-0 flex justify-center items-center">
                  <h2 className='text-white text-3xl'>Hello world</h2>
  </div>
</div>
            </SwiperSlide>
            
            <SwiperSlide >
            <div class="relative h-screen bg-black">
             <img  src={slider3} alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-70" />
  <div class="absolute inset-0 bg-black opacity-0"></div>
  <div class="absolute inset-0 flex justify-center items-center">
                  <h2 className='text-white text-3xl'>Hello world</h2>
  </div>
</div>
            </SwiperSlide>
        
        </Swiper>
    </div>
  )
}

export default HeroSlider