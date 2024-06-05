import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_ITEM_IMAGE } from "../utils/constants";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import MealsInfo from "./MealsInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);   //customhooke
    
    const [showIndex,setShowIndex] = useState(null)
    const dummy = "dummy Data"

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>
            sorry! you're offline.Please check you're internet connection
        </h1>)
    }

    if (resInfo == null) {
        return <Shimmer />
    }

    // const  {itemCards} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


    const categories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
        return (c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    }
    )
    
    


    return (
        <div className="about-menu flex justify-center items-center  mx-64"   >
            <div className="menu w-full  ">
                <div className="res-info mb-8 ">
                    <div className="about-res  ">
                        <p className="font-bold text-lg pt-12">{resInfo?.data?.cards[0]?.card?.card?.text}</p>
                        <p>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines}</p>
                        <p>{resInfo?.data?.cards[2]?.card?.card?.info?.city} </p>
                    </div>

                    <div className="rating-info">
                        <i className="fa-solid fa-star">{resInfo?.data?.cards[2]?.card?.card?.info?.avgRating}</i>
                    </div>
                </div>
              
                
                {categories.map((category,index)=>{
                    return(
                    <RestaurantCategory 
                    key={category.card.card.title} 
                    data={category.card.card} 
        
                    showItems={index === showIndex ?true:false}
                    setShowIndex={()=>setShowIndex(index)}
                    dummy = {dummy}

                      />)
                    
                    })}
                    
            </div>
        </div >
    )
}
export default RestaurantMenu;