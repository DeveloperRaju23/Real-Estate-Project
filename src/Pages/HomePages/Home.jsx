import React from 'react'
import HeroSlider from './HeroSlider'
import FeaturedProperties from './FeaturedProperties'
import Services from './Services'
import Reviews from './Reviews'
import HomePerfect from './HomePerfect'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <FeaturedProperties/>
        <Services/>
        <Reviews/>
        <HomePerfect/>
        </div>
  )
}

export default Home