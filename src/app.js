import React, { lazy, Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utilities/UserContext";
import MyContext from "./utilities/MyContext";
import { CartProvider } from "./utilities/CartContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() =>import("./components/About"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect ( () => {
        //Make an API call and send the username and password
        const data = {
            name : "Ashwitha Padidham",
        }
        setUserName(data.name);
    },[])
    return (
        <CartProvider>
        <UserContext.Provider value = {{loggedInUser: userName, setUserName }} >
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </CartProvider>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body /> ,
            },
            {
                path : "/about",
                element : <About/>  
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>loading......</h1>}><Grocery /></Suspense>,
            },
            {
                path : "/restaurants/:resid",
                element : <RestaurantMenu />
            },
        ],
        errorElement : <Error/>
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);