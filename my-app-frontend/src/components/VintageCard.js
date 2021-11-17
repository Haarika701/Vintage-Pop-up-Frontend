
import React, {useState} from "react";

function VintageCard({vintage: {name, price, product_despcription, imgUrl, user_id}}){
    const [showBuy, setShowBuy]=useState(true)
    function handleClick(){
        setShowBuy((currentShowBuy)=> !currentShowBuy)
    }
    return (
        <div onClick={handleClick}>
            {name}
        </div>
    )
}
export default VintageCard