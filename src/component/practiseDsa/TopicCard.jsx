import React from 'react'
import "./TopicCard.css"



function TopicCard(props) {
  return (

    <div className='topic-card' >

        <h1 className='topic-card-heading'>{props.topic}</h1>
        <p>Total Question 36</p>
        <button className='topic-card-btn' >Start</button>

    </div>
  )
}

export default TopicCard