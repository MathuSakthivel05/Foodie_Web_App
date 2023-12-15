export default function Cart(props){
    const cartdata ={}
   //const {cartdata} = props ;
   let cartTotal = Object.values(cartdata) ; 
    return (
        <header>
            <h1>Love to Eat</h1>
            <h2>cart:{cartTotal.reduce( (accumulator, currentValue) => accumulator + currentValue,0)}</h2>
            {/* <p>{JSON.stringify(cartdata)}</p> */}
        </header>
       
    )
} 