import React from 'react'
import Loginviacard from "./Loginviacard"
import "./login.css"
import { useState ,useRef } from 'react'

function Login() {
  const [newUser, setNewUser] = useState(false)
    // function handleclick(){
    //     setNewUser((prev)=>!prev)
    // }
    // if(newUser){
    //     const handleuser = (e) =>{
    //         e.preventDefault();
    //         console.log("clicked login ");
    //     }
    // }else{

    //     const handleuser = () =>{
    //         console.log("clicked signup");
    //     }
    // }
    const enteredEmailref = useRef();
    const enteredPasswordref = useRef();
    function handleAdduser(e){
        e.preventDefault()
        const enteredEmail=enteredEmailref.current.value;
        const enteredPassword=enteredPasswordref.current.value;
        console.log(enteredEmail);
    }

  return (
    <>
    <div className='login__page'>
     <img className='login__pageimage' src="https://lightoj.com/img/illustrations/questions/programming.svg" alt="" />
     <form className="login__form" onSubmit= {handleAdduser}  >
    <h1>Welcome Back</h1>
    <p>Sign in with credentials or social account</p>
    <label htmlFor="Email">
    <input ref={enteredEmailref}  name="Email" type="email" placeholder="Username or Email" className="login__form__inputs"  />
    </label>
    <label  htmlFor="Password"> 
        <input ref={enteredPasswordref} className="login__form__inputs" name="Password" type="text" placeholder="Enter Your Password" />
    </label>

    <button  className='login__form__submitbtn'  >Login</button>
    <Loginviacard></Loginviacard>
    <Loginviacard></Loginviacard>
    <p>Dont Have an account ? </p>{newUser && <p>login</p>}
   </form>
    </div>
     
    
    </>
  
  )
}

export default Login