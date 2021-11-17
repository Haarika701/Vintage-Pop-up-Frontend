import React from 'react';
import VintageCard from './VintageCard';

function VintageList({vintage}){
    const renderVintage = vintage.map(oneVintage=><VintageCard key = {oneVintage.id} vintage= {oneVintage}/>)

    return(
        <>
        {renderVintage}
        </>
    )
}
export default VintageList