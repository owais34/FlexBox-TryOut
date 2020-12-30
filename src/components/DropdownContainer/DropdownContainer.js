import React from 'react';
import DropDown from '../DropDown/DropDown';
import './DropdownContainer.css'

function DropdownContainer(props) {
    let fdvalues=["row","row-reverse","column","column-reverse"]
    let fwvalues=["wrap","nowrap","wrap-reverse"]
    let jcvalues=["flex-start","flex-end","start","end","left","right","center","space-between","space-around","space-evenly"]
    let aivalues=["stretch","flex-start","flex-end","center","baseline"]


    return (
        <div className="dropdown-container">
             <h3 className="typography2">Container Properties:</h3>
            <DropDown label={"flex-direction"} values={fdvalues} index={0}/>
            <DropDown label={"flex-wrap"} values={fwvalues} index={1}/>
            <DropDown label={"justify-content"} values={jcvalues} index={2}/>
            <DropDown label={"align-items"} values={aivalues} index={3}/>
        </div>
    );
}

export default DropdownContainer;