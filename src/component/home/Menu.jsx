import React from 'react'
import Card from './Card'
function Menu(props) {
    let menuColor = "#88ccf1"
  return (
    <>
    <Card 
        color={`${menuColor}`}
        image="https://img.icons8.com/external-nawicon-outline-color-nawicon/256/external-puzzle-business-nawicon-outline-color-nawicon.png" 
        title="Practise DSA"  
        description ="" />
      <Card 
      color={`${menuColor}`}
      image="https://cdn-icons-png.flaticon.com/512/5551/5551496.png" 
      title=" DSA Contest"  
      description =""/>
      <Card
      color={`${menuColor}`}
      image="https://cdn-icons-png.flaticon.com/512/9696/9696939.png" 
      title="Hackathon"  
      description =""/>
      
      <Card
      color={`${menuColor}`}
      image="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" 
      title="Free Resource"  
      description =""/>
    </>
  )
}

export default Menu