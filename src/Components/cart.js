export default function Cart(props){
   const {cartdata} = props ;
   let cartTotal = Object.values(cartdata) ; 
    return (
        <header>
            <h1>Love to Eat</h1>
            <h2>cart:{cartTotal.reduce( (accumulator, currentValue) => accumulator + currentValue,0)}</h2>
        </header>
        // {Object.values(cartdata)}{JSON.stringify(props.cartdata)}
    )
} 