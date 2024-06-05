import { useDispatch } from "react-redux";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const MealsInfo = ({mealsData , dummy}) => {  
    
   
    
    const dispatch = useDispatch();
    const addItemsInCart = (item)=>{
        console.log(item)
        //dispath an action callled addItem from the cartSlice 
        dispatch(addItem(item));

    }
   
    return (
        
        <div className="meals">
        {mealsData.map(item=>(
            <div className="border-gray-300 border-b-2 flex justify-between">
              <div className="meals-info text-2  w-11/12">
               
                <p className=" text-lg">{item.card.info.name}</p>
                
                <p><i className="fa-sharp fa-solid fa-indian-rupee-sign pb-4"></i>{(item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</p>


                <p className="description text-sm text-gray-500">{item.card.info.description?item.card.info.description:""}</p>
            </div>
            <div className="meals-image py-4  w-2/12 ">
            
                <img className="menu-item-image w-28 h-28 rounded-lg  overflow-auto " src={MENU_ITEM_IMAGE+item.card.info.imageId} />
                
               <button className="text-lime-500 shadow-lg px-6 py-2 rounded-lg" onClick={()=>addItemsInCart(item)}>Add +</button>
                
            </div> 
            </div>
        ))}
           
        </div>
    )

}

export default MealsInfo