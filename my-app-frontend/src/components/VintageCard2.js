import {Link} from "react-router-dom";
import React, {useState} from "react";
import './index.css';

function VintageCard2({vintage: {name, price, product_description, imgUrl, user_id, id}, vintage}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    console.log(vintage.product_description)
    return (
        <card class="card">
            
            <div>{showBuy ? null: name}</div>
            <div >{showBuy ? null:price}</div>
            <div>{showBuy ? null:product_description }</div>
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            
        

        </card>
    )
}
export default VintageCard2