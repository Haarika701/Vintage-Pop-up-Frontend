import NewVintageForm from './NewVintageForm';
import React, { useState, useEffect} from 'react';
import VintagePage from './Buy';
import './index.css';
const MY_URL= 'http://localhost:9292/items/'

function Sell({Url}){
    
        useEffect(getVintage, [Url])
        const [vintage, setVintage] = useState([])
        function getVintage(){
            fetch(MY_URL)
            .then(resp => resp.json())
            .then(allVintage => setVintage(allVintage))
        }
        return (
            <main>
                <NewVintageForm />
                
                
            </main>
        )
    }
    
    export default Sell
