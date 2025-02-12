import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {resid}= useParams();
    const resInfo = useRestaurantMenu(resid);
    const [showIndex, setShowIndex] = useState(null);
    if (resInfo === null ) 
        return <Shimmer />;
    const {name,totalRatingsString, avgRating, costForTwoMessage, cuisines, areaName, sla } = resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(categories);
   // console.log(index);

    return (
        <div className="px-56 bg-orange-100">
            <h1 className="py-2 font-extrabold ">{name}</h1>
            <div className="p-4 border border-solid rounded-md shadow-xl shadow-gray-500">
                <div className="font-bold flex ">
                <h3 className="px-2">{avgRating}</h3>
                <h3 className="px-2">({totalRatingsString})</h3>
                <h4 className="px-2"> {costForTwoMessage}</h4>
                </div>
                <div className="px-2">
                <h3 className=" text-red-500 font-semibold underline decoration-red-500">{cuisines.join(", ")}</h3>
                <h1 className="font-bold flex ">Outlet <p className="pl-2 font-normal">{areaName}</p></h1>
                <h1 className="font-bold ">{sla.slaString}</h1>
                </div>
            </div>
            <h3 className="py-6 text-center font-semibold"> ««« Menu »»» </h3>
            {/* we need accordion header and body here */
            categories.map((category, index) => (
            <RestaurantCategory
             key={ category.card.card.categoryId} 
             data = { category?.card?.card }
             showItems = {index == showIndex && true}
             setShowIndex = {() =>setShowIndex(index)}
             />
        ))
            }
        </div>
    );
};
export default RestaurantMenu;