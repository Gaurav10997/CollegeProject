import { useState } from 'react';
import Split from 'react-split'
import Question from './Question';
import TextEditor from './Texteditor.jsx';
import "./Compiler.css"
function Compiler() {
  const [submit, setSubmit]=useState(true)
  function run(){
    setSubmit((prev)=>(!prev))

  }
 
  return (
      <Split 
      className='split'
      sizes={[40, 60]}
      minSize={750}
      >
      <Question submit={submit} />
      <TextEditor handleClick={run} />
      </Split>
  );
}
export default Compiler;