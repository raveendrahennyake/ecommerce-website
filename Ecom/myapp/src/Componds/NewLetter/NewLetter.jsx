import React from 'react'
import './NewLetter.css';
import logo from '../../Assets/logo.png'
import instagram from '../../Assets/instagram_icon.png'
import whatsapp from '../../Assets/whatsapp_icon.png'
import pinterest from '../../Assets/pintester_icon.png'

const NewLetter = () => {
  return (
    <div className='NewLetter'>
        <h1>Get Exclusive Offers your in email </h1>
        <p>subscribe to ournews Letter and stay update </p>

        <div className="email_details">
            <input type='text' placeholder='Enter your Email'></input>
            <button>Subscribe</button>
        </div>
        <div className="image-package">
            <img src={logo}/>
            <h1>Shopper</h1>
        </div>
        <div className="footer">
            <ul>
                <li>Companey</li>
                 <li>Products</li>
                 <li>Office</li>
                <li>About</li>
                 <li>Contact</li>
            </ul>

        </div>
        <div className="Social-media">
            <img  id='instagram' src={instagram}/>
             <img id='whatsapp' src={whatsapp}/>
              <img id='pinterest' src={pinterest}/>

        </div>



       
      
    </div> 
  )
}

export default NewLetter
