import React from 'react';
import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    let id = Number(params.id)
    console.log(params)
    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <h2>{adidasArr[id].model}</h2>
            <h3>{adidasArr[id].collection}</h3>
            <img src={adidasArr[id].picture} alt={adidasArr[id].model}/>
            <p>{adidasArr[id].price}</p>
        </div>

    );
};