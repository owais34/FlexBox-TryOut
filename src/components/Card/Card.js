import React from 'react';
import "./Card.css";

function Card({index,height}) {
    return (
        <div className="card" style={{minHeight:height+"px"}}>
            <h3 >Card{index}</h3>
        </div>
    );
}

export default Card;