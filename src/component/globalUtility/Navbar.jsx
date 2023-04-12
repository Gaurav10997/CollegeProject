import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar">
      <div className="logoandname navbarchild">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoding-logo&psig=AOvVaw2uFeMq-NkIr2IdRJauEOwV&ust=1681411338728000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCC573_pP4CFQAAAAAdAAAAABAJ" width={40} alt="" />
      </div>
      <div className="menuitems navbarchild ">
       <NavLink to="/" ><p>Home</p></NavLink>  
       <NavLink to="/practise" ><p>Solve Questions</p></NavLink> 
       <NavLink to="/" ><p>About Us</p></NavLink> 
      </div>
      <div className="profilephoto navbarchild">
        <img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" width={60} />
      </div>
    </div>
  )
}

export default Navbar