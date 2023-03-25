import React from 'react'
import "./Card.css"
function Card(props) {
    
  return (
    <div className="card" style={{backgroundColor: props.color}} >
        <img className='card-image' src={props.image} alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card