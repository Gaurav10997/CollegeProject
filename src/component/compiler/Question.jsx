import React from 'react'
import Congratulations from "./Congratulations.jsx"
import QuestionDescription from './QuestionDescription'
import Error from "./Error"
import {questionData} from "./QuestionData.jsx"

function Question() {
  console.log(questionData[0].questionDescription);
  return (
    <>
       {/* <QuestionDescription 
          questionNo = {questionData[0].questionNo}
          questionName = {questionData[0].questionName}
          difficultyLevel = {questionData[0].difficultyLevel}
          questionScore= {questionData[0].questionScore}
          questionDescription= {questionData[0].questionDescription}
          example1= {questionData[0].example1}
          example2= {questionData[0].example2}
          >
          </QuestionDescription> */}
          {/* <Error></Error> */}

          <Congratulations />
      
    
    </>
  )
}

export default Question