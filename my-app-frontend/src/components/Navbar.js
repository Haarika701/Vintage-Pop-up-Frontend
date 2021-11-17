import React from "react"; 
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <NavLink to ='/'>
            Homepage
        </NavLink>
        <NavLink to = '/Sell'>
            Sell
            </NavLink>

        </>
    )
}
export default Navbar