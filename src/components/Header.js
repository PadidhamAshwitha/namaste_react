import {LOGO_URL} from "../utilities/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import MyContext from "../utilities/MyContext";

const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    useEffect( () => {
        //console.log("useEffect called");
    });
    return (
        <div className="flex justify-between border border-solid border-black rounded-md p-4 bg-orange-300">
            <div className="Logo_Container">
                <img className="w-28" src= {LOGO_URL }/>
            </div>
            <div className="flex items-center">
                <ul className="flex  ">
                    <li className="px-2 border border-black m-2 rounded-md">onlineStatus: {onlineStatus ? "🟢  " : "🔴  "}</li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "#"> Offers </Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "/"> Home </Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "/about"> About Us </Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "/contact"> Contat Us</Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "#"> Sign in </Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "/cart"> Cart </Link></li>
                    <li className="px-2 border border-black m-2 rounded-md"><Link to= "/grocery"> Grocery </Link></li>
                    <button className="border border-solid border-black px-4 rounded-md bg-orange-400" onClick={()=>{
                        btnNameReact ==="Login" ?setBtnNameReact("Logout") :setBtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                    <li className="p-2 font-bold"> {loggedInUser} </li>
                </ul>
                
            </div>
        </div>

    );
};

export default Header;