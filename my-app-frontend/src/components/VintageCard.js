import {Link} from "react-router-dom";
import React, {useState} from "react";

function VintageCard({vintage: {name, price, product_despcription, imgUrl, user_id, id}}){
    const [showBuy, setShowBuy]=useState(false)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    return (
        <div >
            
            <div>{showBuy ? null: name}</div>
            <div >{showBuy ? price: null}</div>
            {product_despcription}
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            
            {user_id}

        </div>
    )
}
export default VintageCard