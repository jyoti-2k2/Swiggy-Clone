import { useContext } from "react";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const ResturantCard =(props)=>{
    const {loggedInUser } = useContext(UserContext)
    const {resData} = props;
    console.log(resData)
    
    const {cloudinaryImageId,name,avgRating,costForTwo,cuisines,} = resData?.info
    
return(
    <div className="resturant-card w-72 m-8 p-6 cursor-pointer hover:shadow-xl hover:w-80 rounded-xl ">
        <img className="res-logo rounded-lg  "   src={ RES_URL+cloudinaryImageId}></img>
        <p className="font-bold text-lg mb-2">{name}</p>
        <p id="cuisines ">{cuisines.join(",")}</p>
        <p id="rating"><i className="fa-solid fa-star"></i> {avgRating}</p>
        <p id="price">{costForTwo}</p>
        <p id="del-time">{resData.info.sla.deliveryTime}mins</p>
        <p>{loggedInUser}</p>
        
       
    </div>
)
}
export default ResturantCard;