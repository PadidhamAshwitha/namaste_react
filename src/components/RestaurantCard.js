import {RES_IMG_URL} from "../utilities/constants";

const RestaurantCard = (props) =>{
    const {resData}= props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo}=resData?.info;
        return (
            <div className="w-[200px] h-[350px] rounded-md p-4 m-4" style={{backgroundColor: "#f0f0f0"}}>
                <img className="rounded-md"src = { RES_IMG_URL + cloudinaryImageId }/>
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{slaString}</h4> 
                <h4>{costForTwo}</h4> 
            </div>
        );
    };

export default RestaurantCard;