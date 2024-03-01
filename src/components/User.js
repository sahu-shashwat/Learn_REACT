import { useState } from "react"
const User=({name,location,contact})=>{
    const [count]=useState(0)
    const [count2]=useState(1)    
    return (
        <div className="usercard">
            <h1>count1:{count}</h1>
            <h1> count2 : {count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Loaction:{location}</h3>
            <h4>Contact:{contact}</h4>
        </div>
    )
}
export default User