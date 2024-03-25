import React from 'react';
import {adidasArr, ModelItem} from "./Adidas";
import {useParams} from "react-router-dom";

type ModelPropsType = {
    array: Array<ModelItem>
}
const Model = (props: ModelPropsType) => {
    const params = useParams();
    const currentModel = props.array.find(el => el.id === params.id);

    return (
        <div style={{textAlign: "center"}}>
            {currentModel
                ?
                <>
                    <h3>{currentModel.model}</h3>
                    <div>{currentModel.collection}</div>
                    <img src={currentModel.picture} alt={currentModel.model}/>
                    <div>{currentModel.price}</div>
                </>
                :
                <div>Модель отсутствует </div>
            }
        </div>
    )


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
}
;

export default Model;