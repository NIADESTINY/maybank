import React from 'react';
import "./Product.css";



const Product = ({productItems,handleAddProduct}) => {
    console.log(productItems,'keluar tak ni??')
    return (
    <div className='products'>
      {productItems?.map((x) => (
        
        <div className='card'>
            <div>
               <img className='product-image' src={x?.image} alt={x?.name}/> 
            </div>
            <div>
              <h3 className='product-name'>
                {x?.name}
              </h3>
            </div>
            <div className='product-price'>
             {"RM" + " " + x?.price}
            </div>
            <div>
              <button className='product-add-button' onClick={ () =>handleAddProduct(x)}>Add to Cart</button>
            </div>
        </div>

))}
    </div>
  );
};

export default Product
