import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
const Header =()=>{

    const [loginbtn,setloginbtn]=useState('Login')
return (
<div className="header">
        <div className="logo-continer">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
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