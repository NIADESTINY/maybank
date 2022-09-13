import React,{useState} from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/front/Routes/Routes";
import Product from "./components/front/Product/Product";

const App =() => {

  const{productItems} = data;
  const [cartItems,setCartItems] = useState([])
  const handleAddProduct= (product) => {
    const ProductExist = cartItems.find((z)=> z.id === product.id);
    console.log(ProductExist,'who are you')
    if(ProductExist){
      console.log("masuk sini")
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...ProductExist,quantity: ProductExist.quantity + 1}: x));
      console.log(ProductExist.quatity,'brp')
      console.log(cartItems,'inna idhu')

    }else{
      setCartItems([...cartItems,{...product, quantity: 1}])
    }
  }
  const handleRemoveProduct= (product) => {
    const ProductExist = cartItems.find((z)=> z.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id ));
    }else{
      setCartItems(cartItems.map((x)=> x.id === product.id ? {...ProductExist,quantity: ProductExist.quantity - 1}: x));
    }
  }

  
  return (
    <div>
      <Router>
    <Header />
    <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>


    </div>
  )
}
export default App