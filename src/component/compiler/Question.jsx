import React from 'react'
import Congratulations from "./Congratulations.jsx"
import QuestionDescription from './QuestionDescription'

function Question(props) {

console.log(props.submit);
  return (
    <>
      {!props.submit && <Congratulations></Congratulations> }
      {props.submit && <QuestionDescription></QuestionDescription>}
  
    
    </>
  )
}

export default Question