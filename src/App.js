import { useState } from "react";
import "./App.css";
import Foodlist from "./Components/foodlist";
import Restaurantdetails from "./Components/restaurantDetails";
import Cart from "./Components/cart";
import { useReducer } from "react";
import Reducer from "./Components/manageCart";

function App() {
  //const [cartdata,setCartdata] = useState({})
  
  const [cartdata, dispatch] = useReducer(Reducer, [{}]);


  const add = (foodname) => {
    dispatch({ type: "inc", value: foodname });
  };
  const sub = (foodname) => {
    dispatch({ type: "dec", value: foodname });
  };
  // const add = (food) => {
  //   const currentValue = cartdata[food] || 0;
  //   setCartdata({
  //     ...cartdata,

  //     [food]: currentValue + 1,
  //   });
  // };
  // const sub = (food) => {
  //   const currentValue = cartdata[food] || 0;

  //   if(currentValue == 1)
  //   {
  //     setCartdata({
  //       ...cartdata,
  //       [food]: 0,
  //     });
  //   }
  //   else{
  //   setCartdata({
  //     ...cartdata,
  //     [food]: currentValue - 1,
  //   });
  // }
  // };
  

  return (
    <div className="App">
      <Reducer/>
      <Cart cartdata={cartdata}/>
      <Foodlist cartdata={cartdata} add={add} sub={sub} 
      />
    </div>
  );
}

export default App;
