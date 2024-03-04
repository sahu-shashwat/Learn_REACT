import Resturentcard ,{WithPrometedLevel}from "./Resturentcard";
import resList from "../utils/Mokedata";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnliestatus";
import UserContext from "../utils/Usercontxt";

const Body =()=>{
   const [listOfres, setlistOfres]=useState([]);
   const reslist2=resList
   const [searchText,setsearchText]=useState('')
   const[filterResList,setfilterResList]=useState([])
   const RestaurantCardPrometed=WithPrometedLevel(Resturentcard)

   useEffect(()=>{
    fetchData();
   },[])  
   const fetchData = async() =>{
      // const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

      // const json= await data.json();
      // console.log(json)
      setfilterResList(reslist2)
      setlistOfres(reslist2)
   }; 
  

   // Conditonsal rendering
//   if (listOfres.length ===0){
//    return <Shimmer/>
//   }
   
   const onlineStatus=useOnlinestatus()   
   if (onlineStatus===false)
      return(
          <h1> looks like you are offline please check your Internet connecton</h1>
         )
  
   const {loggedinUser,setUsername}=useContext(UserContext)

   
   return listOfres.length ==0 ?(
      <Shimmer></Shimmer>
   ) : (    
    <div className="body">
        <div className="filter flex"> 
         <div className="m-3 p-2 items-center ">
             <button className="filter-btn bg-green-200 p-2 m-3 rounded-lg hover:bg-green-300"
               onClick={()=>{
                  const filteredlist=listOfres.filter(
                     (res)=>res.data.avgRating >4
                     );
                     setfilterResList(filteredlist);
                  }}
                  >Top Rated Restaurant</button>
             <button className="filter-btn bg-green-200 p-2 rounded-lg hover:bg-green-300"
              onClick={()=>{
                 const filteredlist2=listOfres.filter(
                    (reslt)=>reslt.data.costForTwo /100<300
                    );
                    setfilterResList(filteredlist2)
                  }}
                  >food under 300 rupies</button>
             <dev className='search mx-3'>
                <input type="text"
                 className="search-box p-1 border border-black" 
                 value={searchText}
                 onChange={(e)=>{
                    setsearchText(e.target.value)
                  }}
                  />
                  </dev>  
                <button className="m-2 p-2 bg-green-200 rounded-lg hover:bg-green-300"
                 onClick={()=>{
                    const filteredres=listOfres.filter(
                       (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
                       )
                       setfilterResList(filteredres)
                     }}
                     >
                  search
                  </button>
                  <label>Username:</label>
                  <input 
                  id="name"
                  className="border border-black p-2"
                  value={loggedinUser}
                  onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
        </div>
        <div className="res-container flex flex-wrap">
         {filterResList.map((rnt)=>(
         <Link
         style={{
            textDecoration: 'none',
            color: '#000',
          }}
          key={rnt.data.id} 
          to={'/restraurants/'+rnt.data.id}>
            
         {rnt.data.promoted ?(
           <RestaurantCardPrometed resdata={rnt}/>
         ):(
          <Resturentcard resdata={rnt}/>
         )}
         </Link>
         ))}
        </div>
    </div>
)}

export default Body