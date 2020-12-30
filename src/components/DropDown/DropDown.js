import React, { useContext, useState } from 'react';
import "./DropDown.css";
import { ClassContext } from "../../App";

function DropDown({label,values,index,unique_code}) {
    const [option,setOption]=useState(values[0])
    const classContext=useContext(ClassContext)
    return (
        <div>
            <select name="flex direction"
             className="dropdown"
             onChange={(e)=>{
                 setOption(e.target.value)
                 classContext.dispatch(index+" "+e.target.value)
                }} 
            value={option}>
                <optgroup label={label} className="label">
                    {
                        values.map((value,key_index)=>{
                            return (
                                <option className="dropdown-option" 
                                value={value}  
                                key={key_index}>{value}</option>
                            )
                        })
                    }
                </optgroup>
            </select>
        </div>
    );
}

export default DropDown;