import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resid}= useParams();
    const resInfo = useRestaurantMenu(resid);
    if (resInfo === null ) 
        return <Shimmer />;
    
    const {name,totalRatingsString, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
    console.log(name);
    return (
        <div className="res_menu">
            <h1>{name}</h1>
            <div className="res_info">
                <div className="rating">
                <h3>{avgRating}</h3>
                <h3>({totalRatingsString})</h3>
                <h4> {costForTwoMessage}</h4>
                </div>
                <div className="cuisines">
                <h3>{cuisines.join(", ")}</h3>
                </div>
            </div>
            <h3 style={{textAlign:"center"}}> Menu </h3>
            <div className="menu_items">
                <h4 >
                    <ul>
                        {itemCards.map((item) => 
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"  Rs "}
                            {item.card.info.price || item.card.info.defaultPrice/100 }
                        </li>)}
                    </ul>
                </h4>   
            </div>
        </div>
    );
};
export default RestaurantMenu;