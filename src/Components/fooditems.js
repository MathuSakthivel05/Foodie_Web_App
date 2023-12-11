import Counter from "./Counter";
import "./fooditem.css";

export default function FoodItem(props) {
 const {cartdata,foodname,ratings,add,sub,pricing} = props;

  return (
    
    <div className="food-item">
      <p>{foodname}</p>
      <span>Rating: {ratings}</span>
      <br />
      <span>Price: {pricing}</span>
      {!props.isOver && (
        <p>
          <Counter
            cartdata={cartdata}
            foodname={foodname}
            add ={add}
            sub={sub}
          />
        </p>
      )}
    </div>
  );
}
