import React from 'react'
import './ProductDisplay.css';
import start from '../../Assets/star_icon.png'

const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='ProductDisplay'>
      <div className="product-left-side">
        <div className="image-list">
          <img src={product.image} alt=''/>
           <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
             <img src={product.image} alt=''/>
        </div>
        <div className="product-display">
          <div className="product-display-main-image">
            <img src={product.image} alt=''/>

          </div>
          
        </div>

      </div>
      <div className="product-right-side">
        <h1>{product.name}</h1>
        <div className="product-details-review">
          <img src={start} alt=''/>
            <img src={start} alt=''/>
              <img src={start} alt=''/>
                <img src={start} alt=''/>
                  <img src={start} alt=''/>
           
        </div>
        <div className="product-price-list">
          <div className="price-gap">
             <div className="product-old-price">
              {product.old_price}$
            </div>
            <div className="produt-new-price">
              {product.new_price}$
            </div>
          </div>  
             <div className="product-details">
              {product.name}
            </div>
          

        </div>
        <div className="product-size">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>

        <div className="product-button">
          <button>Add To Card</button>
        </div>
        <div className="catories">
          <h1>Catories :{product.category} </h1>

        </div>
        <div className="product-tage">
          <h1>Tages Moden Latetst</h1>
        </div>
      </div>

        
      
    </div>
  )
}

export default ProductDisplay
