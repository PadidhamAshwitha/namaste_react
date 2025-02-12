import { useContext } from "react";
import {RES_IMG_URL} from "../utilities/constants";
import UserContext from "../utilities/UserContext";

const RestaurantCard = (props) =>{
    const {resData}= props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo}=resData?.info;
    const {loggedInUser} = useContext(UserContext);
        return (
            <div className="w-[300px] border shadow rounded-md p-4 m-4 hover:shadow-xl hover:border border-solid" >
                <img className=" rounded-md h-[200px]"src = { RES_IMG_URL + cloudinaryImageId }/>
                <div>
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4 >{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{slaString}</h4> 
                <h4>{costForTwo}</h4> 
                <h4>{loggedInUser}</h4> 
                </div>
            </div>
        );
    };

export const withLabelPromoted = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute p-2 m-4 text-white bg-orange-600 rounded-full ">{props.resData.info.aggregatedDiscountInfoV3.header + props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;