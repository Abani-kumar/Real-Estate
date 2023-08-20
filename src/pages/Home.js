import React from 'react'
import Header from '../components/Header'
import Explore from '../components/Explore'
import Agents from '../components/Agents'
import PopularHouse from '../components/PopularHouse'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Header/>
        <Explore/>
        <Agents/>
        <PopularHouse/>
        <Contact/>
    </div>
  )
}

export default Home