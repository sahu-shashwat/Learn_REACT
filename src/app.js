
import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import Header  from "./components/Headet";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const Grocery = lazy(() => import('./components/Grocery'));

const Applayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[
      {
       path: '/',
       element:<Body/>
      },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path: '/grocery',
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
      ),
    },
    { 
      path: '/restraurants/:resId',
      element:<RestMenu/>
    }
    ],
    errorElement:<Error/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)


