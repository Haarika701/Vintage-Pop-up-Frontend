import {Link} from "react-router-dom";
import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import './index.css';

function VintageCard({vintage: {name, price, product_description, imgUrl, user_id, id}}){
    const [showBuy, setShowBuy]=useState(false)
    
    
    return (
        <div>
            <Card>
            <div >{showBuy ? null: name}</div>
            <div >{showBuy ? price: null}</div>
            <div>{showBuy ? product_description: null }</div>
            <img src={imgUrl}/>
            <Link to= {`/Buy/${id}`}>Buy</Link>
            </Card>
            
            </div>
       
    )
}
export default VintageCard

