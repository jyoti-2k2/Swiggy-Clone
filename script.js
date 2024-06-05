import React, { lazy, Suspense, useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";




const AppLayout = () => {
    const [userName, setUserName] = useState(null)
    useEffect(() => {
        const data = {
            name: "jyoti kumari"
        }


        setUserName(data.name)

    }, [])
    return (

        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
            </Provider>
        
    )



}
const Grocery = lazy(() => {
    return (
        import("./src/components/Grocery")
    )

})


const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <AboutUs />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                },
                {
                    path: "/grocery",
                    element: <Suspense placeholder={<h1>Loading....</h1>}><Grocery /></Suspense>
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu />
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }




            ]

        },


    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
