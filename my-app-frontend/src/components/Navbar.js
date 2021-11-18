import React from "react"; 
import { NavLink } from "react-router-dom";
import './index.css';
import styled from 'styled-components'

function Navbar(){
    return(
        <div class="navbar">
        <NavLink to ='/'>
            Homepage
        </NavLink>
        <br></br>
        <NavLink to = '/Sell'>
            Sell
            </NavLink>

        </div>
    )
}
export default Navbar

