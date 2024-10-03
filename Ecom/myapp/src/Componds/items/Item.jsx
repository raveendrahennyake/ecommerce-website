import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image}alt=''/>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-new-price">
         <p> {props.new_prices}$</p>
        </div>
        <div className="item-old-price">
         <p> {props.old_prices}$</p>
        </div>
        
      </div>
        
      
    </div>
  )
}

export default Item
