import React from 'react';
import './Container.css';
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import CardContainer from '../CardContainer/CardContainer';

function Container(props) {

    return (
        <div className="container1">
            <DropdownContainer/>
            <CardContainer />
        </div>
    );
}

export default Container;