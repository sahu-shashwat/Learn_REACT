import { CDN_URL } from "../utils/constants"
import { useContext } from "react"
import UserContext from "../utils/Usercontxt"
const Resturentcard = (props)=>{
    const {resdata}=props
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resdata?.data
    const {loggedinUser}=useContext(UserContext)
 return (
       <div className="m-4 p-3 w-[200px] rounded-md" style={{backgroundColor:'#f0f0f0'}}>
       <img className="res-logo rounded-lg" alt="res-logo"
        src={CDN_URL+cloudinaryImageId}/>
       <h3 className="font-bold py-2 text-xl">{name}</h3>
       <h4>{cuisines.join(',')}</h4>
       <h4>{avgRating}</h4>
       <h4>{costForTwo/100}for two</h4>
       <h4>{deliveryTime}minutes</h4>
       <h3>{loggedinUser}</h3>
    </div>)
}

export const WithPrometedLevel=(Resturentcard)=>{
      return (props)=>{
        return (
            <div>
                <level className='absolute bg-black text-white m-1 p-1 rounded-lg'> 
                    Promoted
                </level>
                <Resturentcard {...props}/>
            </div>
        )
      }
}


export default Resturentcard