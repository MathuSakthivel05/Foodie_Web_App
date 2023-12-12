const Counter = (props) => {
  const { foodname, cartdata, add, sub } = props;
  // console.log(props.foodname)
  const currentValue = cartdata[foodname] || 0;
  //const [cartdata, setCartdata] = useState({"briyani":1});

  // const add = () => {
  //   setCartdata({
  //     ...cartdata,
  //     [foodname]: total + 1,
  //   });
  // };

  const Addition = () => add(foodname);
  const Subract = () => sub(foodname);

  return (
    <div>
      {currentValue === 0 ? (
        <button onClick={Addition}>Add</button>
      ) : (
        <div>
          <button onClick={Addition}>+</button>
          <span>{currentValue}</span>
          <button onClick={Subract} disabled={currentValue <= 0 ? true : false}>
            -
          </button>
        </div>
      )}
    </div>
  );
};
export default Counter;
