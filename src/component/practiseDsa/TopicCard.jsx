import React from 'react'
import { Link } from 'react-router-dom';
import "./TopicCard.css"
function TopicCard(props) {
  // const topics = [ "Basics ","Array" , "Matrix" , "String" , "Searching" , "Linked List" , "Binary Trees" , "BST" , "Greedy" , "BackTracking" , "Stacks & Queus" , "Heap" , "Graph" , "Trie" ,  "Bit Manipulation" ];
  // const linkTopics = []
  // const baseurl = "/practise/";
  // for(let i = 0 ; i< topics.length ; i++){
  //   let t = topics[i].toLowerCase()
  //   linkTopics[i]=baseurl+t
  // }
  // function navigatetotheList (e){
  //     console.log(e.currentTarget);
  // }
  // const amit = linkTopics.map((el)=>{
  //   return (
  //     <button className='topic-card-btn' to = `${el}` >Start</button>
  //   )
  // })
  
  return (
    <div className='topic-card' >
        <h1 className='topic-card-heading'>{props.topic}</h1>
        <p>Total Question 36</p>

        <button className='topic-card-btn' >Start</button>
    </div>
  )
}

export default TopicCard