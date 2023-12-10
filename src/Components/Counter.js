const Counter = (props) => {
  const { foodname,cartdata,add,sub} = props;
  // console.log(props.foodname)
  const currentValue = cartdata[foodname] || 0;
  //const [cartdata, setCartdata] = useState({"briyani":1});

  // const add = () => {
  //   setCartdata({
  //     ...cartdata,
  //     [foodname]: total + 1,
  //   });
  // };
  function Addition() {
    return add(foodname)
  };
  const Subract = () => sub(foodname);
  //const Subract = () => add(foodname);


  
  return (
    <div>
      <button onClick={Addition}>+</button>
      {currentValue}
      <button onClick={Subract} disabled={currentValue <= 0 ? true : false}>
        -
      </button>
    </div>
  );
};
export default Counter;
