import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className='Logpage'>
      <div className="logpage-containar">
        <h1>Login</h1>
        <div className="login-form">
          <input type='text' placeholder='Enter Your Name'></input><br></br>
          <input type='text' placeholder='Enter Your Email Address'></input><br></br>
          <input type='text' placeholder='Enter your Password'></input>
        </div>
        <div className="login-continuebutton">
          <button>Continue</button>
          <div className="login-details">
            <h2>create and account ?  <label style={{color:'red',cursor:"pointer"} }>click her</label></h2>
          </div>
          <div className="login-private-police">
            <input style={{cursor:'pointer'}} type="radio"></input><label>I agree with your private policies </label>
          </div>
          
         
        </div>
      </div>

      
    </div>
  )
}

export default Login
