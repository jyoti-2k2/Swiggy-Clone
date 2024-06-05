import { useSelector } from "react-redux"
import CartItems from "./CartItems"
const Cart = ()=>{
   const cartItems = useSelector((store)=>store.cart.items)
  

    return(
        <div>
            <h1 className="text-2xl text-center font-bold mt-10 , p-5">Cart</h1>
            <CartItems mealsData={cartItems}  />
        </div>
        

    )
    
}
export default Cart