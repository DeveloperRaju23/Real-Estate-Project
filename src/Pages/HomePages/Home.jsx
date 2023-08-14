import React from 'react'
import HeroSlider from './HeroSlider'
import FeaturedProperties from './FeaturedProperties'
import Services from './Services'
import Reviews from './Reviews'
import HomePerfect from './HomePerfect'
import ApplyRealEstate from './ApplyRealEstate'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <FeaturedProperties/>
        <Services/>
        <Reviews/>
        <HomePerfect/>
        <ApplyRealEstate/>
        </div>
  )
}

export default Home