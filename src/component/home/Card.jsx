import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
function Card(props) {

  return (
<Link to={"/practise"}>
<div className="card" style={{backgroundColor: props.color}} >
        <div className='card-box'>
            <img src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>  
    </div>
</Link>

  )
}

export default Card