import React from 'react';

export default function TextInput(props){
    function handleChange(e){
        if (props.stateKey === "token") return;
        
    }
    return (
        <input 
            type={props.type}
            value={props.value} 
            placeholder={props.placeholder || ''} 
            onChange={handleChange}
            readOnly={!props.editable}
        />
    );
}
