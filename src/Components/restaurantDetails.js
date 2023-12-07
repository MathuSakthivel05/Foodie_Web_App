import Foodrestaurant from "./restaurants"
const restaurantData = [
    {
      name: "Andra Gunpowder",
      ratings: "4.4",
      deliveryTime: "20 mins",
    },
    {
        name: "Nandhana Place",
        ratings: "3.4",
        deliveryTime: "36 mins",
    },
    {
        name: "Kannur Food Point",
        ratings: "4.4",
        deliveryTime: "20 mins",
        isClosed: true,
    },
    {
        name: "Bakingo",
        ratings: "4.8",
        deliveryTime: "30 mins",
    },
  ];

  export default function Restaurantdetails(){
    return(
        <div className="restaurant-list">
      {restaurantData.map((data) => {
        return (
          <Foodrestaurant
          restaurantname={data.name}
          ratings={data.ratings}
          deliveryTime={data.deliveryTime}
            isClosed={data.isClosed}
          />
        );
      })}
    </div>
    )
  }