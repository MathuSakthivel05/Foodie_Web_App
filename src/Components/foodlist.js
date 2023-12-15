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


menuData.find((menu) => menu.pricing)

  return (
    <div className="food-list">
      {menuData.map((menu) => {
        return (
          <Fooditem
            key={menu.id}
            foodname={menu.name}
            rating={menu.ratings}
            pricing={menu.pricing / 100}

          />
        );
      })}
    </div>
  );
}