import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import { useContext, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utilities/useListOfRestaurants";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";

const Body = () =>{
//Local state variable...
//const [ updateRestaurants, setUpdateRestaurants ] = useState([]);
//   console.log(listOfRestaurents);
const {loggedInUser, setUserName} = useContext(UserContext);
const [searchText, setSearchText] = useState("");
const [listOfRestaurants,filteredRestros,setFilteredRestros] = useListOfRestaurants();
const onlineStatus = useOnlineStatus();
const RestaurantPromoted = withLabelPromoted ( RestaurantCard );
console.log("body rendered",listOfRestaurants);
if (onlineStatus === false) 
    return (<h1>your network seems to be Offline!! Please check your internet Connection!!!</h1>);

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="px-16 bg-orange-100">
            <div className="flex p-2 mx-4 items-center">
                <div className="search_container">
                    <input type="text" placeholder="Search here" className="border border-solid border-black rounded-md px-2" value={searchText} 
                        onChange={
                            (e)=>{
                                setSearchText(e.target.value);
                                console.log(e);
                            }
                                }
                    /> 
                    <button className="mx-2 px-4 border border-solid border-black rounded-md bg-orange-300" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestros(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="mx-2 px-4 border border-solid border-black rounded-md  bg-orange-300" 
                onClick={() =>{
                    const filteredlist = listOfRestaurants.filter((res) => res.info.avgRating>4.2);
                    //const filterUpdate = updateRestaurants.filter((res) => res.info.avgRating>4.2);
                    setFilteredRestros(filteredlist);
                   // setUpdateRestaurants(filterUpdate);
                    // console.log(filteredlist);
                }}>
                    Top Rated restaurants
                </button>
                    <p className="font-bold">Username:</p>
                <div className="m-2 border border-black">
                    <input className="px-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestros.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {restaurant.info.aggregatedDiscountInfoV3?.header&& restaurant.info.aggregatedDiscountInfoV3?.subHeader ? <RestaurantPromoted resData={restaurant} /> : <RestaurantCard className="shadow shdow-black"  resData={restaurant}/> }
                            </Link>
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