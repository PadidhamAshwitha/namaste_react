import UserContext from "../utilities/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("parent constructor called");
    };

    componentDidMount(){
        //console.log("parent component did mount");
    };
    render(){
        //console.log("parent render called");
        return(
            <div>
                <h1>About Us</h1>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h2>We are from ashwitha solutions about page</h2>
                <UserClass name={"First "} location={"Hyderabad (class)"}/>
                {/* <User/> */}
            </div> 
        );
    };
};


export default About;