import React from 'react';
import {adidasArr, AdidasItem} from './Adidas'
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";

type CrossModels = {
    [key: string]: AdidasItem[] | PumaItem[]
}

const crossModels: CrossModels = {
    puma: pumaArr,
    adidas: adidasArr
}

export const Model = () => {
    const params = useParams()
    //const {model, id} = useParams()

    let id = Number(params.id)
    console.log(params)

    let currentModel = params.model ? crossModels[params.model].find(el => el.id === id) : null

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