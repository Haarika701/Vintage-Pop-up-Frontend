import {Link} from "react-router-dom";
import React, {useState} from "react";

function VintageCard({vintage: {name, price, product_description, imgUrl, user_id, id}}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    
    return (
        <div >
            
            <div>{showBuy ? null: name}</div>
            <div >{showBuy ? price: null}</div>
            <div>{showBuy ? product_description: null }</div>
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            
            

        </div>
    )
}
export default VintageCard