import React, { useContext } from 'react'
import './Product.css';
import { MainCollections } from '../MainPage/MainCollections.jsx';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Componds/BreadCrum/BreadCrum.jsx';
import ProductDisplay from '../Componds/ProductDisplay/ProductDisplay.jsx';

const Product = () => {
    const {all_product}=useContext(MainCollections)
    const {productId}=useParams();

    if (!all_product) {
    return <div>Loading products...</div>; 
  }

     const product = all_product.find((elements) =>
    elements.id === Number(productId)
  );

  return (
    <div className='product'>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
     
    
      
    </div>
  )
}

export default Product
