import { useDispatch, useSelector } from "react-redux";
import {add,sub} from "../Store/cartReducer"

const Counter = (props) => {
  const { foodname} = props;
  // console.log(props.foodname)
  
  //const [cartdata, setCartdata] = useState({"briyani":1});

  // const add = () => {
  //   setCartdata({
  //     ...cartdata,
  //     [foodname]: total + 1,
  //   });
  // };
  const dispatch = useDispatch();


  const store =useSelector((all)=>all);
  console.log(store)
  const cartData = store.cart ;
  const currentValue = cartData[foodname] || 0;
  const addWithFoodName = (foodname) => dispatch(add(foodname));
  const subWithFoodName = (foodname) => dispatch(sub(foodname));

  // function Addition() {
  //   return add(foodname)
  // };
  // const Subract = () => sub(foodname);
  // //const Subract = () => add(foodname);


  
  return (
    <div>
      {currentValue === 0 ? (<button onClick={(e)=>addWithFoodName(foodname)}>Add</button>):(
      <div>  
      <button onClick={(e)=>addWithFoodName(foodname)}>+</button>
      <span>{currentValue}</span>
      <button onClick={(e)=>subWithFoodName(foodname)} disabled={currentValue <= 0 ? true : false}>
        -
      </button>
      </div>
      )}
    </div>
  );
};
export default Counter;