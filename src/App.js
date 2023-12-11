import { useState } from "react";
import "./App.css";
import Foodlist from "./Components/foodlist";
import Restaurantdetails from "./Components/restaurantDetails";
import Cart from "./Components/cart";
import { useReducer } from "react";

function App() {
  //const [cartdata,setCartdata] = useState({})
  function reducer(state, action) {
    switch (action.type) {
      case "inc": {
        const currentValue = state[action.value] || 0;
        return {
          ...state,
          [action.value]: currentValue + 1,
        };
      }
      case "dec": {
        const currentValue = state[action.value] || 0;
        if (currentValue === 1) {
          return {
            ...state,
            [action.value]: 0,
          };
        } else {
          return {
            ...state,
            [action.value]: currentValue - 1,
          };
        }
      }
    }
  }
  const [cartdata, dispatch] = useReducer(reducer, {});

  const add = (food) => {
    dispatch({ type: "inc", value: food });
  };
  const sub = (food) => {
    dispatch({ type: "dec", value: food });
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
      <Cart cartdata={cartdata}/>
      <Foodlist cartdata={cartdata} add={add} sub={sub} />
    </div>
  );
}

export default App;
