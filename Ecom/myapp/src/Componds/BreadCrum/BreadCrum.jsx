import React from 'react'
import './BreadCrum.css'
import arraw from '../../Assets/breadcrum_arrow.png';

const BreadCrum = (props) => {
    const {product}=props;
   
    
  return (
    <div className='BreadCrum'>
        
         Home <img src={arraw} alt='' /> SHOP <img src={arraw} alt='' /> {product?.category || 'Category'} <img src={arraw} alt='' />
      
    </div>
  )
}

export default BreadCrum
