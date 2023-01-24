import React from 'react'
import HomeImage from './HomeImage/HomeImage'
import { HomeContainer } from './HomeStyles'
import MissionAndVision from './MissionAndVision/MissionAndVision'
import OurTeam from './OurTeam/OurTeam'

const Home = () => {
  return (
    <HomeContainer>
      <HomeImage/>
      <MissionAndVision/>
      <OurTeam/>
    </HomeContainer>
  )
}

export default Home