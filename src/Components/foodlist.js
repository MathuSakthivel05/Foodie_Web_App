import Fooditem from "./foodItems";

const menuData = [
  {
    name: "biriyani",
    ratings: "4.2",
    pricing: 20000,
    isOver: true,
    id:"m001"
  },
  {
    name: "Dosa",
    ratings: "5",
    pricing: 5000,
    id:"m002"
  },
  {
    name: "paneer butter masala",
    ratings: "1",
    pricing: 15000,
    id:"m003"
  },
  {
    name: "vada",
    ratings: "3",
    pricing: 1500,
    id:"m004"
  },
];

export default function Foodlist(props) {
  const {cartdata,add,sub,foodname,ratings,pricing}= props;

  return (
    <div className="food-list">
      {menuData.map((menu) => {
        return (
          <Fooditem
            cartdata = {cartdata}
            add ={add}
            sub={sub}
            foodname={foodname}
            rating={ratings}
            pricing={pricing / 100}
          />
        );
      })}
    </div>
  );
}
