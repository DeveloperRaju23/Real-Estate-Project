import React, { useEffect, useState } from 'react'

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(() => {
      fetch('Services.json')
      .then((res) => res.json())
      .then((data) =>setServices(data))
    },[])
  return (
    <div className='bg-[#F2F4F6] py-12'> 
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    {   
                        services.map((i) =>(
                          <div key={i.id}>
                          <div className='text-center mx-auto'>
                              
                          <img className='h-12 w-12 text-center mx-auto'  src={i.image} alt="" />  
                           <h2>{i.name}</h2>
                           <p>{i.desc}</p>
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