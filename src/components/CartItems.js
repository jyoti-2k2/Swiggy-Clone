import { useDispatch } from "react-redux"

import {clearItems } from "../utils/cartSlice";

const CartItems = ({mealsData }) => {  
   
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearItems());

    }
 
   
    return (
        
        <div className="meals text-center items-center ">
            <button className="p-2  rounded-lg bg-black color text-white text-2xl " onClick={handleClearCart}>clear cart</button>
        {mealsData.map(item=>(
            <div className="border-dotted border-gray-300 border-b-2 flex justify-between  w-6/12 ">
              <div className="meals-info text-2  w-11/12 flex justify-between items-center ">
               
                <p className=" text-lg">{item.card.info.name}</p>
                
                <p><i className="fa-sharp fa-solid fa-indian-rupee-sign pb-4"></i>{(item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</p>


                
            </div>
                 
            </div> 
            
        ))}
           
        </div>
    )

}
export default CartItems
