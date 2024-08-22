import React from 'react'
import './Popular.css'
import data_product from '../../Assets/data'
import Item from '../items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr/>
        <div className="popular-item">
           {data_product.map((items,i)=>{
            return<Item key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price}/>

           })}


        </div>
       
      
    </div>
  )
}

export default Popular
