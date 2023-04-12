import React from 'react'
import "./MainSolvation.css"

function MainSolvation({title}) {
  return (
    <div className='main-solvation'>

        <div className='main-status'>
            <p>Yes</p>

        </div>
        <div className='main-title'>
            <p>{title}</p>
        </div>
        <div className='main-difficulty'>
            <p>Hard</p>
        </div>
        <div className='main-solve'>
            <button>Solve now</button>
        </div>

    </div>  
  )
}

export default MainSolvation;