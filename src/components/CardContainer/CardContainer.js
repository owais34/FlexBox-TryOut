import React, { useContext } from 'react';
import { ClassContext } from "../../App";
import Card from '../Card/Card';
import "./CardContainer.css";

function CardContainer(props) {
    const classContext=useContext(ClassContext)
    const concat=(total,curr)=>{
        return total +" "+curr
    }
    let classes=classContext.state.reduce(concat,"")
    console.log(classes)
    let cards_data=[0,1,2,3,4,5,6,7,8,9,10]

    return (
        <div className={classes+" flex"}>
            {
                cards_data.map(item=>{
                    return (<Card index={item} key={item} height={200+100*(item%2)}/>)
                })
            }
        </div>
    );
}

export default CardContainer;