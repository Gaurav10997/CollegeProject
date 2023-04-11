import React from 'react'
import "./NavabarSolvation.css"

function NavbarSolvation() {
  return (
    <div>
        <navbar className="solve__navbar">
                <div className='status'>
                    <p >Status</p>
                </div>
                <div className='title'>
                    <p>Title</p>
                </div>
                <div className='difficulty'>
                    <p>Difficulty</p>
                </div>
                <div className='solve'>
                    <p>Solve </p>
                </div>
        </navbar>
    </div>
  )
}

export default NavbarSolvation