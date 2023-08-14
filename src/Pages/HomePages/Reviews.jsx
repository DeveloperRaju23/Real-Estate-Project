import React, { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    const [reviews , setReviews] = useState([])

    useEffect(() => {
      fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data))
    },[])
  return (
    <div className='container pb-16'>
    <div className='flex justify-between mt-12 mb-12 flex-col md:flex-row'>
      <h2 className='lg:text-4xl text-2xl text-center md:text-end font-semibold '>Customer Says </h2>
      
    </div>

    <div>
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: "2000",
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {reviews.map((item) => (
        <SwiperSlide key={item.id}>
  <div className="">
    <div className="">
      <img
        className="w-24 h-24 rounded-full"
        src={item.image}
        alt=""
      />
    </div>
        <div className='pt-6 ps-2'>
            <div className='flex items-center '>
            <AiFillStar className='text-yellow-500 text-xl'/>
            <AiFillStar className='text-yellow-500 text-xl'/>
            <AiFillStar className='text-yellow-500 text-xl'/>
            <AiFillStar className='text-yellow-500 text-xl'/>
            <AiFillStar className='text-yellow-500 text-xl'/>
            </div>
            <h3 className='text-2xl text-[#00204A] font-semibold pt-1'>{item.name}</h3>
            <p className='pt-2 text-[#AEAEAE]'>{item.desc}</p>
            <p className=' text-[#8f8e8e] text-lg pt-2 '>{item.ceo}</p>
        </div>
  </div>

        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
  )
}

export default Reviews