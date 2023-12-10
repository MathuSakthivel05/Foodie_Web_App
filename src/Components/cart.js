export default function Cart(props){
   const {cartdata} = props ;
   let cartTotal = Object.values(cartdata) ; 
    return (
        <div>cart:{cartTotal.reduce( (accumulator, currentValue) => accumulator + currentValue,0)} </div>
        // {Object.values(cartdata)}{JSON.stringify(props.cartdata)}
    )
} 