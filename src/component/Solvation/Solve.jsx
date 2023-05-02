import React from 'react'
import NavbarSolvation from './NavbarSolvation';
import MainSolvation from './MainSolvation';
import Navbar from '../globalUtility/Navbar';
import Sheet from '../compiler/Sheet';
import "./Solve.css"
import { Link } from 'react-router-dom';
import { questionData } from '../compiler/QuestionData';
function Solve() {
  // const questions = [{
  //   topicname, 
  //   topicid,
  // }];

  const questions = [

  {
    topicname: 'Factorial of A Program',
    topicid: '1',
  },
  {
    topicname: 'prime no of a number ',
    topicid: '2',
  },
   
]
  // for(let key in Sheet){
  //   questions.
  //     // questions.push(Sheet[key].questions[0].Problem);
  // }
  
  return (
    <div>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <h1> Basics Of Programming </h1>
      <br />
      <hr />
        <NavbarSolvation />
        {
          questions.map((el)=>{
            return (
                <Link to={`${el.topicid}`} ><MainSolvation title= {el.topicname}   /></Link>
            )
          })
        }
        
        
    </div>
  )
}

export default Solve;