import {LOGO_URL} from "../utilities/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //console.log("Header renderend");
    useEffect( () => {
        //console.log("useEffect called");
    });
    return (
        <div className="flex justify-between border border-solid border-black rounded-md p-4 bg-green-100">
            <div className="Logo_Container">
                <img className="w-28" src= {LOGO_URL }/>
            </div>
            <div className="flex items-center">
                <ul className="flex  ">
                    <li className="p-2">onlineStatus: {onlineStatus ? "🟢  " : "🔴  "}</li>
                    <li className="p-2"><Link to= "#"> Offers </Link></li>
                    <li className="p-2"><Link to= "/"> Home </Link></li>
                    <li className="p-2"><Link to= "/about"> About Us </Link></li>
                    <li className="p-2"><Link to= "/contact"> Contat Us</Link></li>
                    <li className="p-2"><Link to= "#"> Sign in </Link></li>
                    <li className="p-2"><Link to= "/cart"> Cart </Link></li>
                    <li className="p-2"><Link to= "/grocery"> Grocery </Link></li>
                    <button className="border border-solid border-black px-4 rounded-md bg-lime-300" onClick={()=>{
                        btnNameReact ==="Login" ?setBtnNameReact("Logout") :setBtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
                
            </div>
        </div>

    );
};

export default Header;