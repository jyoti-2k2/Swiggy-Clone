import { LOGO_URL } from "../utils/constants"
import { useState , useContext } from "react";
import { Link }  from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    // let btnName = "login"
    const [btnName,setBtnName]=useState("login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)
   
    return (
   
        <div className="nav-bar shadow-lg">
            <div className="flex items-center justify-evenly text-2xl  ">
                <img className="h-28  " src={LOGO_URL}/>
                <div className="">
                    online Status: { onlineStatus?<i className="fa-sharp fa-solid fa-circle"></i>:<i className="fa-sharp fa-regular fa-circle"></i>

                    }
                </div>
                    
                <div className="nav-items  "><Link  to="/">Home</Link></div>
                <div className="nav-items  "><Link to="/about">About Us</Link> </div>
                <div className="nav-items  "><Link to="/contact">Contact Us</Link></div>
                <div className="nav-items  " ><Link to="/grocery">Grocery</Link></div>
                <div className="nav-items  ">
                <i className="fa-solid fa-cart-shopping"></i> <Link to="/cart">cart-({cartItems.length} items)</Link></div>
                <button className="login-btn  " onClick={()=>{
                   btnName==="login"? setBtnName("logout"):setBtnName("login")  }}>{btnName}
                </button>
                   <div>
                    {loggedInUser}
                   </div>
               
            </div>

        </div>


    )
  
}

export default Header