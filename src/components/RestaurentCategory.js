import ItemList from "./ItemList"
import { useState } from "react"
const RestaurantCategory=({data,ShowItems,setshowIndex})=>{
     const handleclick =()=>{
        setshowIndex()
     }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3">
               <div className="flex justify-between cursor-pointer"
                  onClick={handleclick}>
                   <span className="font-bold text-lg">
                   {data.title}({data.itemCards.length})
                   </span>
                   <span>⬇️</span>
               </div> 
              { ShowItems && <ItemList items={data.itemCards}/>}
          </div>
    </div>
    )
}
export default RestaurantCategory