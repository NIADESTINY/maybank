import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Routes =({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {

  
  return (
    <div>
      <Switch>
         <Route path="/" exact>
          <Product productItems={productItems} handleAddProduct={handleAddProduct}/>
        </Route>
        <Route path="/cart" exact>
          <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
        </Route>
      </Switch>
       
      

    </div>
  )
}
export default Routes
