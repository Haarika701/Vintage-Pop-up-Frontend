import React from 'react';
import VintageCard from './VintageCard';
import './index.css';
import { Card, Grid } from "semantic-ui-react";

function VintageList({vintage}){
    const renderVintage = vintage.map(oneVintage=><VintageCard key = {oneVintage.id} vintage= {oneVintage} />)
    console.log(vintage)
    

    return(
        
            <Card.Group>
       {renderVintage}
       </Card.Group>
        
    )
}
export default VintageList