import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {

  const [cart, setCart] = useState([]);
  //* const deme sebebimiz değişmemesi

  const emptyCart = () => {
    setCart([])
  }

  return (
    <div className="container mx-auto p-4"> 
    {/* x - y eksenine göre px , py */}
      <Header cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;