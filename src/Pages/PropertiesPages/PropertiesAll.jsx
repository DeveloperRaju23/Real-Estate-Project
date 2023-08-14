import React, { useEffect, useState } from 'react'
import PropertiesCard from './PropertiesCard'

const PropertiesAll = () => {
    const [products , setProducts] = useState([])

    useEffect(() => {
      fetch('Properties.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
    },[])
  return (
    <div className='container pt-28'>
  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
       {
        products.map((item) =>(
            <PropertiesCard
             key={item.id}
             item={item}
             >


            </PropertiesCard>
        ))
       }
    </div>
    </div>
  
  )
}

export default PropertiesAll