import Resturentcard from "./Resturentcard";
import resList from "../utils/Mokedata";
import { useState } from "react";

const Body =()=>{
   const [listOfres, setlistOfres]=useState(resList)
   return (    
    <div className="body">
        <div className="filter">
             <button className="filter-btn"
               onClick={()=>{
                const filteredlist=listOfres.filter(
                   (res)=>res.data.avgRating >4.2
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