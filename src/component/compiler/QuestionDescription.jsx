import React from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./QuestionDescription.css"
function QuestionDescription() {
  return (
    <>
    <div className="QuestionDescription__main">
        <div className="QuestionDescription__stats">
            <h2 className='QuestionDescription__stats__items '>Wave Array</h2>
            <h2 className='QuestionDescription__stats__items' >Medium</h2>
            <BookmarkBorderIcon className='QuestionDescription__stats__items' />
            <h2 className='QuestionDescription__stats__items' >Score:40</h2>
        </div>
        <div className="QuestionDescription__paragraph">
            <p>{`Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
            In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

            If there are multiple solutions, find the lexicographically smallest one.`}</p>
        </div>

    </div>
        
    </>

  )
}

export default QuestionDescription