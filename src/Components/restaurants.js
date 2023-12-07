import "./restaurant.css"
export default function Foodrestaurant(props){
    
    return(
        <div className="restau-module">
            <div>
                <p>{props.restaurantname}</p>
                <span>{props.ratings}</span>
                <br />
                <span>{props.deliveryTime}</span>
                <p>
                    {props.isClosed &&(
                        "Closed at the moment"
                    )}
                </p>
            </div>
        </div>
    )
}
