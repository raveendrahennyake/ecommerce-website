import React from 'react'
import './NewLetter.css';

const NewLetter = () => {
  return (
    <div className='NewLetter'>
        <h1>Get Exclusive Offers your in email </h1>
        <p>subscribe to ournews Letter and stay update </p>

        <div className="email_details">
            <input type='text' placeholder='Enter your Email'></input>
            <button>Subscribe</button>
        </div>
    </div> 
  )
}

export default NewLetter
