import { CDN_URL } from "../utils/constants"

const Resturentcard = (props)=>{
    const {resdata}=props
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resdata?.data
 return (
       <div className="m-4 p-3 w-[200px] rounded-md" style={{backgroundColor:'#f0f0f0'}}>
       <img className="res-logo rounded-lg" alt="res-logo"
        src={CDN_URL+cloudinaryImageId}/>
       <h3 className="font-bold py-2 text-xl">{name}</h3>
       <h4>{cuisines.join(',')}</h4>
       <h4>{avgRating}</h4>
       <h4>{costForTwo/100}for two</h4>
       <h4>{deliveryTime}minutes</h4>
    </div>)
}

export default Resturentcard