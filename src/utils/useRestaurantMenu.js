import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resid)=>{
const[resinfo,setresinfo]=useState(null)

useEffect (()=>{
   fetchData()
},[])
  const fetchData =async()=>{
    const data =await fetch(MENU_API+resid)
    const json= await data.json()
    setresinfo(json.data)
  }
return resinfo
}

export default useRestaurantMenu