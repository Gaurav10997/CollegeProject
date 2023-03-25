import React from 'react'
import Navbar from '../globalUtility/Navbar'
import "./Home.css"
import Menu from './Menu'
import UpcomingContest from './UpcomingContest'
import Card from './Card'
function Home() {

  let menuColor = "#88ccf1"
  let pastContestColor = "#c1dff0"
  return (
    <>
    <Navbar></Navbar> 
    <div className="welcomebox">
    <h1 className='home-heading'>Welcome to <b>The Pink community</b> </h1>
    <div className='home-card'>
      <Menu></Menu>
    </div>
    <h1 className='home-heading'>Upcoming Contest</h1>
    <div className='home-card'>
      <UpcomingContest/>
    </div>
    </div>

    
    </>
    
  )
}

export default Home