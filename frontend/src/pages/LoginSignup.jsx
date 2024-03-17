import React, { useState } from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {

  const [state,setstate]= useState("Login");
  const [formData,setformData]=useState({
    username:"",
    password:"",
    email:""

  })

  const changehandler =(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})

  }

  const login = async()=>{
    console.log("logiin",formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:"Post",
      headers:{
        Accept:'application/json',
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),

    }).then((response)=>response.json().then((data)=>responseData=data))

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }


  }

  const signup = async()=>{
    console.log("signup",formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"Post",
      headers:{
        Accept:'application/json',
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),

    }).then((response)=>response.json().then((data)=>responseData=data))

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }



  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up"? <input type="text"  value={formData.username} onChange={changehandler} name="username" placeholder="Your Name" />:<></>}
          <input  name="email"  value={formData.email} onChange={changehandler}  type="email"  placeholder='Email Address'  id="" />
          <input    type="password" name="password" value={formData.password} onChange={changehandler} id="" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up" ? <p className="loginsignup-login">
          Already have an account?  <span onClick={()=>{setstate("Login")}} >Login here</span></p> 
          :
           <p className="loginsignup-login">
          create an account?  <span onClick={()=>{setstate("Sign Up")}} >click here</span></p>
}
        
          
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup