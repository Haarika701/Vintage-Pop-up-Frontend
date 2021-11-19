import {Link} from "react-router-dom";
import React, {useState} from "react";

function VintageCard2({vintage: {name, price, product_description, imgUrl, id}}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    
    return (
        <div >
            
            <div>{showBuy ? null: name}</div>
            <div >{showBuy ? null:price}</div>
            <div>{showBuy ? null: product_description }</div>
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            
            

        </div>
    )
}
export default VintageCard2