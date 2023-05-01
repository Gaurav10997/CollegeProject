import React, { useEffect } from 'react'
import Congratulations from "./Congratulations.jsx"
import QuestionDescription from './QuestionDescription'
import Error from "./Error"
import {questionData} from "./QuestionData.jsx"
import { useState } from 'react'

function Question({output}) {

    const [congo , setcongo] = useState(false)
    const [error , setError] = useState(false)
    const [question,setquestion] = useState(true);
    // console.log(output.length);
    useEffect(()=>{
      if(output && output.length==5){
        setcongo(true);
        setError(false)
        setquestion(false)
       }
      else if(output && output.length>=6){
        setError(true)
        setcongo(false)
        setquestion(false)
      }
      
    },[output])
    
 
  return (
    <>
        { question &&   <QuestionDescription 
          questionNo = {questionData[0].questionNo}
          questionName = {questionData[0].questionName}
          difficultyLevel = {questionData[0].difficultyLevel}
          questionScore= {questionData[0].questionScore}
          questionDescription= {questionData[0].questionDescription}
          example1= {questionData[0].example1}
          example2= {questionData[0].example2}
          >
          </QuestionDescription> }
          {error && <Error output={output} ></Error>}

          {congo && <Congratulations/>}
      
    
    </>
  )
}

export default Question