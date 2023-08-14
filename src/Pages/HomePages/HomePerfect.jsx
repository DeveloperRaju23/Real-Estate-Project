import React from 'react'
import img from "../../assets/image/hero_bg_3.jpg"
import { FaHome, FaUser } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const HomePerfect = () => {
  return (
    <div className='bg-[#F8F9FA] py-12'>
        <div className='container'>
          <div className='md:w-2/4 w-full text-center mx-auto'>
              <h2 className='text-3xl font-semibold text-[#00204A]'>Let's find home that's perfect for you</h2>
              <p className='text-[#AEAEAE] pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit.</p>
          </div>
          <div className='flex flex-col gap-4 md:flex-row justify-between pt-12'>
              <div className='md:w-3/6	w-full'>
                  <div className='flex gap-3'>
                    <div className='w-[80px] md:h-[80px] h-[50px] p-3 flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200'><FaHome className='text-2xl'/></div>
                    <div>
                    <p className='text-2xl'>2M Properties</p>
                    <h2 className='md:text-lg text-sm md:w-80 w-full text-[#AEAEAE]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</h2>
                    </div>
                  </div>
                  <div className='flex gap-3 pt-8'>
                    <div className='w-[80px] md:h-[80px] h-[50px] p-3 flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200'><FaUser className='text-2xl'/></div>
                    <div className=''>
                    <p className='text-2xl'>Top Rated Agents</p>
                    <h2 className='md:text-lg text-sm md:w-80 w-full text-[#AEAEAE]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</h2>
                    </div>
                  </div>
                  <div className='flex gap-3 pt-8'>
                    <div className='w-[80px] md:h-[80px] p-3 h-[50px] flex justify-center items-center  rounded-full hover:border-2 border-[#00204A] bg-[#c2c3c5] duration-200'><MdSecurity className='text-2xl'/></div>
                    <div>
                    <p className='text-2xl'>Legit Properties</p>
                    <h2 className='md:text-lg text-sm md:w-80 w-full  text-[#AEAEAE]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</h2>
                    </div>
                  </div>
              </div>
              <div className='md:w-3/6	w-full'>
                    <img src={img} alt="" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default HomePerfect