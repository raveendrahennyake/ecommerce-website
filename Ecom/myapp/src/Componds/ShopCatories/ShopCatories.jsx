import React, { useContext } from 'react'
import './ShopCatories.css';

import all_product from '../../Assets/all_product';
import { StoreCollection } from '../../MainPage/MainCollections';

const ShopCatories = (props) => {
   const {all_product}=useContext(StoreCollection);


  return (
    <div className='shop=catories'>
      <img src={props.banner}/>
    

    
        
      
    </div>
  )
}

export default ShopCatories

