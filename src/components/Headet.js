import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header =()=>{

    const [loginbtn,setloginbtn]=useState('Login')
return (
<div className="header">
        <div className="logo-continer">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/About' >About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact Us</Link>
                </li>
                <li>Cart</li>
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