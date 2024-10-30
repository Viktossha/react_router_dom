import React from 'react';
import pumaModel1 from './../../assets/pumaCA_Pro_Classic.jpeg'
import pumaModel2 from './../../assets/PUMA_Rebound_V6.jpg'
import pumaModel3 from './../../assets/PUMA_Carina_Street.jpeg'
import {Link} from "react-router-dom";

export type PumaItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: 1,
        model: 'PUMA CA Pro Classic Trainers',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaModel1,

    },
    {
        id: 2,
        model: 'PUMA Rebound V6 Low',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: 3,
        model: 'PUMA Carina Street',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaModel3
    }
]

export const Puma = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                {pumaArr.map(el => <Link to={`/puma/${el.id}`}>
                    <img style={{width: '400px'}} src={el.picture} alt={el.model}/>
                </Link>)}
            </div>
        </div>
    );
};

