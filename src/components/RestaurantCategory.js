
import { useState } from "react";
import ItemMenuList from "./ItemMenuList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
//console.log();
    const handleClick = () =>{
         setShowIndex();
         console.log(setShowIndex);
        //setShowitems(!showItems);
       // showItems == false ? setShowItems(true) : setShowItems(false);
    }
    return (
    <div className="w-full m-4 p-2 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-extrabold ">{data.title} ({data.itemCards.length}) </span>
        <span >⬇️</span>
        </div>
        { showItems && <ItemMenuList items = {data.itemCards} />}
    </div>
    
)}

export default RestaurantCategory;