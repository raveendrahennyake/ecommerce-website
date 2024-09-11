import React from 'react'
import './Offers.css';
import exclusuce_image from '../../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="left-side-offers">
            <h1>Exclusive</h1>
            <h1> Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>check now </button>

        </div>
        <div className="right-side-offers">
            <img src={exclusuce_image}alt=''/>


        </div>

        <h1></h1>
        
      
    </div>
  )
}

export default Offers
