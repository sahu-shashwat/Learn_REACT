
import React, { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
import Header  from "./components/Headet";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { useState,useEffect } from 'react';
import UserContext from './utils/Usercontxt';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const Grocery = lazy(() => import('./components/Grocery'));
import Cart from './components/Cart';

const Applayout =()=>{

    const [userName,setUsername]= useState()
    const [userNumber,setUsernumber]= useState()

    useEffect(()=>{
        const data={
          name:'shashwat Sahu',
        }
        const data2={
          num:'7077998'
        }
        setUsername(data.name)
        setUsernumber(data2.num)
    },[])
   
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedinUser:userName,setUsername , UserNumber:userNumber,setUsernumber}} >
        <div className="app">
          <UserContext.Provider value={{loggedinUser:'Malaya Pradhni', UserNumber:'32444'}}>
            <Header/>
          </UserContext.Provider>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
     path:'/Cart',
     element:<Cart/>
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


