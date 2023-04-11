import React from 'react'
import Loginviacard from './Loginviacard'
import {useState ,useRef,useContext } from 'react'
import AuthContext from '../../store/AuthContest';
import "./login.css"
function Login() {
  const [newUser, setNewUser] = useState(true);
  const enteredEmailref = useRef();
  const enteredPasswordref = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const authCtx = useContext(AuthContext)
  function handleAdduser(e) {
    e.preventDefault();
    const enteredEmail = enteredEmailref.current.value;
    const enteredPassword = enteredPasswordref.current.value;
    enteredEmailref.current.value="";
    enteredPasswordref.current.value="";
    const userInfo = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true
    };
    
    if(newUser){
      //Rest Api for Sign in With Google 
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlvwokXZ0SoPCq00Mtg-Usj4z0ByGwlpg",{
        method:"POST",
        body:JSON.stringify(userInfo),
        headers:{
          "Content-Type": "application/json"
        }
      
      })
      .then((res)=>{
        if(res.ok){
           
        }
        else{
            return res.json().then((data)=>{
            console.log(data);
             setErrorMessage( data.error.message)
          })
        }
      })
      .catch((error)=>{
        console.log(error);
      })
      
    }
    //
    if(!newUser){
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlvwokXZ0SoPCq00Mtg-Usj4z0ByGwlpg",{
        method:"POST",
        body:JSON.stringify(userInfo),
        headers:{
          "Content-Type": "application/json"
        }
      })
      .then((res)=>{
        if(res.ok){
          return res.json().then((data)=>{
            authCtx.login(data.idToken)
             // data is the main thing for the authentication 
            
          })
          // console.log(res);
        }
        else{
          return res.json().then((data)=>{
            console.log(data);
            setErrorMessage(data.error.message)
          })
        }
      })
      
    }   
    }
    function toggleAuth(){
      setNewUser((prev)=>!prev)
    }
    if(errorMessage!="")
    {
      alert(errorMessage)
      setErrorMessage("");

    }
  return (
    <>
    <div className='login__page'>
     <img className='login__pageimage' src="https://lightoj.com/img/illustrations/questions/programming.svg" alt="" />
     <form className="login__form" onSubmit= {handleAdduser}  >
    {!newUser && <h1>Sign In</h1>}
    {newUser && <h1>Sign Up </h1>}
    {!newUser && <p>Welcome back to the coolest community in India!</p>}
    {newUser && <p>Welcome to the coolest community in India! </p>}
    <label htmlFor="Email">
    <input ref={enteredEmailref}  name="Email" type="email" placeholder="Username or Email" className="login__form__inputs"  />
    </label>
    <label  htmlFor="Password"> 
        <input ref={enteredPasswordref} className="login__form__inputs" name="Password" type="text" placeholder="Enter Your Password" />
    </label>
    { newUser && <button  className='login__form__submitbtn' onClick={handleAdduser} >SignUp</button>}
    { !newUser && <button  className='login__form__submitbtn' onClick={handleAdduser} >Login</button>}
    <Loginviacard></Loginviacard>
    <Loginviacard></Loginviacard>
    {!newUser &&<p >Dont Have an account ? <b onClick={toggleAuth} >Sign Up</b></p>}
    {newUser &&<p>Already Part of The Community? <b onClick={toggleAuth} >Sign In</b> </p>}
   </form>
    </div>
  
    </>
  
  )
}

export default Login