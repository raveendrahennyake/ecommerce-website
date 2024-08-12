import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrwo from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (

    <div className='Hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <div className="hans-icons">
              <p>NEW</p>
            <img src={hand_icon}alt=''/>
            </div>
            <div className='icon-header'>
               <p>Collections</p>
             <p>For Everyone</p>
            </div>
          </div>
          <div className="button-icon">
            <p>Latest Collections</p>
            <img src={arrwo}alt=''/>

          </div>
        </div>

      </div>
      <div className="hero-right">
        <img src={hero_image}alt=''/>



      </div>

      



    </div>
  )
}

export default Hero
