import React, { useState, useEffect} from 'react';
import VintageCard2 from  './VintageCard2';
import { useParams } from 'react-router-dom';
// import NewVintageForm from './NewVintageForm'
import './index.css';
const MY_URL= `http://localhost:9292/items/`

   

function VintagePage(){
    const [vintage, setVintage] = useState([])
    let {id}= useParams();
    useEffect(getVintage, [id])
    
    function getVintage(){
        fetch(MY_URL+id)
        .then(resp => resp.json())
        .then(allVintage => setVintage(allVintage))
    }
    
    function handleDeleteClick(e){
        fetch(`http://localhost:9292/items/${id}`,{
        method: 'DELETE',
          })
          .then(resp=> resp.json())
            .then((deletedItem)=>console.log(deletedItem))

    } 
      
    return (
        <main>
            
            <VintageCard2 vintage = {vintage} />
        <div> 
        <button className="purchaseItem" onClick={handleDeleteClick}>Purchase</button>
        </div>
            
        </main>
    )
    }
export default VintagePage