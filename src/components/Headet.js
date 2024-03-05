import { LOGO_URL } from "../utils/constants"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import useOnlinestatus from "../utils/useOnliestatus"
import UserContext from "../utils/Usercontxt"
import { UseSelector, useSelector } from "react-redux"
import Cart from "./Cart"

const Header =()=>{

    const [loginbtn,setloginbtn]=useState('Login')
    const onlineStatus=useOnlinestatus()
    
    const {loggedinUser}=useContext(UserContext)
    const {UserNumber}=useContext(UserContext)

    const cardItems= useSelector((store)=>store.cart.items)

return (
<div className="flex justify-between bg-pink-200 shadow-lg">
        <div className="logo-continer">
            <img className="w-20 mx-7 my-3" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-4">
                <li className="px-6">
                   Online Stauts: {onlineStatus ? '✅' : '❌'}
                </li>
                <li className="px-6">
                    <Link to='/'>Home</Link>
                </li>
                <li className="px-6">
                    <Link to='/About' >About</Link>
                </li>
                <li className="px-6">
                   <Link to="/grocery" className="links">
                    Grocery
                   </Link>
                </li>
                <li className="px-6">
                    <Link to='/Contact'>Contact Us</Link>
                </li>
                <li className="px-6 font-bold text-lg cursor-pointer">
                    <Link to='/Cart'>Cart-({cardItems.length} Items)</Link>
                </li>
                <li className="px-6">{loggedinUser} : {UserNumber}</li>
                <button className="Login"
                 onClick={()=>{
                    loginbtn=='Login'
                    ?setloginbtn('Logout')
                    :setloginbtn('Login');
                 }} 
                >
                {loginbtn}
                </button>
            </ul>
        </div>

    </div>
)}
export default Header