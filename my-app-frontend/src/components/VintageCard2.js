import {Link} from "react-router-dom";
import React, {useState} from "react";
import './index.css';

function VintageCard2({vintage: {name, price, product_description, imgUrl, user_id, id}}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    
    return (
        <div class="secondary">
            <img src={imgUrl}/>
            <br></br>
            <br></br>
            <div>Name:{showBuy ? null: name}</div>
            <br></br>
            <div >Price:${showBuy ? null:price}</div>
            <br></br>
            <div>Description:{showBuy ? null: product_description }</div>
            


        </div>
    )
}
export default VintageCard2