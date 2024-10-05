import React from 'react'
import './BreadCrum.css'
import arraw from '../../Assets/breadcrum_arrow.png';

const BreadCrum = (props) => {
    const {product}=props;
   
    
  return (
    <div className='BreadCrum'>
        
         HOME <img src={arraw} alt='' /> SHOP <img src={arraw} alt='' /> {(product?.category?.toUpperCase() || 'CATEGORY')} <img src={arraw} alt='' />
         {product.name.toUpperCase()}
      
    </div>
  )
}

export default BreadCrum
