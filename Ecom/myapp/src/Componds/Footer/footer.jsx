import React from 'react'
import './Footer.css';
import logo from '../../Assets/logo.png'
import instagram from '../../Assets/instagram_icon.png'
import whatsapp from '../../Assets/whatsapp_icon.png'
import pinterest from '../../Assets/pintester_icon.png'


const footer = () => {
  return (

    <div className='footerpage'>
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
        <div className="copy-right">
            <hr/>
            <p>copyright @ 2023-All Right Reserverd</p>
        </div>
      
    </div>
  )
}

export default footer
