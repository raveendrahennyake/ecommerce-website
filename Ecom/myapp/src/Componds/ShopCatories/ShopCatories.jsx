import React, { useContext } from 'react';
import './ShopCatories.css';
import dropdown from '../../Assets/dropdown_icon.png';
import Item from '../items/Item.jsx'; 
import { MainCollections } from '../../MainPage/MainCollections.jsx';

const ShopCatories = (props) => {
 
  const { all_products } = useContext(MainCollections);
  
  
  if (!all_products) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='shop-catories'>
      <img src={props.banner} alt="Banner"/>
      <div className="shop-catories-indexSort">
        <p>Showing 1-12</p>
        <div className="shop-catories-sort">
          <img src={dropdown} alt="Sort dropdown"/>
        </div>
        <div className="shop-catories-products">
          {all_products.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item 
                  key={index} 
                  id={item.id} 
                  image={item.image}  
                  name={item.name} 
                  new_price={item.new_price} 
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCatories;
