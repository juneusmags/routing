import React from 'react';

const Fourth = props =>{
    return(
        <div>
            
            <h1 style = {{color : props.color1}, {background : props.color2}}> {props.word}</h1>
        </div>
    );
}

export default Fourth;