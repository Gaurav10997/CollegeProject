import React from 'react'
import NavBar from '../globalUtility/Navbar'
import UserBox from './UserBox'
import "./LeaderBoard.css"
function LeaderBoard() {
  return (
    <>
    <NavBar></NavBar>
    <br />
    <br />
    <div className="LeaderBoard">
        <h1>Ranks</h1>
        <br />
        <hr />
        <br />
        <div className='LeaderBoard-menu'>
            <h2>Rank</h2>
            <h2>Name</h2>
            <h2>Score</h2>
        </div>
        <br />
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <UserBox></UserBox>
        <div className='LeaderBoard-btn'>
          <button className='LeaderBoard-btn-previous' >&lt;</button>
          <button className='LeaderBoard-btn-next' >&gt;</button>  
        </div>

    </div>
    </>
    

  )
}

export default LeaderBoard