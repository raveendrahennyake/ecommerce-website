import React, { useContext } from 'react'
import './ShopCatories.css';
import dropdown from '../../Assets/dropdown_icon.png';
import { StoreCollection } from '../../MainPage/MainCollections';
import Item from '../items/Item'; 
const ShopCatories = (props) => {
   const {all_product}=useContext(StoreCollection);


  return (
    <div className='shop=catories'>
      <img src={props.banner}/>
      <div className="shop-catories-indexSort">
        <p>Showing to 1-12</p>
        <div className="shop-catories-sort">
          <img src={dropdown}/>
        </div>
        <div className="shop-catories-products">
          {/* {all_product.map((items,index)=>{
            if(props.category===items.category){
              return <Item key={index} id={items.id} image={items.image} new_price={items.new_price} old_price={items.old_price}/>

            }else {
              return null;

            }

          })} */}
          

        </div>

      </div>
    

    
        
      
    </div>
  )
}

export default ShopCatories

