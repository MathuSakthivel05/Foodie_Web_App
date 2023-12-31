import { useState } from "react";
import "./App.css";
import Foodlist from "./Components/foodlist";
import Restaurantdetails from "./Components/restaurantDetails";
import Cart from "./Components/cart";
import { useReducer } from "react";
import Reducer from "./Components/manageCart";
import { Provider } from "react-redux";
import Store from  "./Store";

function App() {
  //const [cartdata,setCartdata] = useState({})
  
  // const [cartdata, dispatch] = useReducer(Reducer, {});

  
  // const add = (food) => {
  //   dispatch({ type: "inc", value: food });
  // };
  // const sub = (food) => {
  //   dispatch({ type: "dec", value: food });
  // };
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
      <Provider store={Store}>
      <div>
      <Reducer/>
      <Cart />
      <Foodlist   />
      </div>
      </Provider>
    </div>
  );
}

export default App;