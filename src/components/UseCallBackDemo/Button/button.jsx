import { IPVersion } from 'net';
import React, { useState } from 'react';

const Button = (props) => {
    console.log('rendering button', props.children)

    return(
        <div>
            <button onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
   
}

export default React.memo(Button);