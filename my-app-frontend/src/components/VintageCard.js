import {Link} from "react-router-dom";
import React, {useState} from "react";
import './index.css';

function VintageCard({vintage: {name, price, product_description, imgUrl, user_id, id}, vintage}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    console.log(vintage.product_description)
    return (
        <card >
            
            <div >{showBuy ? null: name}</div>
            <div >{showBuy ? price: null}</div>
            <div>{showBuy ? product_description: null }</div>
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            
            

        </card>
    )
}
export default VintageCard

