import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlinestatus from "../utils/useOnliestatus"
const Header =()=>{

    const [loginbtn,setloginbtn]=useState('Login')
    const onlineStatus=useOnlinestatus()

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
                <li className="px-6">Cart</li>
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