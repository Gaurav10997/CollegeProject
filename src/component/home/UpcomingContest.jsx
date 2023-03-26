import React from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./UpcomingContest.css"
function UpcomingContest() {
    let pastContestColor = "#c1dff0"
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
  return (
    <div className="upcoming-contest-wrapper">
    <Card 
        color={`${pastContestColor}`}
        image="https://cdn-icons-png.flaticon.com/128/335/335631.png" 
        title=" DSA Contest 1"  
        description="" />
      <Card 
      color={`${pastContestColor}`}
      image="https://cdn-icons-png.flaticon.com/128/335/335631.png" 
      title=" DSA Contest 2"  
      description =""/>
      <Card
      color={`${pastContestColor}`}
      image="https://cdn-icons-png.flaticon.com/128/335/335631.png" 
      title=" DSA Contest 3"  
      description =""/>
      
      <Card
      color={`${pastContestColor}`}
      image="https://cdn-icons-png.flaticon.com/128/335/335631.png" 
      title=" DSA Contest 4"  
      description =""/>
    
    </div> 
  )
}

export default UpcomingContest