import React from 'react'
import Card from './Card'
function UpcomingContest(props) {
    
    let pastContestColor = "#c1dff0"
  return (
    <>
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
    </>
  )
}

export default UpcomingContest