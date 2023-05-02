import { useState ,useEffect} from 'react';
import Split from 'react-split'
import Question from './Question';
import TextEditor from './Texteditor.jsx';
import {questionData} from "./QuestionData.jsx"
import { Link } from 'react-router-dom';
import { Route, Router } from 'react-router';
import { useParams } from "react-router-dom";
import "./Compiler.css"
function Compiler() {
 const [data,setData] =  useState("");
 const [codeforThequestion,setCodefortheQuestion] = useState("")
 const [output,setOutput] = useState("");
  function getData(data){
    setData(data)
    setCodefortheQuestion( `${questionData[0].driverCode}${data}`)
    submitCode(codeforThequestion)
  }
  
  // function submitCode(t){
  //   console.log(t);
  // }
  const { id } = useParams();
  console.log(id);
  

  function submitCode(codeforThequestion){
    // https://rapidapi.com/abdheshnayak/api/code-compiler/ 
    const b = {
      language: "java",
      version: "latest",
      code: codeforThequestion,
      input: null
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "eef8b037cfmsh3cd5f8f476f4d61p14c1afjsn9ae360892b93",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com"
      },
      body: `${JSON.stringify(b)}`
    };

    fetch("https://online-code-compiler.p.rapidapi.com/v1/", options)
      .then((response) => response.json())
      .then((response) => setOutput(response.output))
      // .then(getError(output))
      .catch((err) => console.error(err)); 
  }
  return (
 

  <Split 
      className='split'
      sizes={[40, 60]}
      minSize={750}
      >
      <Question  output = {output} id={id-1} />
      <TextEditor   userCode= {id && questionData[id-1].userCode} getData = {getData}/>
    </Split> 


      
  );
}
export default Compiler;