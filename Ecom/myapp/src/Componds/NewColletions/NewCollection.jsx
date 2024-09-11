import React from 'react'
import './NewCollection.css';
import new_collections from '../../Assets/new_collections.js';
import Item from '../items/Item';

const NewCollection = () => {
  return (
    <div className='NewCollections'>
        <h>New Collections</h>
        <hr/>
    <div className="collctions-item">
        {new_collections.map((item,index)=>{
            return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}
              />
        })}
        

          
       

        



    </div>
  
      
    </div>
  )
}

export default NewCollection
