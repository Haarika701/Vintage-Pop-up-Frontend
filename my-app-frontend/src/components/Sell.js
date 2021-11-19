import NewVintageForm from './NewVintageForm';
import React, { useState, useEffect} from 'react';


const MY_URL= 'http://localhost:9292/items/'

function Sell({Url}){
    const [vintage, setVintage] = useState([])
        useEffect(getVintage, [Url])
        
        function getVintage(){
            fetch(MY_URL)
            .then(resp => resp.json())
            .then(allVintage => setVintage(allVintage))
        }
        return (
            <main>
                <NewVintageForm setVintage={setVintage}/>
                
                
            </main>
        )
    }
    
    export default Sell
