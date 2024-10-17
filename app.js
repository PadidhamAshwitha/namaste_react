const heading = React.createElement("h1", {id : "heading"}, "Hello World from react!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);     //object

    // const heading = document.createElement("h1") ;
    // heading.innerHTML = "Hello World !! from Java Script" ;

    // const root = document.getElementById("root");
    // root.appendChild(heading);
    
//creating nested elements using react
const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div",{id : "child"}, 
        [
            React.createElement("h1", {},"This is a h1 heading in child"),
            React.createElement("h2", {}, "this is a h2 heading in child")
        ]
    ),
    React.createElement("div",{id : "child2"}, 
        [
            React.createElement("h1", {},"This is a h1 heading in child"),
            React.createElement("h2", {}, "this is a h2 heading in child")
        ]
    )
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
console.log(parent);