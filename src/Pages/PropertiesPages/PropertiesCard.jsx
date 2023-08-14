import React from 'react'
import { LuBath } from 'react-icons/lu'
import { TbBedFilled } from 'react-icons/tb'

const PropertiesCard = ({item}) => {
  
  return (
    <div className=''>
         <div className="cursor-pointer shadow mb-4 pb-3 rounded">
        <div className="group   relative max-h-full	mx-auto overflow-hidden rounded shadow-lg">
          <img
            className="w-full h-72 max-h-full  object-cover   transform scale-100 group-hover:scale-105 transition-transform duration-300"
            src={item.image}
            alt=""
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
            <div className='pt-6 ps-2'>
                <h2 className='text-[#005555] font-bold text-lg border-b-2 w-24 pb-1 border-[#005555] '>{item.price}</h2>
                <p className='text-[#AEAEAE] pt-1'>{item.area}</p>
                <h3 className='text-2xl font-bold pt-1'>{item.name}</h3>
                <div className='flex mt-3 items-center text-[#AEAEAE]'>
                  <TbBedFilled className='h-6 w-6'/> 
                  <p className='ps-2'>{item.beds}</p> 
                  <LuBath className='h-6 w-6 ms-4'/>
                  <p className='ps-2'>{item.bath}</p> 
                </div>
                <button className='search_btn mt-4'>See details</button>
            </div>
      </div>
    </div>
  )
}

export default PropertiesCard