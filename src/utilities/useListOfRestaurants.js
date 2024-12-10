import { useState,useEffect } from "react";
import { RES_LIST_URL } from "./constants";

const useListOfRestaurants = () =>{

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [ filteredRestros, setFilteredRestros] = useState([]);

    useEffect(() =>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const data = await fetch(RES_LIST_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestros(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [listOfRestaurants,filteredRestros,setFilteredRestros];
};

export default useListOfRestaurants;