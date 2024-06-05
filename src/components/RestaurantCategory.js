import { useState } from "react"
import MealsInfo from "./MealsInfo"


const RestaurantCategory = ({ data ,showItems , setShowIndex , dummy}) => {
    // const [showItems, setShowItems] = useState(false)
    const [chevron, setChevron] = useState(false)
    const handleClick = () => {
        return (
            
            setShowIndex()
            // setChevron(!chevron)
            
        )
    }
   
    return (
        <div>
            <div className="shadow-lg" >
                <div className="flex justify-between p-4  ">

                    <div className="w-full font-bold text-2xl " onClick={handleClick}>{data.title} ({data.itemCards.length})</div>


                    <div>
                        {chevron ?<i className="fa-sharp fa-solid fa-chevron-down"></i>:<i className="fa-solid fa-chevron-up"></i>}
                    </div>
                </div>
                <div className="menu-info">
                    <div className="menu-info-card">
                       

                        {showItems && <MealsInfo mealsData={data.itemCards} key={data.itemCards.id} dummy={dummy} />}

                    </div>

                </div>
            </div>


        </div>

    )
}
export default RestaurantCategory