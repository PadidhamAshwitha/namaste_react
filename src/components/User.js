import {useEffect, useState} from "react";
const User = (props) =>{
    const [count,setCount] = useState(0);
    const [count2] = useState(1);
    useEffect(()=>{
        console.log("useEffect called");
        const timer = setInterval(() => {
            //console.log("set Interval functional")
        }, 1000);
        return (()=>{
            clearInterval(timer);
        })
    });
    return (
        <div className="user_card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h2>name: {props.name}</h2>
            <h3>location: {props.location}</h3>
            <h3>contact: ashwithapadidham17</h3>
        </div>
    );
};

export default User;