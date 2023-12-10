import { useState } from 'react';
import './App.css';
import Foodlist from './Components/foodlist';
import Restaurantdetails from './Components/restaurantDetails';
import Cart from './Components/cart';

function App() {
  const [cartdata,setCartdata] = useState({})

  const add = (food) => {
    const currentValue = cartdata[food] || 0;
    setCartdata({
      ...cartdata,
      
      [food]: currentValue + 1,
    });
  };
  const sub = (food) => {
    const currentValue = cartdata[food] || 0;

    if(currentValue == 1)
    {
      setCartdata({
        ...cartdata,
        [food]: undefined,
      });
    }
    else{
    setCartdata({
      ...cartdata,
      [food]: currentValue - 1,
    });
  }
  };

  return (
    <div className="App">
     
      <Cart cartdata ={cartdata}/>
      <Foodlist cartdata={cartdata} setCartdata={setCartdata} add ={add} sub={sub} />
      
    </div>

  );
}

export default App;
