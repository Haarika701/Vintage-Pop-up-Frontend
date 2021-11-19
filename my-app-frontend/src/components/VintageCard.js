import {Link} from "react-router-dom";
import React, {useState} from "react";
//import { Card } from "semantic-ui-react";
import './index.css';

function VintageCard({vintage: {name, price, product_description, imgUrl, id}}){
    const [showBuy, setShowBuy]=useState(false)
    
    
    return (
        <div class= "card">
             <div >{showBuy ? null: name}</div> 
             <br></br>
            <div >{showBuy ? price: null}</div>
            <div>{showBuy ? product_description: null }</div>
            <img src={imgUrl}/>
            <br></br>
            <Link to= {`/Buy/${id}`}class="button">Buy</Link>
            </div>
            
       
    )
}
export default VintageCard

