import React from 'react'
import Congratulations from "./Congratulations.jsx"
import QuestionDescription from './QuestionDescription'
import Error from "./Error"
function Question(props) {
  console.log(props);
  return (
    <>
      {/* {!props.submit && <Congratulations></Congratulations> }
      {props.submit && <QuestionDescription></QuestionDescription>} */}
      <Error></Error>
    
    </>
  )
}

export default Question