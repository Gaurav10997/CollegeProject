import React from 'react'
import TopicCard from './TopicCard'
import NavBar from '../globalUtility/Navbar';
import "./Practise.css"

function Practise() {
    const topics = [ "Basics ","Array" , "Matrix" , "String" , "Searching" , "Linked List" , "Binary Trees" , "BST" , "Greedy" , "BackTracking" , "Stacks & Queus" , "Heap" , "Graph" , "Trie" ,  "Bit Manipulation" ];
  return (
    <>
    <NavBar></NavBar>
    <h1 className='practise-heading'>Most Asked InterView Question</h1>
    <div className="practise">
        {topics.map((topic)=>{
          return(
              <TopicCard topic= {topic}/>
          )
        })}
    </div>
    </>
  )
}

export default Practise