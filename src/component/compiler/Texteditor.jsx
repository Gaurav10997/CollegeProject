import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { useState } from 'react';
import "./Texteditor.css"
function TextEditor(props) {
  let codeforThequestion = `import java.util.*;
  public class Main {
  
      public static int divisibleSumPairs(int arr[], int n, int k){
          // Write code here
      }
  
      public static void main(String[] args) {
          Scanner sc=new Scanner(System.in);
          int n=sc.nextInt();
          int k=sc.nextInt();
          int arr[]=new int[n];
          for(int i=0;i<n;++i){
              arr[i]=sc.nextInt();
          }
          int result = divisibleSumPairs(arr, n, k);
          System.out.print(result);        
          System.out.println('');
      }
  }`
  const [code , setCode] = useState(codeforThequestion)
  function submitCode(){
    console.log(code);
  }
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
      <button className="right__side__btn__console">Console</button>
        <div className="right__side__btn">
        <button className="TextEditor__btn" onClick={submitCode} >Run</button>
        <button className="TextEditor__btn" onClick={props.handleClick} >Submit</button>
      </div>  
      </div>
    </div>
         
    </>
  )

}

export default TextEditor