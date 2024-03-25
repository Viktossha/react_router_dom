import React from 'react';
import {adidasArr, ModelItem} from "./Adidas";
import {useParams} from "react-router-dom";

type ModelPropsType = {
    array: Array<ModelItem>
}
const Model = (props: ModelPropsType) => {
    const params = useParams();

    // adidasArr.find(el => {
    //     if (el.id === params.id) {
    //         return <div style={{textAlign: "center"}}>
    //             <h3>{el.model}</h3>
    //             <div>{el.collection}</div>
    //             <img src={el.picture} alt={el.model}/>
    //             <div>{el.price}</div>
    //         </div>
    //     } else {
    //         return <div>Модель отсутствует </div>
    //     }})



    if (props.array.find(el => el.id === params.id)) {
        return (
            <div style={{textAlign: "center"}}>
                <h3>{props.array[Number(params.id)].model}</h3>
                        <div>{props.array[Number(params.id)].collection}</div>
                        <img src={props.array[Number(params.id)].picture} alt={props.array[Number(params.id)].model}/>
                       <div>{props.array[Number(params.id)].price}</div>
            </div>
        )
    } else {
        return <div>Модель отсутствует </div>
    }


    // return (
    //     <div style={{textAlign: "center"}}>
    //         {/*{adidasArr.map(el => {*/}
    //         {/*    if (el.id === params.id) {*/}
    //         {/*        return <div>*/}
    //         {/*            <h3>{el.model}</h3>*/}
    //         {/*            <div>{el.collection}</div>*/}
    //         {/*            <img src={el.picture} alt={el.model}/>*/}
    //         {/*            <div>{el.price}</div>*/}
    //         {/*        </div>*/}
    //         {/*    } else {*/}
    //         {/*        return <div>Модель отсутствует </div>*/}
    //         {/*    }*/}
    //         {/*})}*/}
    //     </div>
    // );
};

export default Model;