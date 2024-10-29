import React from 'react';
import {adidasArr} from './Adidas'
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    let id = Number(params.id)
    let currentModel = adidasArr.find(el => el.id === id)
    console.log(params)
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h3>{currentModel.collection}</h3>
                    <img src={currentModel.picture} alt={currentModel.model}/>
                    <p>{currentModel.price}</p>
                </>
                : <h3>Модель отсутствует</h3>}
        </div>
    );
};