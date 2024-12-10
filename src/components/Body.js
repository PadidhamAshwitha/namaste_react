import RestaurantCard from "./RestaurantCard";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utilities/useListOfRestaurants";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () =>{
//Local state variable...
//const [ updateRestaurants, setUpdateRestaurants ] = useState([]);
//   console.log(listOfRestaurents);
const [searchText, setSearchText] = useState("");
const [listOfRestaurants,filteredRestros,setFilteredRestros] = useListOfRestaurants();
const onlineStatus = useOnlineStatus();
//console.log("body rendered");
if (onlineStatus === false) 
    return (<h1>your network seems to be Offline!! Please check your internet Connection!!!</h1>);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex p-2 m-2">
                <div className="search_container">
                    <input type="text" placeholder="Search here" className="border border-solid border-black rounded-md" value={searchText} 
                        onChange={
                            (e)=>{
                                setSearchText(e.target.value);
                                console.log(e);
                            }
                                }
                    /> 
                    <button className="mx-2 px-4 border border-solid border-black rounded-md bg-neutral-200" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestros(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="mx-2 px-4 border border-solid border-black rounded-md  bg-neutral-200" 
                onClick={() =>{
                    const filteredlist = listOfRestaurants.filter((res) => res.info.avgRating>4.2);
                    //const filterUpdate = updateRestaurants.filter((res) => res.info.avgRating>4.2);
                    setFilteredRestros(filteredlist);
                   // setUpdateRestaurants(filterUpdate);
                    // console.log(filteredlist);
                }}>
                    Top Rated restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestros.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
                    ))
                }
                {/* {
                    updateRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                } */}
            </div>
        </div>
    );
};
export default Body;