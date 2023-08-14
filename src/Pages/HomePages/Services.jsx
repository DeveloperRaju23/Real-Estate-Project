import React, { useEffect, useState } from 'react'

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(() => {
      fetch('Services.json')
      .then((res) => res.json())
      .then((data) =>setServices(data))
    },[])
  return (
    <div className='bg-[#F2F4F6] py-12 '> 
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-4'>
                    {   
                        services.map((i) =>(
                          <div key={i.id}>
                          <div className='text-center mx-auto  bg-[#FFFFFF] py-8 px-6 rounded'>
                          <div className=''>     
                          <img className='h-20 w-20 text-center mx-auto'  src={i.image} alt="" />  
                           <h2 className='text-2xl font-bold py-2 text-[#00204A]'>{i.name}</h2>
                           <p className='text-[#AEAEAE] '>{i.desc}</p>
                           <button className='mt-6 border-b-2 w-24 text-lg'>Learn More</button>
                          </div>
                          </div>
                </div>
                        ))
                    }
               
            </div>
        </div>
    </div>
  )
}

export default Services