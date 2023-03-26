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
     <div className="home">
    <Navbar></Navbar>
    <div className="home-main">
    <div className="home-left">
        <h1 className='home-heading'>Welcome to <b>The Pink community</b> </h1>
      <div className='home-card'>
        <Menu></Menu>
        </div>
          <h1 className='home-heading'>Upcoming Contest</h1>
      <div className='home-card'>
          <UpcomingContest/>
        </div>
       
    </div>

    <div className="home-right">
      
      
    <Widgets></Widgets>
    
    </div>

    </div>
    
    </div>
    <HomeLeaderBoard></HomeLeaderBoard>
     

    
    {/* <Tweet tweetId="841418541026877441" /> */}

     {/* <UpcomingContest /> */}



    </>
    
  )
}

export default Home