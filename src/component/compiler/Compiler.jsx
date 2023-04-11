import { useState } from 'react';
import Split from 'react-split'
import Question from './Question';
import TextEditor from './Texteditor.jsx';
import "./Compiler.css"
function Compiler() {
  return (
      <Split 
      className='split'
      sizes={[40, 60]}
      minSize={750}
      >
      <Question  />
      <TextEditor/>
      </Split>
  );
}
export default Compiler;