import Resturentcard from "./Resturentcard";
import resList from "../utils/Mokedata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body =()=>{
   const [listOfres, setlistOfres]=useState([]);
   const reslist2=resList

   useEffect(()=>{
    fetchData();
   },[])
   
   const fetchData = async() =>{
      const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      const json= await data.json();
      console.log(json)
         
      setlistOfres(reslist2)
   }; 
  

   // Conditonsal rendering
  if (listOfres.length ===0){
   return <Shimmer/>
  }

   return (    
    <div className="body">
        <div className="filter">
             <button className="filter-btn"
               onClick={()=>{
                const filteredlist=listOfres.filter(
                   (res)=>res.data.avgRating >4
                );
                setlistOfres(filteredlist);
               }}
             >Top Rated Restaurant</button>
             <button className="filter-btn"
              onClick={()=>{
                const filteredlist2=listOfres.filter(
                   (reslt)=>reslt.data.costForTwo /100<300
                );
                setlistOfres(filteredlist2)
              }}
             >food under 300 rupies</button>
        </div>
        <div className="res-container">
         {listOfres.map((rnt)=>(
            <Resturentcard key={rnt.data.id} resdata={rnt}/>
         ))}
        </div>
    </div>
)}

export default Body