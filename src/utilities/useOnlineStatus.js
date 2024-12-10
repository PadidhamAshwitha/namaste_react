import { useEffect, useState } from "react";

const useOnlineStatus = () =>{
const [onlineStatus,setOnlineStatus] = useState(null);
    useEffect(() =>{
        //window.addEventListener( "offline" ,() => {"offline" ? setOnlineStatus (false) : setOnlineStatus(true)});
        window.addEventListener("offline", () =>{
            return setOnlineStatus(false);
        } );

        window.addEventListener("online", () =>{
            return setOnlineStatus(true);
        });
    }
,[]);
    return onlineStatus;
};

export default useOnlineStatus;