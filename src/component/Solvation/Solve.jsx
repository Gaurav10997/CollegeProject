import React from 'react'
import NavbarSolvation from './NavbarSolvation';
import MainSolvation from './MainSolvation';
import Navbar from '../globalUtility/Navbar';
import Sheet from '../compiler/Sheet';
import "./Solve.css"
import { Link } from 'react-router-dom';

function Solve() {
  const questions = [];
  for(let key in Sheet){
      questions.push(Sheet[key].questions[0].Problem);
  }
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
                <Link to={el} ><MainSolvation title= {el}   /></Link>
            )
          })
        }
        
        
    </div>
  )
}

export default Solve;