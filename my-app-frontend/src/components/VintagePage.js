import React, { useState,useEffect} from 'react';
import VintageList from  './VintageList';
// import NewVintageForm from './NewVintageForm'
import './index.css';

const MY_URL= 'http://localhost:9292/items'


function VintagePage({Url}){
    useEffect(getVintage, [Url])
    const [vintage, setVintage] = useState([])
    function getVintage(){
        fetch(MY_URL)
        .then(resp => resp.json())
        .then(allVintage => setVintage(allVintage))
    }
    return (
        <main>
            {/* <NewVintageForm/> */}
            <VintageList vintage = {vintage}/>
        </main>
    )
}
export default VintagePage