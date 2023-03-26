import React from 'react'
import NavBar from '../globalUtility/Navbar'
import "./QuestionsList.css"
import AllQuestions from './AllQuestions'
function QuestionsList() {
  return (
    <> 
    <NavBar></NavBar>
    <div className="question">
    <div className='QuestionsList-main' >
    <h1>Basics Of Programming</h1>
    <button>Filter</button>
    </div>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    <AllQuestions></AllQuestions>
    
    </div>

    </>
    
  )
}

export default QuestionsList