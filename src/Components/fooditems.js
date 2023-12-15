import Counter from "./Counter";
import "./fooditem.css";

export default function FoodItem(props) {
 const {foodname,ratings,pricing} = props;

  return (
    
    <div className="food-item">
      <p>{foodname}</p>
      <span>Rating: {ratings}</span>
      <br />
      <span>Price: {pricing}</span>
      {!props.isOver && (
        <p>
          <Counter
            foodname={foodname}
            
          />
        </p>
      )}
    </div>
  );
}