import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./QuestionDescription.css"
function QuestionDescription({questionNo,questionName,difficultyLevel,questionScore,questionDescription,example1,example2}) {
  return (
    <>
    <div className="QuestionDescription__main">
        <div className="QuestionDescription__stats">
            <h2 className='QuestionDescription__stats__items '>{ questionNo + ". " +questionName}</h2>
            <h2 className='QuestionDescription__stats__items' >{difficultyLevel}</h2>
            <BookmarkBorderIcon className='QuestionDescription__stats__items' />
            <h2 className='QuestionDescription__stats__items' >Score:{questionScore}</h2>
        </div>
        <div className="QuestionDescription__paragraph">
            <p>{questionDescription}</p>
        </div>
        <div className="QuestionDescription__example1">
        <h2>Example 1:</h2>
          <pre>
            {example1}
          </pre>
        </div>
        <div className="QuestionDescription__example1">
        <h2>Example 2:</h2>
          <pre>
            {example2}
          </pre>
        </div>
        <div className="QuestionDescription__task">
        <br />
        <h2>Your Task</h2>
       
        <p>The task is to complete the function 
          {questionName} which takes the array and n as 
          input parameters and returns the point of 
          equilibrium. Return -1 if no such point exists.</p>
        </div>
    </div>
        
    </>

  )
}

export default QuestionDescription