import React, { useEffect } from 'react'
import Congratulations from "./Congratulations.jsx"
import QuestionDescription from './QuestionDescription'
import Error from "./Error"
import {questionData} from "./QuestionData.jsx"
import { useState } from 'react'
function Question({output,id}) {
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
          questionNo = {questionData[id].questionNo}
          questionName = {questionData[id].questionName}
          difficultyLevel = {questionData[id].difficultyLevel}
          questionScore= {questionData[id].questionScore}
          questionDescription= {questionData[id].questionDescription}
          example1= {questionData[id].example1}
          example2= {questionData[id].example2}
          >
          </QuestionDescription> }
          {error && <Error output={output} ></Error>}

          {congo && <Congratulations/>}
      
    
    </>
  )
}

export default Question