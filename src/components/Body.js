import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {

    //superPowerfull local state variable
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants , setFilteredResturants] = useState([])
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => { fetchData() }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
       
        setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
    }
    
    if (listOfResturants.length === 0) {
        return (<Shimmer />)
    }

    return (
        <div className="body">

            <div className="filter flex ">
                <div className="search-box ">
                    <div className="">
                        <input className=" border-solid border-black  border-2 rounded-lg p-2 my-6 mx-6" type="text" placeholder="search for resturants and food "
                            value={searchText} onChange={(e) => {
                                setSearchText(e.target.value);
                            }} 
                            />
                      <button className="shadow-sm shadow-black px-6 py-1 rounded-lg   text-base "onClick={()=>{
                        const searchList = listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredResturants(searchList)
                        
                       
                      }}>search

                      </button>
                       
                    </div>
                </div>
                <div className="flex items-center" >
                <button className="ml-20 border-2 w-60 rounded-lg bg-slate-100 py-2   " onClick={() => {
                    debugger    
                    let filteredList = listOfResturants.filter(res =>
                        res.info.avgRating > 4
                    )
                    setListOfResturants(filteredList);
                }}
                >Top Rated Resturants</button>
                </div>
                

            </div>

            <div className="res-container flex flex-wrap">

                {filteredResturants.map(resturant => <Link to={"/restaurant/"+resturant.info.id}>
                    {/*  if (restaurant.info.promoted=>true)our promoted label is true show withPromotedLabel card otherwise show normal restaurant card */}
                    
                    <ResturantCard key={resturant.info.id} resData={resturant} /></Link>)}



            </div>
        </div>

    )
}
export default Body