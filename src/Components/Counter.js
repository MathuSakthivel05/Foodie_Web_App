import { useState } from "react";
const Counter = (props) => {
  const { foodname, setCartdata, cartdata } = props;
  // console.log(props.foodname)
  const total = cartdata[foodname] || 0;
  //const [cartdata, setCartdata] = useState({"briyani":1});

  const add = () => {
    setCartdata({
      ...cartdata,
      [foodname]: total + 1,
    });
  };
  const sub = () => {
    if(total == 1)
    {
      setCartdata({
        ...cartdata,
        [foodname]: undefined,
      });
    }
    else{
    setCartdata({
      ...cartdata,
      [foodname]: total - 1,
    });
  }
  };
  return (
    <div>
      <button onClick={add}>Add</button>
      {total}
      <button onClick={sub} disabled={total <= 0 ? true : false}>
        Subract
      </button>
    </div>
  );
};
export default Counter;
