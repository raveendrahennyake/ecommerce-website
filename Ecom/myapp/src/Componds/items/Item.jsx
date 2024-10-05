import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}>
        <img src={props.image} alt='' />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-new-price">
         <p> {props.new_price}$</p>
        </div>
        <div className="item-old-price">
         <p> {props.old_price}$</p>
        </div>
        
      </div>
        
      
    </div>
  )
}

export default Item
