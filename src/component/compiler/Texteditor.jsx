import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import "./Texteditor.css"
import { useState ,useEffect ,createContext } from 'react';
export const ResultContext = createContext();
function TextEditor({driverCode,userCode,getData}) { 
      const [output, setOutput] = useState(""); // output is the output of the program
      const [code , setCode] = useState(userCode)
      
      let codeforThequestion =   `
      ${driverCode}${code}
`
      // function submitCode(){
      //   console.log("clicked");
      //   // https://rapidapi.com/abdheshnayak/api/code-compiler/ 
      //   const b = {
      //     language: "java",
      //     version: "latest",
      //     code: codeforThequestion,
      //     input: null
      //   };

      //   const options = {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //       "X-RapidAPI-Key": "eef8b037cfmsh3cd5f8f476f4d61p14c1afjsn9ae360892b93",
      //       "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com"
      //     },
      //     body: `${JSON.stringify(b)}`
      //   };
    
      //   fetch("https://online-code-compiler.p.rapidapi.com/v1/", options)
      //     .then((response) => response.json())
      //     .then((response) => setOutput(response.output))
      //     // .then(getError(output))
      //     .catch((err) => console.error(err)); 
      // }


      
      return (
        <>
          <div className='right__side'>
          <CodeMirror 
              className='codemirror'
              value={code}
              height="890px"
              theme="dark"
              extensions={[java({ jsx: true })]}
              onChange={(editor,change)=>{
                setCode(editor)
              }}
            />
            <div className="right__side__btn__main">
              <div className="right__side__btn">
                <div>{output}</div>
                <button className="TextEditor__btn" onClick={()=>getData(code)}>Run</button>
              </div>  
            </div>
          </div>   
        </>
  )
}
export default TextEditor