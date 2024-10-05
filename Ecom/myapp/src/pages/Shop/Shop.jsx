import React from 'react'
import './Shop.css'


const Shop = () => {
  return (
    <div className='Shop'>
      <div className="Shop-containar">
        <h1>Sign Up</h1>
        <div className="login-form">
          <input type='text' placeholder='Enter Your Name'></input><br></br>
          <input type='text' placeholder='Enter Your Email Address'></input><br></br>
          <input type='text' placeholder='Enter your Password'></input>
        </div>
        <div className="login-continuebutton">
          <button>Continue</button>
          <div className="login-details">
            <h2>Already have an account ? <label style={{color:'red',cursor:'pointer'}}>Login</label> </h2>
          </div>
          <div className="login-private-police">
            <input style={{cursor:'pointer'}} type="radio"></input><label >I agree with your private policies</label>
          </div>
          
         
        </div>


      </div>
      
      

       
      
    </div>
  )
}

export default Shop
