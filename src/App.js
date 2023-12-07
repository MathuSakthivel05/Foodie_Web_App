import { useState } from 'react';
import './App.css';
import Foodlist from './Components/foodlist';
import Restaurantdetails from './Components/restaurantDetails';
import Cart from './Components/cart';

function App() {
  const [cartdata,setCartdata] = useState({})

  return (
    <div className="App">
  
       <Restaurantdetails/>
      <Cart cartdata ={cartdata}/>
      <Foodlist cartdata={cartdata} setCartdata={setCartdata}/>
      
    </div>

  );
}

export default App;
