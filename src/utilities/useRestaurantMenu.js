import {useEffect, useState } from "react";
import {MENU_URL } from "../utilities/constants";

const useRestaurantMenu = (resid) =>{
const [resInfo,setResInfo ] = useState(null);
    
    useEffect(() =>{
        fetchMenu();
        
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();
        setResInfo(json.data);
        //console.log(json.data);
    }
    //console.log(resInfo);
    return resInfo;
};

export default useRestaurantMenu;