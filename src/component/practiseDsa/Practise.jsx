import React from 'react'
import Solve from '../Solvation/Solve';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TopicCard from './TopicCard'
import NavBar from '../globalUtility/Navbar';
import "./Practise.css"
function Practise() {
  const navigate = useNavigate()
  const topics = [ "Basics ","Array" , "Matrix" , "String" , "Searching" , "Linked List" , "Binary Trees" , "BST" , "Greedy" , "BackTracking" , "Stacks & Queus" , "Heap" , "Graph" , "Trie" ,  "Bit Manipulation" ];
  return (
    <>
    <NavBar></NavBar>
    <br />
    <br />
    <h1 className='practise-heading'>Most Asked InterView Question</h1>
    <br />
    <div className="practise">
       
   {topics.map((topic)=>{
    return(
       <Link to={topic.toLowerCase()} ><TopicCard topic= {topic}  /></Link> 
    )
   })}
    </div>
    </>
  )
}

export default Practise