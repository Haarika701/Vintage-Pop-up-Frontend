import React, { useState, useEffect} from 'react';
import VintageCard from  './VintageCard';
import { useParams } from 'react-router-dom';
// import NewVintageForm from './NewVintageForm'

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
    // function intoArray(){
    //     Object.values(id)
    // }
    return (
        <main>
            
            <VintageCard vintage = {vintage} />
           
        <button className="primary">Purchase</button>

            <div>Hello World</div>
        </main>
    )
}
export default VintagePage