import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userInfo : {
                name : "UserName",
                location : "Choose your Location here",
            },
        };
        console.log(this.props.name +"child constructor called");
    };
    
    async componentDidMount(){
        console.log(this.props.name + "child component did mount called");
        const data = await fetch("https://api.github.com/users/PadidhamAshwitha");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        });

        this.timer = setInterval( () => {
            //console.log("Set interval ");
        },1000);
    };

    componentDidUpdate(prevProps, prevState){
        console.log("component did update");
        if(this.state.count !== prevState.count ){
            console.log(this.state.count);
        }
    };
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    };
    render(){
        const {name, location} = this?.state?.userInfo;
        console.log(name +"child render called");
        return (
            <div className="user_card">
                <button onClick={
                () =>{
                    this.setState(
                        {
                            count : this.state.count +1,
                        }
                    );
                }}>Increment count</button>
                <h2>name: {name}</h2>
                <h3>location: {location}</h3>
                <h3>contact: ashwithapadidham17</h3>
            </div>
        );
    };
};

export default UserClass;