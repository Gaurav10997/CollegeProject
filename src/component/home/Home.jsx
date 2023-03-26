import React from 'react'
import Navbar from '../globalUtility/Navbar'
import Widgets from './Widgets/Widgets'
import Menu from './Menu'
import UpcomingContest from './UpcomingContest'
import HomeLeaderBoard from './Widgets/HomeleaderBoard'
import "./Home.css"
function Home() {
  return (
  <>

    <div className="home-container">

        <Navbar></Navbar>
        <div className="home-main">
            <div className="home-left">
                  <h1 className='home-heading-pink-community'>Welcome to <b>The Pink community</b> </h1>
                  <div className='home-card-pink-community'>
                    <Menu></Menu>
                  </div>
                <h1 className='home-heading-upcoming-contest'>Upcoming Contest</h1>
                <div className='home-card-upcoming-contest'>
                  <UpcomingContest/>
                </div>
            </div>

            <div className="home-right"> 
                <Widgets></Widgets>
            </div>
        </div>
    
    </div>

  </>
    
  )
}

export default Home