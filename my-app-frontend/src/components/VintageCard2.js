import {Link} from "react-router-dom";
import React, {useState} from "react";
import './index.css';

function VintageCard2({vintage: {name, price, product_description, imgUrl, user_id, id}}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    
    return (
        <card class="secondary">
            
            <div>Name:{showBuy ? null: name}</div>
            <div >{showBuy ? null:price}</div>
            <div>Description:{showBuy ? null: product_description }</div>
            <img src={imgUrl}/>
            


        </card>
    )
}
export default VintageCard2